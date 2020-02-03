import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from "../../../services/user.service";
import {Subscription} from 'rxjs/Subscription';
import {AbstractControl, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {CategoriesService} from "../../../services/categories.service";
import {NewsService} from "../../../services/news.service";
import {ArticlesService} from "../../../services/articles.service";
import {MatDialog} from "@angular/material";
import {DialogOverviewExampleDialog} from "../../dialog/dialog.component";
import {MatDatepickerInputEvent} from "@angular/material/datepicker";
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as moment from 'moment';

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
  selector: 'app-update-articles',
  templateUrl: './articles-update.component.html',
  styleUrls: ['./articles-update.component.scss'],
    providers: [
        {provide: MAT_DATE_LOCALE, useValue: 'ru-US'},
        {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
        {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
    ]
})
export class ArticlesUpdateComponent implements OnDestroy {

    private slug: number;
    private subscription: Subscription;

    articleForm: FormGroup;
    article: any;

    message: string;
    title: string;

    blockSubmit: boolean = false;

    text: any = null;


    constructor(private service: ArticlesService, private activateRoute: ActivatedRoute, private router: Router, public dialog: MatDialog) {

        this.subscription = activateRoute.params.subscribe(params=>
            this.slug = params['slug']
        );

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

        this.subscription = this.service.articleUpdateForm(this.slug).subscribe((res:any) => {
            this.article = res.article;

            setTimeout(()=>{
                this.text = this.article.text;
            }, 4000);
            // console.log(this.article.text);

            this.articleForm.patchValue({
                title: !!this.article.title ? this.article.title : null,
                text: !!this.article.text ? this.article.text : null,
                published: !!this.article.published ? this.article.published : null,
                meta_title: !!this.article.meta_title ? this.article.meta_title : null,
                meta_description: !!this.article.meta_description ? this.article.meta_description : null,
                meta_keywords: !!this.article.meta_keywords ? this.article.meta_keywords : null,
                published_at: !!this.article.formatingPublishedAt ? this.article.formatingPublishedAt : false,
                link: !!this.article.video ? this.article.video.link : null
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


    submit() {
        this.blockSubmit = true;
        this.articleForm.controls['text'].setValue(this.text);
        console.log(this.articleForm);
        if(!this.articleForm.invalid) {
            this.articleForm.value.id = this.article.id;
            this.service.updateArticle(this.articleForm.value).subscribe((res: any) => {
                if(res.status) {
                    this.title = 'Операция успешна';
                    this.message = 'Видеообзор обновлен';
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

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
}
