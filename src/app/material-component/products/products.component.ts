import { Component, OnInit } from '@angular/core';
import {MatDialog, MatTableDataSource, PageEvent} from "@angular/material";
import { Router } from "@angular/router";
import {ProductService} from "../../services/product.service";
import {DialogOverviewDeExampleDialog} from "../dialog/dialog-delete.component";
import {environment} from "../../../environments/environment";
import {NgForm} from "@angular/forms";
import {Directive, HostListener} from "@angular/core";
import {DialogOverviewExampleDialog} from "../dialog/dialog.component";
import {DialogOverviewExampleDiscountDialog} from "../dialog/dialogDiscount.component";



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

@Directive({
    selector: "[click-stop-propagation]"
})
export class ProductsComponent implements OnInit{
    products: any = null;
    categories: any = null;
    displayedColumns: Array<string> = [ 'action1', 'id', 'category', 'article', 'price', 'title', 'count_sale_product', 'action' ];
    sort: object = { id: true, category: false, article: false, price: false, title: false , count_sale_product: false};
    current_sort: any = { column: 'id', value: true };
    current_page: number = 0;
    pageEvent: PageEvent;
    item_length: number;
    item_count: number = 10;
    pageSizeOptions = [5, 10, 20];
    discountTypes: any;

    message: string;
    title: string;

    searcher: string = '';
    selectedCategory: any = [];
    filterByParam: Array<any> = [];
    currentlyFilters: Array<any> = [];
    checkedFilter: boolean = false;
    selectedClients:any = [];

    checkDelete: boolean = false;

    constructor(private service: ProductService, private router: Router, public dialog: MatDialog) { }

    public onClick1(event: any): void
    {
        event.stopPropagation();
    }

