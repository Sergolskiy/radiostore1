import {Component, OnDestroy, OnInit,NgModule} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from "../../../services/user.service";
import {Subscription} from 'rxjs/Subscription';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {DialogOverviewExampleDialog} from "../../dialog/dialog.component";
import {DialogOverviewExampleConfirmDialog} from "../../dialog/dialogConfirm.component";
import {MatDialog, MatTableDataSource} from '@angular/material';



@Component({
  selector: 'app-update-users',
  templateUrl: './users-update.component.html',
  styleUrls: ['./users-update.component.scss']
})


export class UsersUpdateComponent implements OnDestroy {

    private id: number;
    private subscription: Subscription;

    user: any;
    titleTag: any;
    userRoles: any;
    userGroups: any;
    orders: any;
    address: any;
    userTypes: any;
    isUniqueEmail: boolean = true;
    isUniquePhone: boolean = true;
    isUniqueTag: boolean = true;

    ordersCount: any;
    ordersTotalSum: any;

    userForm: FormGroup;
    tagForm: FormGroup;
    public mask: Array<string | RegExp>;
    user_role_id: number;

    message: string;
    title: string;
    blockSubmit: boolean = false;
    blockSubmitTag: boolean = false;

    constructor(private service: UserService, private activateRoute: ActivatedRoute, private router: Router, public dialog: MatDialog) {
        this.mask = [/\+/,/[0-9]/,/\d/, ' ', '(', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

        this.subscription = activateRoute.params.subscribe(params=>
            this.id = params['id']
        );

        this.tagForm = new FormGroup({
           'titleTag': new FormControl(null, [
               Validators.maxLength(100),
               Validators.pattern("^[a-z|A-Z|А-Я|а-я|ІіЇїЄєҐґ ]*$"),
           ]),
        });

        this.userForm = new FormGroup({
            "user_role_id": new FormControl(null, [
                Validators.required,
                Validators.pattern("\\d+"),
            ]),
            "user_group_id": new FormControl(null, [
                Validators.required,
                Validators.pattern("\\d+"),
            ]),
            "first_name": new FormControl(null, [
                Validators.maxLength(64),
                Validators.pattern("^[a-z|A-Z|А-Я|а-я|ІіЇїЄєҐґ]*$"),
            ]),
            "middle_name": new FormControl(null, [
                Validators.required,
                Validators.maxLength(64),
                Validators.pattern("^[a-z|A-Z|А-Я|а-я|ІіЇїЄєҐґ]*$"),
            ]),
            "last_name": new FormControl(null, [
                Validators.required,
                Validators.maxLength(64),
                Validators.pattern("^[a-z|A-Z|А-Я|а-я|ІіЇїЄєҐґ]*$"),
            ]),
            "email": new FormControl(null, [
                Validators.required,
                Validators.email,
                Validators.pattern("[a-z|A-Z|0-9|_|\\-|\\.]+@[a-z|A-Z|0-9|_|\\-]+?\\.[a-z|A-Z]{2,3}")
            ]),
            "phone": new FormControl(null, [
                // Validators.required,
                Validators.pattern("^(\\+)([0-9]{2})(\\ ?)(\\()([0-9]{3})(\\))(\\ )([0-9]{3})(\\-)([0-9]{4})$"),
            ]),
            "note": new FormControl(null, []),
        });

        this.service.userUpdateForm(this.id).subscribe((res:any) => {
            console.log(res);
            this.user = res.user;
            this.userRoles = res.userRoles;
            this.userGroups = res.userGroups;
            this.orders = res.orders;
            this.address = res.address;
            this.ordersCount = res.ordersCount;
            this.ordersTotalSum = res.ordersTotalSum;

            this.userTypes = res.userTypes.map(function(item) {
                item.checked = false;
                res.user.tags.forEach(function (itemTag, i) {
                    if(itemTag.user_tag_type_id == item.id){
                        item.checked = true;
                     }
                });
                return item;
            });
            this.user_role_id = res.user.user_role_id;

            this.userForm.patchValue({
                phone: !!this.user.phone ? this.user.phone : null,
                email: !!this.user.email ? this.user.email : null,
                last_name: !!this.user.last_name ? this.user.last_name : null,
                middle_name: !!this.user.middle_name ? this.user.middle_name : null,
                first_name: !!this.user.first_name ? this.user.first_name : null,
                user_role_id: !!this.user.user_role_id ? this.user.user_role_id : null,
                user_group_id: !!this.user.user_group_id ? this.user.user_group_id : null,
                note: !!this.user.note ? this.user.note : null,
            });
            console.log(this.userForm);
        });
    }

    submit() {
        this.blockSubmit = true;
        console.log(this.userForm);
        if(!this.userForm.invalid) {
            this.userForm.value.id = this.id;
            this.service.updateUser(this.userForm.value).subscribe((res: any) => {
                this.title = 'Операция успешна';
                this.message = 'Пользователь обновлен';
                this.openDialog();
            }, (error) => {
                this.blockSubmit = false;
                console.log(error.errors);
                for (let key in error.errors) {
                    this.userForm.controls[key].setErrors({server_error: error.errors[key][0]});
                }
            });
        }
    }

    submitAddNewTag() {
        let data = {
            title: this.tagForm.controls['titleTag'].value,
            users: this.user.id
        };
        this.service.createNewTag(data).subscribe((res:any) => {
            this.userTypes.push({
                id: res.id,
                title: res.title,
                checked: true,
            });
        });
        this.isUniqueTag = false;
        this.blockSubmitTag = false;
        this.tagForm.controls['titleTag'].reset();
    }

    valueChange(unit, $event) {
        this.userTypes[unit].checked = $event.checked;
    }

    submit1(){
        if(this.userTypes){
            let mapTypes = {user_tag_types: this.userTypes.map(function(item) {
                    return {
                        id: item.id,
                        checked: item.checked,
                    }
                }),
                users: this.user.id
            };
            this.service.updateUserTag(mapTypes).subscribe((res: any) => {
                this.title = 'Операция успешна';
                this.message = 'Теги обновлены';
                this.openDialog();
            });
        }
    }

    openDialog(): void {
        let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            width: '250px',
            data: { title: this.title, message: this.message }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

    deleteTag(index, tagId) {
        this.title = 'Операция успешна';
        this.message = 'Теги обновлены';
        this.openDialogConfirm(index, tagId);
    }

    openDialogConfirm(index, tagId) {
        let dialogRef = this.dialog.open(DialogOverviewExampleConfirmDialog, {
            width: '500px',
            data: { title: 'Предупреждение', message: 'При удаление метки, она будет снята и удалена для всех пользователей на которых она назначена!' }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                let data = {
                    id: tagId,
                };
                this.service.deleteTagUser(data).subscribe( (res: any) => {
                     if (res.status) {
                         this.userTypes.splice(index, 1);
                         console.log(this.userTypes);
                     }
                })
            }
        });
    }

  checkUniqueValue(type) {
        console.log(this.userForm.controls[type]);
        if(this.userForm.controls[type].valid) {
            let data = {
                value: this.userForm.controls[type].value
            };

            this.service.checkUniqueEmail(data, type).subscribe((res: any) => {
                if(res.exists){
                    if(res.type == 'email'){
                        this.isUniqueEmail = false;
                        this.userForm.controls['email'].setErrors({unique: 'Этот Email уже зарегистрирован'});
                    }else if(res.type == 'phone'){
                        this.isUniquePhone = false;
                        this.userForm.controls['phone'].setErrors({unique: 'Этот телефон уже зарегистрирован'});
                    }
                }else{
                    if(res.type == 'email'){
                        this.isUniqueEmail = true;
                    }else if(res.type == 'phone'){
                        this.isUniquePhone = true;
                    }
                }
            });
        }
    }

    checkUniqueValueTag(type) {
        if(this.tagForm.controls[type].valid) {
            let data = {
                value: this.tagForm.controls[type].value
            };

            this.service.checkUniqueTag(data).subscribe((res: any) => {
                if(res.exists){
                    this.blockSubmitTag = false;
                    this.isUniqueTag = false;
                    this.tagForm.controls['titleTag'].setErrors({unique: 'Такая метка уже существует'});
                } else {
                    this.blockSubmitTag = true;
                    this.isUniqueTag = true;
                }
            });
        }
    }

    endOfSentence(number,words)
    {
        number = number % 100;
        if (number > 19) {
            number = number % 10;
        }
        switch (number) {
            case 1: {
                return(words[0]);
            }
            case 2: case 3: case 4: {
                return(words[1]);
            }
            default: {
                return(words[2]);
            }
        }
    }

    createTag(id)
    {
        this.router.navigate(['/create/tag', id]);
    }

    toProduct(slug) {
        this.router.navigate(['products/update', slug]);
    }

    toOrder(id) {
        this.router.navigate(['order/update', id]);
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
}
