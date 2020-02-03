import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";
import {MatDialog, MatTableDataSource, PageEvent} from "@angular/material";
import { Router } from "@angular/router";
import {NewsService} from "../../services/news.service";
import {ArticlesService} from "../../services/articles.service";
import {AttributesService} from "../../services/attributes.service";
import {DialogOverviewDeExampleDialog} from "../dialog/dialog-delete.component";
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.scss']
})
export class AttributesComponent implements OnInit{

    attributes: any = null;
    displayedColumns: Array<string> = [ 'id', 'attribute_type_id', 'title', 'sort_id', 'action' ];
    sort: object = { id: true, attribute_type_id: false, title: false, sort_id: false };
    current_sort: any = { column: 'id', value: true };
    current_page: number = 0;
    pageEvent: PageEvent;
    item_length: number;
    item_count: number = 10;
    pageSizeOptions = [5, 10, 20];

    searcher: string = '';

    message: string;
    title: string;

    checkDelete: boolean = false;

    constructor(private service: AttributesService, private router: Router, public dialog: MatDialog) { }

    ngOnInit() {
        this.service.getAttributes(1, this.item_count, this.current_sort, this.searcher).subscribe((res:any) => {
            console.log(res);
            this.attributes = new MatTableDataSource(res.attributes);
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
                this.service.deleteAttribute(id).subscribe((res:any) => {
                    if(res.status) {
                        this.checkDelete = false;
                        this.attributes.data.forEach((el, i) => {
                            if (el.id == id) {
                                this.attributes.data.splice(i, 1);
                            }
                        });

                        this.attributes = new MatTableDataSource(this.attributes.data);
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

        this.service.getAttributes(1, this.item_count, this.current_sort, this.searcher).subscribe((res:any) => {
            this.attributes = new MatTableDataSource(res.attributes);
            this.current_page = 0;
        });
    }

    search(form: NgForm) {
        console.log(form.value);
        this.searcher = form.value.searcher;
        this.service.getAttributes(1, this.item_count, this.current_sort, this.searcher).subscribe((res:any) => {
            this.attributes = new MatTableDataSource(res.attributes);
            this.item_length = res.total_items;
        });
    }

    pagination(event?:PageEvent) {
        this.item_count = event.pageSize;
        this.current_page = event.pageIndex;

        this.service.getAttributes(this.current_page+1, this.item_count, this.current_sort, this.searcher).subscribe((res:any) => {
            this.attributes = new MatTableDataSource(res.attributes);
        });
    }

    toCreate() {
        this.router.navigate(['/attributes/create']);
    }

    toUpdate(id) {
        this.router.navigate(['/attributes/update', id]);
    }

    deleteAttribute(id) {
        this.title = 'Удаление атрибута';
        this.message = 'Подтвердите операцию';
        this.openDialogForDelete(id);
    }
}
