import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { UserService } from "../../../services/user.service";
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import {DialogOverviewExampleDialog} from "../../dialog/dialog.component";
import {Router} from "@angular/router";
import {CategoriesService} from "../../../services/categories.service";

@Component({
  selector: 'app-create-categories',
  templateUrl: './categories-create.component.html',
  styleUrls: ['./categories-create.component.scss']
})
export class CategoriesCreateComponent implements OnInit {

    categoryForm: FormGroup;
    categories: any;

    message: string;
    title: string;

    blockSubmit: boolean = false;

    constructor(private service: CategoriesService, private router: Router, public dialog: MatDialog) {

        this.categoryForm = new FormGroup({
            "parent_id": new FormControl(null, [
                // Validators.required,
            ]),
            "title": new FormControl(null, [
                Validators.required,
            ]),
            "description": new FormControl(null, [
            ]),
            "meta_title": new FormControl(null, [
            ]),
            "meta_description": new FormControl(null, [
            ]),
            "meta_keywords": new FormControl(null, [
            ]),
            "is_active": new FormControl(0, [
                // Validators.required,
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
        this.service.categoryForm().subscribe((res:any) => {
            this.categories = res.categories;
        });
    }

    submit() {
        this.blockSubmit = true;
        console.log(this.categoryForm);
        if(!this.categoryForm.invalid) {
            this.service.setCategory(this.categoryForm.value).subscribe((res: any) => {
                if(res.status) {
                    this.title = 'Операция успешна';
                    this.message = 'Категория создана';
                    this.openDialog();
                    this.router.navigate(['/categories']);
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
                    this.categoryForm.controls[key].setErrors({server_error: error.errors[key][0]});
                }
            });
        }
    }

    // checkUniqueValue(type) {
    //     console.log(this.userForm.controls[type]);
    //     if(this.userForm.controls[type].valid) {
    //         let data = {
    //             value: this.userForm.controls[type].value
    //         };
    //
    //         this.service.checkUniqueEmail(data, type).subscribe((res: any) => {
    //             if(res.exists){
    //                 if(res.type == 'email'){
    //                     this.isUniqueEmail = false;
    //                     this.userForm.controls['email'].setErrors({unique: 'Этот Email уже зарегистрирован'});
    //                 }else if(res.type == 'phone'){
    //                     this.isUniquePhone = false;
    //                     this.userForm.controls['phone'].setErrors({unique: 'Этот телефон уже зарегистрирован'});
    //                 }
    //             }else{
    //                 if(res.type == 'email'){
    //                     this.isUniqueEmail = true;
    //                 }else if(res.type == 'phone'){
    //                     this.isUniquePhone = true;
    //                 }
    //             }
    //         });
    //     }
    // }
}