    openDialog(slug): void {
        let dialogRef = this.dialog.open(DialogOverviewDeExampleDialog, {
            width: '250px',
            data: { title: this.title, message: this.message, checkDelete: this.checkDelete }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            console.log(result);
            this.checkDelete = result;

            if(this.checkDelete == false) {
                this.service.deleteProduct(slug).subscribe((res:any) => {
                    if(res.status) {
                        this.checkDelete = false;
                        this.products.data.forEach((el, i) => {
                            if (el.slug == slug) {
                                el.deleted_at = 1;
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

    ngOnInit() {
        this.service.getProducts(1, this.item_count, this.current_sort, this.searcher).subscribe((res:any) => {
            if(res.products) {
                res.products.forEach((el, i) => {
                    el.product_link = `${environment.domain_url}/products/${el.slug}`;
                    console.log(el.product_link);
                });
            }

            this.products = new MatTableDataSource(res.products);
            this.item_length = res.total_items;
            this.categories = res.categories;
            this.discountTypes = res.discountTypes;
            console.log(11, res.products);
        });
    }

    sortByValue(event) {
        this.sort[event] ? this.sort[event] = false : this.sort[event] = true;

        this.current_sort.column = event;
        this.current_sort.value = this.sort[event];

        this.service.getProducts(1, this.item_count, this.current_sort, this.searcher,  this.filterByParam).subscribe((res:any) => {
            if(res.products) {
                res.products.forEach((el, i) => {
                    el.product_link = `${environment.domain_url}/products/${el.slug}`;
                    console.log(el.product_link);
                });
            }
            this.products = new MatTableDataSource(res.products);
            this.current_page = 0;
        });
    }

    pagination(event?:PageEvent) {
        this.item_count = event.pageSize;
        this.current_page = event.pageIndex;

        this.service.getProducts(this.current_page+1, this.item_count, this.current_sort, this.searcher,  this.filterByParam).subscribe((res:any) => {
            if(res.products) {
                res.products.forEach((el, i) => {
                    el.product_link = `${environment.domain_url}/products/${el.slug}`;
                    console.log(el.product_link);
                });
            }
            this.products = new MatTableDataSource(res.products);
        });
    }

    search(form: NgForm) {
        console.log(form.value);
        this.searcher = form.value.article;

        this.service.getProducts(1, this.item_count, this.current_sort, this.searcher,  this.filterByParam).subscribe((res:any) => {
            if(res.products) {
                res.products.forEach((el, i) => {
                    el.product_link = `${environment.domain_url}/products/${el.slug}`;
                    console.log(el.product_link);
                });
            }
            this.products = new MatTableDataSource(res.products);
            this.current_page = 0;
        });

    }

    sendFilter(type, value = null, reviewTitle = null) {
        if (type == 'category') {
            var selected = document.querySelectorAll('*[name*="category_"]:checked');
            this.selectedCategory = [];
            for(var i = 0; i < selected.length; i++) {
                this.selectedCategory.push(selected[i].attributes.getNamedItem('name').value.replace('category_', ''));
            }
            if (this.filterByParam.hasOwnProperty(type)) {
                this.filterByParam[type] = this.filterByParam[type].concat(this.selectedCategory).filter((elem, pos, arr) => {
                    return arr.indexOf(elem) == pos;
                });
            } else {
                this.filterByParam[type] = this.selectedCategory;
            }
        } else if (type == 'discount') {
            this.filterByParam[type] = [value];
            this.currentlyFilters = this.currentlyFilters.filter(function(value1) {
                return value1.type !== "discount";
            });
            this.currentlyFilters.push({
                value: value,
                name: reviewTitle,
                title: 'Скидка',
                type: type,
            });
        } else if (type == 'price') {
            this.filterByParam[type] = [value];
            this.currentlyFilters = this.currentlyFilters.filter(function(value1) {
                return value1.type !== "price";
            });
            this.currentlyFilters.push({
                value: value,
                name: reviewTitle,
                title: 'Цена',
                type: type,
            });
        } else if (type == 'quantity') {
            this.filterByParam[type] = [value];
            this.currentlyFilters = this.currentlyFilters.filter(function(value1) {
                return value1.type !== "quantity";
            });
            this.currentlyFilters.push({
                value: value,
                name: reviewTitle,
                title: 'Количество',
                type: type,
            });
        }
        
        this.service.getProducts(1, this.item_count, this.current_sort, this.searcher, this.filterByParam ).subscribe((res:any) => {
            let el = false;
            this.selectAllForCategory(el);
            this.checkedFilter = true;
            if(res.products) {
                res.products.forEach((el, i) => {
                    el.product_link = `${environment.domain_url}/products/${el.slug}`;
                    console.log(el.product_link);
                });
            }
            this.products = new MatTableDataSource(res.products);
            this.current_page = 0;
        });
    }

    deleteFilterUserList(param, indexParam) {
        if(this.filterByParam.hasOwnProperty(param.type)) {
            if(param.type == 'category') {
                this.filterByParam[param.type] = this.filterByParam[param.type].filter(function(id) {
                    let check = id != param.category.id;
                    if (typeof param.category.sub_categories != 'undefined' && param.category.sub_categories.length > 0) {
                        param.category.sub_categories.map(function (valueCategory) {
                            if (valueCategory.id == id) {
                                check = false;
                            }
                            if (typeof valueCategory.sub_categories != 'undefined' && valueCategory.sub_categories.length > 0) {
                                valueCategory.sub_categories.map(function(valueSubCategory) {
                                    if (valueSubCategory.id == id) {
                                        check = false;
                                    }
                                });
                            }
                        });
                    }
                    return check;
                });
            }
            if(param.type == 'discount' || param.type == 'price' || param.type == 'quantity') {
                this.filterByParam[param.type] = this.filterByParam[param.type].filter(function(type) {
                    return type !== param.value;
                });
            }
            this.currentlyFilters.splice(indexParam,1);
            if (!Object.keys(this.filterByParam[param.type]).length) {
                delete this.filterByParam[param.type];
            }
            this.service.getProducts(1, this.item_count, this.current_sort, this.searcher, this.filterByParam).subscribe((res:any) => {
                if(res.products) {
                    res.products.forEach((el, i) => {
                        el.product_link = `${environment.domain_url}/products/${el.slug}`;
                        console.log(el.product_link);
                    });
                }
                this.products = new MatTableDataSource(res.products);
                this.current_page = 0;
            });
        }
    }

    sendMultiMessage1(status, value = null) {
        var selected = document.querySelectorAll('*[name*="product_"]:checked');
        if(selected.length == 0) {
            alert("Выберите хотя бы одного клиента");
            return;
        }
        this.selectedClients = [];
        for(var i = 0; i < selected.length; i++) {
            this.selectedClients.push(selected[i].attributes.getNamedItem('name').value.replace('product_', ''));
        }
        let data;
        if(status == 'discount') {
            data = value;
        } else {
            data = true;
        }

        this.service.sendMultiMessage1({products:this.selectedClients, [status]: data}).subscribe((res:any) => {
            let el = false;
            this.selectAll(el);
            this.title = 'Операция успешна';
            if(status == 'discount') {
                this.message = 'Скидка была успешно обновлена!';
            } else if(status == 'published') {
                this.message = 'Продукты опубликованы успешно!';
                this.products.data.forEach((el, i) => {
                    this.selectedClients.map((id) => {
                        if (el.id == id) {
                            el.deleted_at = null;;
                        }
                    });
                });
            }else if(status == 'not_published') {
                this.message = 'Продукты скрыты успешно!';
                this.products.data.forEach((el, i) => {
                    this.selectedClients.map((id) => {
                        if (el.id == id) {
                            el.deleted_at = 1;
                        }
                    });
                });
            }
            this.products = new MatTableDataSource(this.products.data);
            this.openDialogForMultiple();
        });
    }

    openDialogForMultipleMessage() {
        let dialogRef = this.dialog.open(DialogOverviewExampleDiscountDialog, {
            width: '500px',
            data: { title: 'Редактирование скидки для выбранных позиций', discountTypes: this.discountTypes},
        });

        dialogRef.afterClosed().subscribe(result => {
            let el = false;
            this.selectAll(el);
        });
    }

    openDialogForMultiple(): void {
        let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            width: '250px',
            data: { title: this.title, message: this.message }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.message = result;
        });
    }


    checkCategoryOnChecked(el, category) {
        if (this.currentlyFilters.length == 0) {
            this.checkedFilter = false;
        }
        let categories = [];
        categories.push(category.id);
        if (typeof category.sub_categories != 'undefined' && category.sub_categories.length > 0) {
            category.sub_categories.map(function(sub_category) {
                categories.push(sub_category.id);
                if (typeof sub_category.sub_categories != 'undefined' && sub_category.sub_categories.length > 0) {
                    sub_category.sub_categories.map(function(sub_sub_category) {
                        categories.push(sub_sub_category.id);
                    });
                }
            });
        }
        for(var i = 0; i < categories.length; i++) {
            var inputs = document.querySelector(`*[name="category_${categories[i]}"]`);
            var input = inputs as HTMLInputElement;
            if(el == false) {
                input.checked = el;
            } else {
                input.checked = el.target.checked;
            }
        }
        if(el.target.checked == false) {
            this.currentlyFilters = this.currentlyFilters.filter(function (valueFilter) {
                let check = valueFilter.value != category.id;
                if (typeof category.sub_categories != 'undefined' && category.sub_categories.length > 0) {
                    category.sub_categories.map(function (valueCategory) {
                        if (valueCategory.id != valueFilter.value) {
                            check = false;
                        }
                        if (typeof valueCategory.sub_categories != 'undefined' && valueCategory.sub_categories.length > 0) {
                            valueCategory.sub_categories.map(function(valueSubCategory) {
                                if (valueSubCategory.id != valueFilter.value) {
                                    check = false;
                                }
                            });
                        }
                    });
                }
                return check;
            });
        } else {
            this.currentlyFilters.push({
                value: category.id,
                name: category.title,
                title: 'Категория',
                type: 'category',
                category: category,
            });
        }
    }

    selectAllForCategory(el) {
        var inputs = document.querySelectorAll('*[name*="category_"]');
        for(var i = 0; i < inputs.length; i++) {
            var input = inputs[i] as HTMLInputElement;
            if(el == false) {
                input.checked = el;
            } else {
                input.checked = el.target.checked;
            }
        }
    }

    selectAll(el) {
        var inputs = document.querySelectorAll('*[name*="product_"]');
        for(var i = 0; i < inputs.length; i++) {
            var input = inputs[i] as HTMLInputElement;
            if(el == false) {
                input.checked = el;
            } else {
                input.checked = el.target.checked;
            }
        }
    }

    toCreate() {
        this.router.navigate(['/products/create']);
    }

    toUpdate(slug) {
        this.router.navigate(['/products/update', slug]);
    }

    deleteProduct(slug) {
        this.title = 'Удаление продукта';
        this.message = 'Подтвердите операцию';
        this.openDialog(slug);
    }

    restoreProduct(slug) {
        this.service.restoreProduct(slug).subscribe((res:any) => {
            if(res.status) {
                this.products.data.forEach((el, i) => {
                    // console.log(el);
                    if (el.slug == slug) {
                        el.deleted_at = null;
                        // this.products.data.splice(i, 1);
                    }
                });

                this.products = new MatTableDataSource(this.products.data);
            }
        });
    }
}
