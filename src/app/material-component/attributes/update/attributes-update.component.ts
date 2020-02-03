import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from "../../../services/user.service";
import {Subscription} from 'rxjs/Subscription';
import {AbstractControl, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {CategoriesService} from "../../../services/categories.service";
import {NewsService} from "../../../services/news.service";
import {ArticlesService} from "../../../services/articles.service";
import {AttributesService} from "../../../services/attributes.service";
import {MatDialog, MatTableDataSource, PageEvent} from "@angular/material";
import {DialogOverviewExampleDialog} from "../../dialog/dialog.component";
import {DialogOverviewDeExampleDialog} from "../../dialog/dialog-delete.component";

@Component({
  selector: 'app-update-attributes',
  templateUrl: './attributes-update.component.html',
  styleUrls: ['./attributes-update.component.scss']
})
export class AttributesUpdateComponent implements OnDestroy {

    private id: number;
    private subscription: Subscription;

    attributeForm: FormGroup;
    attributeValueForm: FormGroup;
    attribute: any;
    types: any;

    attributeValues: any = null;
    displayedColumns: Array<string> = [ 'id', 'value', 'sort_id', 'action' ];

    message: string;
    title: string;

    checkDelete: boolean = false;

    blockSubmit: boolean = false;
    blockSubmitValue: boolean = false;

    displayedCategoryColumns = ['id', 'title', 'action'];
    dataSource = null;
    addCategoryForm: FormGroup;
    options = [];

    constructor(private service: AttributesService, private activateRoute: ActivatedRoute, private router: Router, public dialog: MatDialog) {

        this.subscription = activateRoute.params.subscribe(params=>
            this.id = params['id']
        );

        this.attributeForm = new FormGroup({
            "attribute_type_id": new FormControl(null, [
                Validators.required,
            ]),
            "title": new FormControl(null, [
                Validators.required,
            ]),
            "sort_id": new FormControl(null, [
            ]),
            "is_filter": new FormControl(0, [
            ]),
        });

        this.attributeValueForm = new FormGroup({
            "value": new FormControl(null, [
                Validators.required,
            ]),
        });

        this.addCategoryForm = new FormGroup({
            "category_id" : new FormControl(null, [
                Validators.required
            ]),
        });

        this.service.attributeUpdateForm(this.id).subscribe((res:any) => {
            this.attribute = res.attribute;
            this.types = res.types;
            this.attributeValues = new MatTableDataSource(this.attribute.values);
            this.dataSource = new MatTableDataSource(this.attribute.categories);

            this.attributeForm.patchValue({
                title: !!this.attribute.title ? this.attribute.title : null,
                attribute_type_id: !!this.attribute.attribute_type_id ? this.attribute.attribute_type_id : null,
                sort_id: !!this.attribute.sort_id ? this.attribute.sort_id : null,
                is_filter: !!this.attribute.is_filter ? this.attribute.is_filter : 0
            });
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

    openDialogForDelete(id): void {
        let dialogRef = this.dialog.open(DialogOverviewDeExampleDialog, {
            width: '250px',
            data: { title: this.title, message: this.message, checkDelete: this.checkDelete }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            console.log(result);
            this.checkDelete = result;

            if(this.checkDelete == false) {
                this.service.deleteAttributeValue(id).subscribe((res:any) => {
                    if(res.status) {
                        this.checkDelete = false;
                        this.attributeValues.data.forEach((el, i) => {
                            if (el.id == id) {
                                this.attributeValues.data.splice(i, 1);
                            }
                        });

                        this.attributeValues = new MatTableDataSource(this.attributeValues.data);
                    }
                });
            } else {
                this.checkDelete = false;
            }
        });
    }


    submit() {
        this.blockSubmit = true;
        console.log(this.attributeForm);
        if(!this.attributeForm.invalid) {
            this.attributeForm.value.attribute_id = this.attribute.id;
            this.service.updateAttribute(this.attributeForm.value).subscribe((res: any) => {
                if(res.status) {
                    this.title = 'Операция успешна';
                    this.message = 'Атрибут обновлен';
                    this.openDialog();
                    this.router.navigate(['/attributes']);
                } else {
                    this.blockSubmit = false;
                    this.title = 'Что-то пошло не так';
                    this.message = 'Возможно вы ввели неверные данные';
                    this.openDialog();
                }
            }, (error) => {
                this.blockSubmit = false;
                console.log(error.errors);
                this.title = 'Что-то пошло не так';
                this.message = 'Возможно вы ввели неверные данные';
                this.openDialog();
                for (let key in error.errors) {
                    this.attributeForm.controls[key].setErrors({server_error: error.errors[key][0]});
                }
            });
        }
    }

    createValue() {
        this.blockSubmitValue = true;
        console.log(this.attributeValueForm);
        if(!this.attributeValueForm.invalid) {
            this.attributeValueForm.value.attribute_id = this.attribute.id;
            this.service.setAttributeValue(this.attributeValueForm.value).subscribe((res: any) => {
                if(res.attributeValue) {
                    this.attributeValueForm.controls['value'].patchValue(null);
                    this.attributeValueForm.controls['value'].setErrors(null);
                    this.title = 'Операция успешна';
                    this.message = 'Значение добавлено';
                    this.openDialog();
                    this.attributeValues.data.push(res.attributeValue);
                    this.attributeValues = new MatTableDataSource(this.attributeValues.data);
                } else {
                    this.blockSubmitValue = false;
                    this.title = 'Что-то пошло не так';
                    this.message = 'Возможно вы ввели неверные данные';
                    this.openDialog();
                }
            }, (error) => {
                this.blockSubmitValue = false;
                console.log(error.errors);
                this.title = 'Что-то пошло не так';
                this.message = 'Возможно вы ввели неверные данные';
                this.openDialog();
                for (let key in error.errors) {
                    this.attributeForm.controls[key].setErrors({server_error: error.errors[key][0]});
                }
            });
        }
    }

    updateValue(form: NgForm) {
        console.log(form.value);
        form.value.attribute_id =
        this.service.updateAttributeValue(form.value).subscribe((res: any) => {
            if(res.status) {
                this.title = 'Операция успешна';
                this.message = 'Значение обновлено';
                this.openDialog();
            } else {
                this.title = 'Что-то пошло не так';
                this.message = 'Возможно вы ввели неверные данные';
                this.openDialog();
            }
        }, (error) => {
            console.log(error.errors);
            for (let key in error.errors) {
                this.attributeForm.controls[key].setErrors({server_error: error.errors[key][0]});
            }
        });
    }

    deleteValue(id) {
        this.title = 'Удаление значение';
        this.message = 'Подтвердите операцию';
        this.openDialogForDelete(id);
    }

    addCategories(e){
        console.log(e.target.value);
        this.service.getCategories({ name: e.target.value}).subscribe(res => {
            console.log(res);
            this.options = res.categories;
        }, err => alert(err.message));
    }

    addCategory(){
        console.log(this.addCategoryForm.value);
        let index = this.options.findIndex(el => el.title == this.addCategoryForm.value.category_id);
        console.log(index);
        let data = {
            attribute_id: this.attribute.id,
            category_id: this.options[index].id,
        };

        console.log(data);

        this.service.setCategory(data).subscribe(res => {
            if(res.category) {
                this.attribute.categories.push(res.category);

                this.dataSource = new MatTableDataSource(this.attribute.categories);

                this.addCategoryForm.controls['category_id'].patchValue(null);
                this.addCategoryForm.controls['category_id'].setErrors(null);
            }
        }, err => alert(err.message));
    }

    remove(id) {

        let data = {
          category_id: id,
          attribute_id: this.attribute.id,
        };

        this.service.deleteCategory(data).subscribe((res:any) => {
            if(res.status) {
                this.dataSource.data.forEach((el, i) => {
                    if(el.id == id) {
                        this.dataSource.data.splice(i, 1);

                        this.dataSource = new MatTableDataSource(this.dataSource.data);
                    }
                });
            }
        });
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
}
