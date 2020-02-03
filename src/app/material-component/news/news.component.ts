import { Component, OnInit } from '@angular/core';
import {MatDialog, MatTableDataSource, PageEvent} from "@angular/material";
import { Router } from "@angular/router";
import {NewsService} from "../../services/news.service";
import {DialogOverviewDeExampleDialog} from "../dialog/dialog-delete.component";


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit{

    news: any = null;
    displayedColumns: Array<string> = [ 'id', 'title', 'slug', 'published', 'publieshedAtFormated', 'createdAtFormated', 'action' ];
    sort: object = { id: true, title: false, slug: false, published: false, publieshedAtFormated: false, createdAtFormated: false };
    current_sort: any = { column: 'id', value: true };
    current_page: number = 0;
    pageEvent: PageEvent;
    item_length: number;
    item_count: number = 10;
    pageSizeOptions = [5, 10, 20];

    message: string;
    title: string;

    checkDelete: boolean = false;


    constructor(private service: NewsService, private router: Router, public dialog: MatDialog) { }

    ngOnInit() {
        this.service.getNews(1, this.item_count, this.current_sort).subscribe((res:any) => {
            console.log(res);
            res.news.forEach((el, i) => {
                if(el.published) {
                    el.published = 'Да';
                } else {
                    el.published = 'Нет';
                }
            });
            this.news = new MatTableDataSource(res.news);
            this.item_length = res.total_items;
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
                this.service.deleteNews(slug).subscribe((res:any) => {
                    if(res.status) {
                        this.checkDelete = false;
                        this.news.data.forEach((el, i) => {
                            if (el.slug == slug) {
                                this.news.data.splice(i, 1);
                            }
                        });

                        this.news = new MatTableDataSource(this.news.data);
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

        this.service.getNews(1, this.item_count, this.current_sort).subscribe((res:any) => {
            res.news.forEach((el, i) => {
                if(el.published) {
                    el.published = 'Да';
                } else {
                    el.published = 'Нет';
                }
            });
            this.news = new MatTableDataSource(res.news);
            this.current_page = 0;
        });
    }

    pagination(event?:PageEvent) {
        this.item_count = event.pageSize;
        this.current_page = event.pageIndex;

        this.service.getNews(this.current_page+1, this.item_count, this.current_sort).subscribe((res:any) => {
            res.news.forEach((el, i) => {
                if(el.published) {
                    el.published = 'Да';
                } else {
                    el.published = 'Нет';
                }
            });
            this.news = new MatTableDataSource(res.news);
        });
    }

    toCreate() {
        this.router.navigate(['/news/create']);
    }

    toUpdate(slug) {
        this.router.navigate(['/news/update', slug]);
    }

    deleteNews(slug) {
        this.title = 'Удаление новости';
        this.message = 'Подтвердите операцию';
        this.openDialogForDelete(slug);
    }
}
