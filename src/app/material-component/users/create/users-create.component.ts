import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { UserService } from "../../../services/user.service";
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import {DialogOverviewExampleDialog} from "../../dialog/dialog.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-users',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.scss']
})
export class UsersCreateComponent implements OnInit {

    message: string;
    title: string;

    userForm: FormGroup;
    userRoles: any;
    userGroups: any;
    isUniqueEmail: boolean = true;
    isUniquePhone: boolean = true;
    isFinished: boolean = false;
    // button: string = 'Создать';
    public mask: Array<string | RegExp>;

    blockSubmit: boolean = false;

    constructor(private service: UserService, private router: Router, public dialog: MatDialog) {
        this.mask = ['(', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

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
                Validators.required,
                Validators.maxLength(64),
                Validators.pattern("^[a-z|A-Z|А-Я|а-я]*$"),
            ]),
            "middle_name": new FormControl(null, [
                Validators.required,
                Validators.maxLength(64),
                Validators.pattern("^[a-z|A-Z|А-Я|а-я]*$"),
            ]),
            "last_name": new FormControl(null, [
                Validators.required,
                Validators.maxLength(64),
                Validators.pattern("^[a-z|A-Z|А-Я|а-я]*$"),
            ]),
            "email": new FormControl(null, [
                Validators.required,
                Validators.email,
                Validators.pattern("[a-z|A-Z|0-9|_|\-|\.]+@[a-z|A-Z|0-9|_|\-]+?\.[a-z|A-Z]{2,3}")
            ]),
            "phone": new FormControl(null, [
                Validators.required,
                Validators.pattern("^[(][0-9]{3}[)] [0-9]{3}-[0-9]{4}$"),
            ]),
        });
    }

    openDialog(): void {
        let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            width: '250px',
            data: { title: this.title, message: this.message }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.message = result;
        });
    }

    ngOnInit() {
        this.service.userForm().subscribe((res:any) => {
            this.userRoles = res.userRoles;
            this.userGroups = res.userGroups;
        });
    }

    submit() {
        this.blockSubmit = true;
        this.isFinished = true;
        console.log(this.userForm);
        if(!this.userForm.invalid) {
            this.service.setUser(this.userForm.value).subscribe((res: any) => {
                if(res.status) {
                    this.title = 'Операция успешна';
                    this.message = 'Пользователь создан';
                    this.openDialog();
                    this.router.navigate(['/users']);
                } else {
                    this.blockSubmit = false;
                    this.isFinished = false;
                    this.title = 'Что-то пошло не так';
                    this.message = 'Возможно вы ввели неверные данные';
                    this.openDialog();
                }
            }, (error) => {
                this.blockSubmit = false;
                console.log(error.errors);
                this.isFinished = false;
                this.title = 'Что-то пошло не так';
                this.message = 'Возможно вы ввели неверные данные';
                this.openDialog();
                for (let key in error.errors) {
                    this.userForm.controls[key].setErrors({server_error: error.errors[key][0]});
                }
            });
        }
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
}
