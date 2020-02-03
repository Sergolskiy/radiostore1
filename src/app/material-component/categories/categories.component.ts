import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";
import {MatTableDataSource, PageEvent} from "@angular/material";
import { Router } from "@angular/router";
import {CategoriesService} from "../../services/categories.service";
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit{

    categories: any = null;
    displayedColumns: Array<string> = [ 'id', 'title', 'slug', 'is_active', 'action' ];
    sort: object = { id: true, title: false, slug: false, is_active:false };
    current_sort: any = { column: 'id', value: true };
    current_page: number = 0;
    pageEvent: PageEvent;
    searcher: string = '';
    item_length: number;
    item_count: number = 10;
    pageSizeOptions = [5, 10, 20];

    constructor(private service: CategoriesService, private router: Router) { }

    ngOnInit() {
        this.service.getCategories(1, this.item_count, this.current_sort).subscribe((res:any) => {
            console.log(res);

            res.categories.forEach((el, i) => {
                if(el.is_active) {
                    el.active = 'Да';
                } else {
                    el.active = 'Нет';
                }
            });

            this.categories = new MatTableDataSource(res.categories);

            console.log(this.categories.data);

            this.item_length = res.total_items;
        });
    }

    sortByValue(event) {
        this.sort[event] ? this.sort[event] = false : this.sort[event] = true;

        this.current_sort.column = event;
        this.current_sort.value = this.sort[event];

        this.service.getCategories(1, this.item_count, this.current_sort).subscribe((res:any) => {
            res.categories.forEach((el, i) => {
                if(el.is_active) {
                    el.active = 'Да';
                } else {
                    el.active = 'Нет';
                }
            });

            this.categories = new MatTableDataSource(res.categories);
            this.current_page = 0;
        });
    }

    pagination(event?:PageEvent) {
        this.item_count = event.pageSize;
        this.current_page = event.pageIndex;

        this.service.getCategories(this.current_page+1, this.item_count, this.current_sort).subscribe((res:any) => {
            res.categories.forEach((el, i) => {
                if(el.is_active) {
                    el.active = 'Да';
                } else {
                    el.active = 'Нет';
                }
            });

            this.categories = new MatTableDataSource(res.categories);
        });
    }

    toCreate() {
        this.router.navigate(['/categories/create']);
    }

    toUpdate(slug) {
        // console.log(id);
        this.router.navigate(['/categories/update', slug]);
    }

    deleteUser(slug) {
        this.service.deleteCategory(slug).subscribe((res:any) => {
            if(res.category) {
                this.categories.data.forEach((el, i) => {
                    if (el.slug == slug) {
                        this.categories.data.splice(i, 1);
                    }
                });

                this.categories = new MatTableDataSource(this.categories.data);
            }
        });
    }

    search(form: NgForm) {
      console.log(form.value);
      this.searcher = form.value.searcher;
      this.service.getCategories(1, this.item_count, this.current_sort, this.searcher).subscribe((res:any) => {
        res.categories.forEach((el, i) => {
          if(el.is_active) {
            el.active = 'Да';
          } else {
            el.active = 'Нет';
          }
        });

        this.categories = new MatTableDataSource(res.categories);

        console.log(this.categories.data);

        this.item_length = res.total_items;
      });
    }
}
