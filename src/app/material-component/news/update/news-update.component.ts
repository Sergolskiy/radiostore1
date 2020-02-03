import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from "../../../services/user.service";
import {Subscription} from 'rxjs/Subscription';
import {AbstractControl, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {CategoriesService} from "../../../services/categories.service";
import {NewsService} from "../../../services/news.service";
import {MatDialog} from "@angular/material";
import {DialogOverviewExampleDialog} from "../../dialog/dialog.component";
import * as moment from "moment";
import {MatDatepickerInputEvent} from "@angular/material/datepicker";
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from "@angular/material/core";
import {MomentDateAdapter} from "@angular/material-moment-adapter";

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
  selector: 'app-update-news',
  templateUrl: './news-update.component.html',
  styleUrls: ['./news-update.component.scss'],
    providers: [
        {provide: MAT_DATE_LOCALE, useValue: 'ru-US'},
        {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
        {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
    ]
})
export class NewsUpdateComponent implements OnDestroy {

    private slug: number;
    private subscription: Subscription;

    newsForm: FormGroup;
    news: any;
    image: any = null;

    message: string;
    title: string;

    blockSubmit: boolean = false;

    text: any = null;

    constructor(private service: NewsService, private activateRoute: ActivatedRoute, private router: Router, public dialog: MatDialog) {

        this.subscription = activateRoute.params.subscribe(params=>
            this.slug = params['slug']
        );

        this.newsForm = new FormGroup({
            "title": new FormControl(null, [
                Validators.required,
            ]),
            "text": new FormControl(null, [
                Validators.required,
            ]),
            "published": new FormControl(0, [
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
        });

        this.subscription = this.service.newsUpdateForm(this.slug).subscribe((res:any) => {
            this.news = res.news;

            setTimeout(()=>{
                this.text = this.news.text;
            }, 4000);


            this.newsForm.patchValue({
                title: !!this.news.title ? this.news.title : null,
                text: !!this.news.text ? this.news.text : null,
                published: !!this.news.published ? this.news.published : 0,
                meta_title: !!this.news.meta_title ? this.news.meta_title : null,
                meta_description: !!this.news.meta_description ? this.news.meta_description : null,
                meta_keywords: !!this.news.meta_keywords ? this.news.meta_keywords : null,
                published_at: !!this.news.formatingPublishedAt ? this.news.formatingPublishedAt : false,
            });
        });
    }


    submit() {
        this.blockSubmit = true;
        console.log(this.newsForm);
        this.newsForm.controls['text'].setValue(this.text);
        if(!this.newsForm.invalid) {

            let formData: FormData = new FormData();
            formData.append('id', this.news.id);
            formData.append('title', this.newsForm.controls['title'].value);
            formData.append('text', this.newsForm.controls['text'].value);
            formData.append('published', this.newsForm.controls['published'].value);
            formData.append('published_at', this.newsForm.controls['published_at'].value);
            formData.append('meta_title', this.newsForm.controls['meta_title'].value);
            formData.append('meta_description', this.newsForm.controls['meta_description'].value);
            formData.append('meta_keywords', this.newsForm.controls['meta_keywords'].value);
            formData.append('image', this.image);
            console.log(this.newsForm.value);
            this.service.updateNews(formData).subscribe((res: any) => {
                if(res.status) {
                    this.title = 'Операция успешна';
                    this.message = 'Новость обновлена';
                    this.openDialog();
                    this.router.navigate(['/news']);
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
                    this.newsForm.controls[key].setErrors({server_error: error.errors[key][0]});
                }
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
            this.message = result;
        });
    }

    setImage(event) {
        console.log(event.target.files);
        this.image = event.target.files[0];
    }

    changeDate(e: MatDatepickerInputEvent<Date>){
        console.log(e);
        this.newsForm.patchValue({
            published_at: moment(e.value).format('YYYY-MM-DD HH:mm:ss')
        });
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
}
