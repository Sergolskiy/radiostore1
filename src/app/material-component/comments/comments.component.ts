import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";
import {MatDialog, MatTableDataSource, PageEvent} from "@angular/material";
import { Router } from "@angular/router";
import {CommentsService} from "../../services/comments.service";
import {environment} from "../../../environments/environment";
import {DialogOverviewExampleDialog} from "../dialog/dialog.component";
import {DialogOverviewDeExampleDialog} from "../dialog/dialog-delete.component";


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit{

    activities: any = [ 'Не активный', 'Активный' ];

    message: string;
    title: string;

    checkDelete: boolean = false;

    comments: any = null;
    displayedColumns: Array<string> = [ 'id', 'product_link', 'ownerComment', 'comment','rating', 'is_active', 'created_at', 'action' ];
    sort: object = { id: true, ownerComment: false, is_active: false,  rating: false, created_at: false };
    current_sort: any = { column: 'id', value: true };
    current_page: number = 0;
    pageEvent: PageEvent;
    item_length: number;
    item_count: number = 10;
    pageSizeOptions = [5, 10, 20];

    base_url: string = environment.domain_url;

    constructor(private service: CommentsService, private router: Router, public dialog: MatDialog) { }

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
        this.service.getComments(1, this.item_count, this.current_sort).subscribe((res:any) => {
            console.log(res.comments);
            if(res.comments) {
                res.comments.forEach((el, i) => {

                    // if(el.is_active) {
                    //     el.is_active = 'Активен';
                    // } else {
                    //     el.is_active = 'Не активен';
                    // }

                    if(el.product) {
                        el.product_link = `${this.base_url}/products/${el.product.slug}`;
                        console.log(el.product_link);
                    }
                });
            }

            this.comments = new MatTableDataSource(res.comments);
            this.item_length = res.total_items;
        });
    }

    openDialogForDelete(id): void {
        let dialogRef = this.dialog.open(DialogOverviewDeExampleDialog, {
            width: '250px',
            data: { title: this.title, message: this.message, checkDelete: this.checkDelete }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            console.log(result);
            this.checkDelete = result;

            if(this.checkDelete == false) {
                this.service.deleteComment(id).subscribe((res:any) => {
                    if(res.status) {
                        this.checkDelete = false;
                        this.comments.data.forEach((el, i) => {
                            if (el.id == id) {
                                this.comments.data.splice(i, 1);
                            }
                        });

                        this.comments = new MatTableDataSource(this.comments.data);
                    }
                });
            } else {
                this.checkDelete = false;
            }
        });
    }

    sortByValue(event) {
        this.sort[event] ? this.sort[event] = false : this.sort[event] = true;

        this.current_sort.column = event;
        this.current_sort.value = this.sort[event];

        this.service.getComments(1, this.item_count, this.current_sort).subscribe((res:any) => {
            if(res.comments) {
                res.comments.forEach((el, i) => {
                    if(el.is_active) {
                        el.is_active = 'Активен';
                    } else {
                        el.is_active = 'Не активен';
                    }

                    if(el.product) {
                        el.product_link = `${environment.domain_url}/products/${el.product.slug}`;
                    }
                });
            }

            this.comments = new MatTableDataSource(res.comments);
            this.current_page = 0;
        });
    }

    pagination(event?:PageEvent) {
        this.item_count = event.pageSize;
        this.current_page = event.pageIndex;

        this.service.getComments(this.current_page+1, this.item_count, this.current_sort).subscribe((res:any) => {

            if(res.comments) {
                res.comments.forEach((el, i) => {
                    if(el.is_active) {
                        el.is_active = 'Активен';
                    } else {
                        el.is_active = 'Не активен';
                    }

                    if(el.product) {
                        el.product_link = `${environment.domain_url}/products/${el.product.slug}`;
                    }
                });
            }
            this.comments = new MatTableDataSource(res.comments);
        });
    }

    updateStatus(data) {
        console.log(data);
        this.service.updateComment(data).subscribe((res:any) => {
            if(res.status) {
                this.title = 'Операция успешна';
                this.message = 'Комментарий обновлен';
                this.openDialog();
            } else {
                this.title = 'Что-то пошло не так';
                this.message = 'Возможно вы ввели неверные данные';
                this.openDialog();
            }
        });
    }

    deleteComment(id) {
        this.title = 'Удаление комментария';
        this.message = 'Подтвердите операцию';
        this.openDialogForDelete(id);
    }
}
