import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { UserService } from "../../../services/user.service";
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import {DialogOverviewExampleDialog} from "../../dialog/dialog.component";
import {Router} from "@angular/router";
import {CategoriesService} from "../../../services/categories.service";
import {NewsService} from "../../../services/news.service";
import {ArticlesService} from "../../../services/articles.service";
import {BannersService} from "../../../services/banners.service";

@Component({
  selector: 'app-create-banners',
  templateUrl: './banners-create.component.html',
  styleUrls: ['./banners-create.component.scss']
})
export class BannersCreateComponent implements OnInit {

    bannerForm: FormGroup;
    image: any;

    message: string;
    title: string;

    blockSubmit: boolean = false;

    constructor(private service: BannersService, private router: Router, public dialog: MatDialog) {
        this.bannerForm = new FormGroup({
            "link": new FormControl(null, [
                Validators.required,
            ]),
            "alt": new FormControl(null, [
            ]),
            "image": new FormControl(null, [
                Validators.required,
            ]),
        });
    }

    ngOnInit() {}

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
        console.log(this.bannerForm);
        if(!this.bannerForm.invalid) {

            let formData: FormData = new FormData();
            formData.append('link', this.bannerForm.controls['link'].value);
            formData.append('alt', this.bannerForm.controls['alt'].value);
            formData.append('image', this.image);

            this.service.setBanner(formData).subscribe((res: any) => {
                if(res.status) {
                    this.title = 'Операция успешна';
                    this.message = 'Баннер создан';
                    this.openDialog();
                    this.router.navigate(['/banners']);
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
                    this.bannerForm.controls[key].setErrors({server_error: error.errors[key][0]});
                }
            });
        }
    }

    setImage(event) {
        console.log(event.target.files);
        this.image = event.target.files[0];
    }

}
