import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";
import {MatDialog, MatTableDataSource, PageEvent} from "@angular/material";
import { Router } from "@angular/router";
import {NewsService} from "../../services/news.service";
import {ArticlesService} from "../../services/articles.service";
import {BannersService} from "../../services/banners.service";
import {DialogOverviewExampleDialog} from "../dialog/dialog.component";
import {DialogDeleteComponent, DialogOverviewDeExampleDialog} from "../dialog/dialog-delete.component";
import {isUndefined} from "util";


@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.scss']
})
export class BannersComponent implements OnInit{

    banners: any = null;
    displayedColumns: Array<string> = [ 'id', 'image', 'link', 'action' ];
    sort: object = { id: true, link: false  };
    current_sort: any = { column: 'id', value: true };
    current_page: number = 0;
    pageEvent: PageEvent;
    item_length: number;
    item_count: number = 10;
    pageSizeOptions = [5, 10, 20];

    message: string;
    title: string;

    checkDelete: boolean = false;

    constructor(private service: BannersService, private router: Router, public dialog: MatDialog) { }

    ngOnInit() {
        this.service.getBanners(1, this.item_count, this.current_sort).subscribe((res:any) => {
            console.log(res);
            this.banners = new MatTableDataSource(res.banners);
            this.item_length = res.total_items;
        });
    }

    openDialog(id): void {
        let dialogRef = this.dialog.open(DialogOverviewDeExampleDialog, {
            width: '250px',
            data: { title: this.title, message: this.message, checkDelete: this.checkDelete }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            console.log(result);
            this.checkDelete = result;

            if(this.checkDelete == false) {
                this.service.deleteBanner(id).subscribe((res: any) => {
                    if (res.status) {
                        this.checkDelete = false;
                        this.banners.data.forEach((el, i) => {
                            if (el.id == id) {
                                this.banners.data.splice(i, 1);
                            }
                        });

                        this.banners = new MatTableDataSource(this.banners.data);
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

        this.service.getBanners(1, this.item_count, this.current_sort).subscribe((res:any) => {
            this.banners = new MatTableDataSource(res.banners);
            this.current_page = 0;
        });
    }

    pagination(event?:PageEvent) {
        this.item_count = event.pageSize;
        this.current_page = event.pageIndex;

        this.service.getBanners(this.current_page+1, this.item_count, this.current_sort).subscribe((res:any) => {
            this.banners = new MatTableDataSource(res.banners);
        });
    }

    toCreate() {
        this.router.navigate(['/banners/create']);
    }

    toUpdate(id) {
        this.router.navigate(['/banners/update', id]);
    }

    onNoClick() {
        this.checkDelete = false;
        console.log(1232, this.checkDelete);
    }

    deleteNews(id) {
        this.title = 'Удаление баннера';
        this.message = 'Подтвердите операцию';
        this.openDialog(id);
        // if(this.checkDelete == true) {
        //     this.service.deleteBanner(id).subscribe((res: any) => {
        //         if (res.status) {
        //             this.banners.data.forEach((el, i) => {
        //                 if (el.id == id) {
        //                     this.banners.data.splice(i, 1);
        //                 }
        //             });
        //
        //             this.banners = new MatTableDataSource(this.banners.data);
        //         }
        //     });
        // }
    }

    deleteBanner(id) {
        this.service.deleteBanner(id).subscribe((res: any) => {
            if (res.status) {
                this.banners.data.forEach((el, i) => {
                    if (el.id == id) {
                        this.banners.data.splice(i, 1);
                    }
                });

                this.banners = new MatTableDataSource(this.banners.data);
            }
        });
    }
}
