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
import {PagesService} from "../../../services/pages.service";


@Component({
  selector: 'app-update-pages',
  templateUrl: './pages-update.component.html',
  styleUrls: ['./pages-update.component.scss'],
    providers: []
})
export class PagesUpdateComponent implements OnDestroy {

    private id: number;
    private subscription: Subscription;

    pageForm: FormGroup;
    page: any;

    message: string;
    title: string;

    blockSubmit: boolean = false;


    constructor(private service: PagesService, private activateRoute: ActivatedRoute, private router: Router, public dialog: MatDialog) {

        this.subscription = activateRoute.params.subscribe(params=>
            this.id = params['id']
        );

        this.pageForm = new FormGroup({
            "meta_title": new FormControl(null, [
            ]),
            "meta_description": new FormControl(null, [
            ]),
            "meta_keywords": new FormControl(null, [
            ]),
        });

        this.subscription = this.service.pagesUpdateForm(this.id).subscribe((res:any) => {
            this.page = res.page;

            this.pageForm.patchValue({
                meta_title: !!this.page.meta_title ? this.page.meta_title : null,
                meta_description: !!this.page.meta_description ? this.page.meta_description : null,
                meta_keywords: !!this.page.meta_keywords ? this.page.meta_keywords : null,
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
        console.log(this.pageForm);
        if(!this.pageForm.invalid) {
            this.pageForm.value.id = this.page.id;
            this.service.updatePage(this.pageForm.value).subscribe((res: any) => {
                if(res.status) {
                    this.title = 'Операция успешна';
                    this.message = 'Страница обновлен';
                    this.openDialog();
                    this.router.navigate(['/pages']);
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
                    this.pageForm.controls[key].setErrors({server_error: error.errors[key][0]});
                }
            });
        }
    }


    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
}
