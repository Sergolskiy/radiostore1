import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";
import {MatDialog, MatTableDataSource, PageEvent} from "@angular/material";
import { Router } from "@angular/router";
import {NewsService} from "../../services/news.service";
import {ArticlesService} from "../../services/articles.service";
import {DialogOverviewDeExampleDialog} from "../dialog/dialog-delete.component";
import {PagesService} from "../../services/pages.service";


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit{

    pages: any = null;
    displayedColumns: Array<string> = [ 'id', 'title', 'action' ];
    sort: object = { id: true, title: false  };
    current_sort: any = { column: 'id', value: true };
    current_page: number = 0;
    pageEvent: PageEvent;
    item_length: number;
    item_count: number = 10;
    pageSizeOptions = [5, 10, 20];

    message: string;
    title: string;

    constructor(private service: PagesService, private router: Router, public dialog: MatDialog) { }

    ngOnInit() {
        this.service.getPages(1, this.item_count, this.current_sort).subscribe((res:any) => {
            console.log(res);

            this.pages = new MatTableDataSource(res.pages);
            this.item_length = res.total_items;
        });
    }


    sortByValue(event) {
        this.sort[event] ? this.sort[event] = false : this.sort[event] = true;

        this.current_sort.column = event;
        this.current_sort.value = this.sort[event];

        this.service.getPages(1, this.item_count, this.current_sort).subscribe((res:any) => {
            this.pages = new MatTableDataSource(res.pages);
            this.current_page = 0;
        });
    }

    pagination(event?:PageEvent) {
        this.item_count = event.pageSize;
        this.current_page = event.pageIndex;

        this.service.getPages(this.current_page+1, this.item_count, this.current_sort).subscribe((res:any) => {
            this.pages = new MatTableDataSource(res.pages);
        });
    }

    toUpdate(id) {
        this.router.navigate(['/pages/update', id]);
    }
}
