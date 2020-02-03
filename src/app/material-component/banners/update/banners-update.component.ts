import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from "../../../services/user.service";
import {Subscription} from 'rxjs/Subscription';
import {AbstractControl, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {CategoriesService} from "../../../services/categories.service";
import {NewsService} from "../../../services/news.service";
import {ArticlesService} from "../../../services/articles.service";
import {BannersService} from "../../../services/banners.service";
import {DialogOverviewExampleDialog} from "../../dialog/dialog.component";
import {MatDialog} from "@angular/material";

@Component({
  selector: 'app-update-banners',
  templateUrl: './banners-update.component.html',
  styleUrls: ['./banners-update.component.scss']
})
export class BannersUpdateComponent implements OnDestroy {

    private id: number;
    private subscription: Subscription;

    bannerForm: FormGroup;
    banner: any;
    image: any;

    message: string;
    title: string;

    blockSubmit: boolean = false;

    constructor(private service: BannersService, private activateRoute: ActivatedRoute, private router: Router, public dialog: MatDialog) {

        this.subscription = activateRoute.params.subscribe(params=>
            this.id = params['id']
        );

        this.bannerForm = new FormGroup({
            "link": new FormControl(null, [
                Validators.required,
            ]),
            "alt": new FormControl(null, [
            ]),
        });

        this.service.bannerUpdateForm(this.id).subscribe((res:any) => {
            this.banner = res.banner;
            console.log(res.banner);
            this.bannerForm.patchValue({
                link: !!this.banner.link ? this.banner.link : null,
                alt: !!this.banner.alt ? this.banner.alt : null,
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
        console.log(this.bannerForm);
        if(!this.bannerForm.invalid) {

            let formData: FormData = new FormData();
            formData.append('id', this.id.toString());
            formData.append('link', this.bannerForm.controls['link'].value);
            formData.append('alt', this.bannerForm.controls['alt'].value);
            formData.append('image', this.image);

            this.service.updateBanner(formData).subscribe((res: any) => {
                if(res.status) {
                    this.title = 'Операция успешна';
                    this.message = 'Баннер обновлен';
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

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
}
