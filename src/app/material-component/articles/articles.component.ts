import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";
import {MatDialog, MatTableDataSource, PageEvent} from "@angular/material";
import { Router } from "@angular/router";
import {NewsService} from "../../services/news.service";
import {ArticlesService} from "../../services/articles.service";
import {DialogOverviewDeExampleDialog} from "../dialog/dialog-delete.component";


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit{

    articles: any = null;
    displayedColumns: Array<string> = [ 'id', 'title', 'slug', 'published', 'publieshedAtFormated', 'createdAtFormated', 'action' ];
    sort: object = { id: true, title: false, slug: false, published: false, publieshedAtFormated: false, createdAtFormated: false  };
    current_sort: any = { column: 'id', value: true };
    current_page: number = 0;
    pageEvent: PageEvent;
    item_length: number;
    item_count: number = 10;
    pageSizeOptions = [5, 10, 20];

    message: string;
    title: string;

    checkDelete: boolean = false;

    constructor(private service: ArticlesService, private router: Router, public dialog: MatDialog) { }

    ngOnInit() {
        this.service.getArticles(1, this.item_count, this.current_sort).subscribe((res:any) => {
            console.log(res);
            res.articles.forEach((el, i) => {
                if(el.published) {
                    // el.is_active = 1;
                    el.published = 'Да';
                } else {
                    // el.is_active = 0;
                    el.published = 'Нет';
                }
            });
            this.articles = new MatTableDataSource(res.articles);
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
                this.service.deleteArticle(slug).subscribe((res:any) => {
                    if(res.status) {
                        this.checkDelete = false;
                        this.articles.data.forEach((el, i) => {
                            if (el.slug == slug) {
                                this.articles.data.splice(i, 1);
                            }
                        });

                        this.articles = new MatTableDataSource(this.articles.data);
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

        this.service.getArticles(1, this.item_count, this.current_sort).subscribe((res:any) => {
            res.articles.forEach((el, i) => {
                if(el.published) {
                    // el.is_active = 1;
                    el.published = 'Да';
                } else {
                    // el.is_active = 0;
                    el.published = 'Нет';
                }
            });
            this.articles = new MatTableDataSource(res.articles);
            this.current_page = 0;
        });
    }

    pagination(event?:PageEvent) {
        this.item_count = event.pageSize;
        this.current_page = event.pageIndex;

        this.service.getArticles(this.current_page+1, this.item_count, this.current_sort).subscribe((res:any) => {
            res.articles.forEach((el, i) => {
                if(el.published) {
                    // el.is_active = 1;
                    el.published = 'Да';
                } else {
                    // el.is_active = 0;
                    el.published = 'Нет';
                }
            });
            this.articles = new MatTableDataSource(res.articles);
        });
    }

    toCreate() {
        this.router.navigate(['/articles/create']);
    }

    toUpdate(slug) {
        this.router.navigate(['/articles/update', slug]);
    }

    deleteNews(slug) {
        this.title = 'Удаление видеообзора';
        this.message = 'Подтвердите операцию';
        this.openDialogForDelete(slug);
    }
}
