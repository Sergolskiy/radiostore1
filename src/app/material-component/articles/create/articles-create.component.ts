import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { UserService } from "../../../services/user.service";
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import {DialogOverviewExampleDialog} from "../../dialog/dialog.component";
import {Router} from "@angular/router";
import {CategoriesService} from "../../../services/categories.service";
import {NewsService} from "../../../services/news.service";
import {ArticlesService} from "../../../services/articles.service";
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from "@angular/material/core";
import {MomentDateAdapter} from "@angular/material-moment-adapter";
import * as moment from "moment";
import {MatDatepickerInputEvent} from "@angular/material/datepicker";

export const MY_FORMATS = {
    parse: {
        dateInput: 'L',
    },
    display: {
        dateInput: 'L',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMM YYYY',
    },
};


@Component({
  selector: 'app-create-articles',
  templateUrl: './articles-create.component.html',
  styleUrls: ['./articles-create.component.scss'],
    providers: [
        {provide: MAT_DATE_LOCALE, useValue: 'ru-US'},
        {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
        {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
    ]
})
export class ArticlesCreateComponent implements OnInit {

    articleForm: FormGroup;

    message: string;
    title: string;

    blockSubmit: boolean = false;

    constructor(private service: ArticlesService, private router: Router, public dialog: MatDialog) {

        this.articleForm = new FormGroup({
            "title": new FormControl(null, [
                Validators.required,
            ]),
            "text": new FormControl(null, [
                Validators.required,
            ]),
            "published": new FormControl(null, [
            ]),
            "published_at": new FormControl(null, [
                Validators.required,
            ]),
            "meta_title": new FormControl(null, [
            ]),
            "meta_description": new FormControl(null, [
            ]),
            "meta_keywords": new FormControl(null, [
            ]),
            "link": new FormControl(null, [
                Validators.required,
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

    ngOnInit() {}

    submit() {
        this.blockSubmit = true;
        console.log(this.articleForm);
        if(!this.articleForm.invalid) {
            this.service.setArticle(this.articleForm.value).subscribe((res: any) => {
                if(res.status) {
                    this.title = 'Операция успешна';
                    this.message = 'Видеообзор создан';
                    this.openDialog();
                    this.router.navigate(['/articles']);
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
                    this.articleForm.controls[key].setErrors({server_error: error.errors[key][0]});
                }
            });
        }
    }

    changeDate(e: MatDatepickerInputEvent<Date>){
        console.log(e);
        this.articleForm.patchValue({
            published_at: moment(e.value).format('YYYY-MM-DD HH:mm:ss')
        });
    }


}
