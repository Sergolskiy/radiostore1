import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";
import {MatDialog, MatTableDataSource, PageEvent} from "@angular/material";
import { Router } from "@angular/router";
import {PopularProductsService} from "../../services/popular-products.service";
import {ProductService} from "../../services/product.service";
import {NgForm} from "@angular/forms";
import {DialogOverviewExampleDialog} from "../dialog/dialog.component";
import {DialogOverviewDeExampleDialog} from "../dialog/dialog-delete.component";
import {environment} from "../../../environments/environment";
import {OrderService} from "../../services/orders.service";


@Component({
  selector: 'app-popular-products',
  templateUrl: './popular-products.component.html',
  styleUrls: ['./popular-products.component.scss']
})
export class PopularProductsComponent implements OnInit{

    products: any = null;
    displayedColumns: Array<string> = [ 'id', 'category', 'article', 'price', 'title', 'action' ];

    message: string;
    title: string;

    checkDelete: boolean = false;

    options = [];

    constructor(private service: PopularProductsService, private orderService: OrderService, private router: Router, public dialog: MatDialog) { }

    ngOnInit() {
        this.service.getPopularProducts().subscribe((res:any) => {
            if(res.products) {
                res.products.forEach((el, i) => {
                    el.product_link = `${environment.domain_url}/products/${el.slug}`;
                    console.log(el.product_link);
                });
            }
            this.products = new MatTableDataSource(res.products);
            console.log(res);
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

    openDialogForDelete(slug): void {
        let dialogRef = this.dialog.open(DialogOverviewDeExampleDialog, {
            width: '250px',
            data: { title: this.title, message: this.message, checkDelete: this.checkDelete }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            console.log(result);
            this.checkDelete = result;

            if(this.checkDelete == false) {
                this.service.deletePopularProduct(slug).subscribe((res:any) => {
                    if(res.status) {
                        this.checkDelete = false;
                        this.products.data.forEach((el, i) => {
                            if (el.slug == slug) {
                                this.products.data.splice(i, 1);
                            }
                        });

                        this.products = new MatTableDataSource(this.products.data);
                    }
                });
            } else {
                this.checkDelete = false;
            }
        });
    }

    setProduct(form: NgForm) {
        console.log(form.value);

        this.service.setPopularProduct(form.value).subscribe((res:any) => {
            if(res.product) {
                this.products.data.push(res.product);
                this.products = new MatTableDataSource(this.products.data);
                this.title = 'Операция успешна';
                this.message = 'Товар добавлен';
                this.openDialog();
            } else {
                this.title = 'Что-то пошло не так';
                this.message = 'Возможно вы ввели неверные данные';
                this.openDialog();
            }
        });
    }

    deleteProduct(slug) {
        this.title = 'Удаление продукта';
        this.message = 'Подтвердите операцию';
        this.openDialogForDelete(slug);
       // this.service.deletePopularProduct(slug).subscribe((res:any) => {
       //     if(res.status) {
       //         this.products.data.forEach((el, i) => {
       //             if (el.slug == slug) {
       //                 this.products.data.splice(i, 1);
       //             }
       //         });
       //
       //         this.products = new MatTableDataSource(this.products.data);
       //     }
       // });
    }


    addAnalogs(e){
        // console.log(e);
        this.orderService.getProducts(e.target.value).subscribe(res => {
            console.log(res);
            this.options = res.products;
        }, err => alert(err.message));
    }
}
