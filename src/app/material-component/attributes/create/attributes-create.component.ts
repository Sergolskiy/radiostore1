import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { UserService } from "../../../services/user.service";
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import {DialogOverviewExampleDialog} from "../../dialog/dialog.component";
import {Router} from "@angular/router";
import {CategoriesService} from "../../../services/categories.service";
import {NewsService} from "../../../services/news.service";
import {ArticlesService} from "../../../services/articles.service";
import {AttributesService} from "../../../services/attributes.service";

@Component({
  selector: 'app-create-attributes',
  templateUrl: './attributes-create.component.html',
  styleUrls: ['./attributes-create.component.scss']
})
export class AttributesCreateComponent implements OnInit {

    attributeForm: FormGroup;
    types: any = null;

    message: string;
    title: string;

    blockSubmit: boolean = false;

    constructor(private service: AttributesService, private router: Router, public dialog: MatDialog) {

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
    }

    ngOnInit() {
        this.service.attributeForm().subscribe((res:any) => {
            if(res.types) {
                this.types = res.types;
            }
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

    submit() {
        this.blockSubmit = true;
        console.log(this.attributeForm);
        if(!this.attributeForm.invalid) {
            this.service.setAttribute(this.attributeForm.value).subscribe((res: any) => {
                if(res.status) {
                    this.title = 'Операция успешна';
                    this.message = 'Атрибут создан';
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

}
