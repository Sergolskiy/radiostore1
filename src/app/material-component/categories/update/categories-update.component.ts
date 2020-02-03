import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from "../../../services/user.service";
import {Subscription} from 'rxjs/Subscription';
import {AbstractControl, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {CategoriesService} from "../../../services/categories.service";
import {MatDialog} from "@angular/material";
import {DialogOverviewExampleDialog} from "../../dialog/dialog.component";
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from "@angular/material/core";
// import {MY_FORMATS} from "../../products/update/products-update.component";
import {MomentDateAdapter} from "@angular/material-moment-adapter";
import * as moment from "moment";


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
  selector: 'app-update-categories',
  templateUrl: './categories-update.component.html',
  styleUrls: ['./categories-update.component.scss'],
    providers: [
        {provide: MAT_DATE_LOCALE, useValue: 'ru-US'},
        {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
        {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
    ]
})
export class CategoriesUpdateComponent implements OnDestroy {

    private slug: number;
    private subscription: Subscription;

    categoryForm: FormGroup;
    categories: any;
    category: any;
    discountTypes: any;

    message: string;
    title: string;

    blockSubmit: boolean = false;

    description: any = null;
    imagesLinks = [];
    image: any = null;

    constructor(private service: CategoriesService, private activateRoute: ActivatedRoute, private router: Router, public dialog: MatDialog) {

        this.subscription = activateRoute.params.subscribe(params=>
            this.slug = params['slug']
        );


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

        this.service.categoryUpdateForm(this.slug).subscribe((res:any) => {
            console.log(res.category);
            this.categories = res.categories;
            this.category = res.category;
            this.discountTypes = res.discountTypes;

            if(this.categories.image_path) {
                this.imagesLinks = this.categories.image_path;
            }

            setTimeout(()=>{
                this.description = this.category.description;
            }, 4000);


            this.categoryForm.patchValue({
                parent_id: !!this.category.parent_id ? this.category.parent_id : null,
                title: !!this.category.title ? this.category.title : null,
                description: !!this.category.description ? this.category.description : null,
                meta_title: !!this.category.meta_title ? this.category.meta_title : null,
                meta_description: !!this.category.meta_description ? this.category.meta_description : null,
                meta_keywords: !!this.category.meta_keywords ? this.category.meta_keywords : null,
                is_active: !!this.category.is_active ? this.category.is_active : false,
            });
        });
    }

    submitImages() {
        if(this.image) {
            let data = {
                image: [this.image[0]],
            };
            this.service.uploadPhotoToCategory(data, this.category.slug).subscribe((res: any) => {
                if(res.status) {
                    this.title = 'Операция успешна';
                    this.message = 'Фотография к категории обновлена';
                    this.openDialog();
                } else {
                    this.title = 'Что-то пошло не так';
                    this.message = 'Возможно вы ввели неверные данные';
                    this.openDialog();
                }
            }, (error) => {
                this.title = 'Что-то пошло не так';
                this.message = 'Возможно вы ввели неверные данные';
                this.openDialog();
            });
        }
    }

    setImages(event) {
        console.log(event.target.files);
        this.image = event.target.files;
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
        this.categoryForm.controls['description'].setValue(this.description);
        console.log(this.categoryForm);
        if(!this.categoryForm.invalid) {
            this.categoryForm.value.slug = this.slug;
            this.service.updateCategory(this.categoryForm.value).subscribe((res: any) => {
                if(res.status) {
                    this.title = 'Операция успешна';
                    this.message = 'Категория обновлена';
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

    setDiscount(form: NgForm) {
        console.log(form.value);
        form.value.start_at = moment(form.value.start_at).format('YYYY-MM-DD HH:mm:ss');
        form.value.end_at = moment(form.value.end_at).format('YYYY-MM-DD HH:mm:ss');
        form.value.category_slug = this.slug;
        this.service.setDiscount(form.value).subscribe((res:any) => {
            if(res.categoryDiscount) {
                this.title = 'Операция успешна';
                this.message = 'Скидка добавлена';
                this.openDialog();
                this.category.category_discounts.push(res.categoryDiscount);
            } else {
                this.title = 'Что-то пошло не так';
                this.message = 'Возможно вы ввели неверные данные';
                this.openDialog();
            }
        });

        console.log(this.category.category_discounts);
    }

    deleteDiscount(id, i) {
        this.service.deleteDiscount(id).subscribe((res:any) => {
            if(res.status) {
                this.category.category_discounts.splice(i, 1);
            }
        });
    }


    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
}
