import {Component, OnInit, Output} from '@angular/core';
import {OrderService} from '../../services/orders.service';
import {MatDialog, MatTableDataSource, PageEvent} from '@angular/material';
import {Subscription} from 'rxjs/Subscription';
import {DialogOverviewExampleDialog} from '../dialog/dialog.component';
import {environment} from '../../../environments/environment';
import {ActivatedRoute, Router} from '@angular/router';
import {NgModule} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {forEach} from '@angular/router/src/utils/collection';
import {DialogOverviewExampleMultipleDialog} from '../dialog/dialogMultiple.component';


@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.scss'],
})


export class OrdersComponent implements OnInit {


    private subscription: Subscription;

    myModel = true;

    order: any = {};

    selectedClients: any = [];

    orders: any = null;
    displayedColumns: Array<string> = ['action1', 'id', 'commonAmount', 'client', 'information', 'status', 'created_at', 'action'];
    sort: any = {id: true, first_name: false, last_name: false, status: false, amount: false, created_at: false};
    current_sort: any = {column: 'id', value: true};
    current_page: number = 0;
    pageEvent: PageEvent;
    item_length: number;
    item_count: number = 10;
    pageSizeOptions = [5, 10, 20];
    searcher: string = '';
    filter: string = '';
    templatesMessages: any = null;
    ordersForMap: any = null;
    orderStatuses: any;
    messagesTypes = [
        {
            id: 1,
            text: 'На почту',
            value: 'email',
        },
        {
            id: 2,
            text: 'На телефон',
            value: 'phone',
        },
    ];
    currentlyFilters: Array<any> = [];

    filterForm: FormGroup;
    phoneForm: FormGroup;
    statusForm: FormGroup;

    message: string;
    title: string;


    constructor(private service: OrderService, private router: Router, public dialog: MatDialog) {
        this.phoneForm = new FormGroup({
            'send_type': new FormControl(0, []),
            'status_id_1': new FormControl(0, []),
        });

        this.statusForm = new FormGroup({
            'send_type': new FormControl(0, []),
            'status_id_2': new FormControl(0, []),
        });
    }

    ngOnInit() {
        this.service.getOrders(1, this.item_count, this.current_sort, this.searcher, this.filter).subscribe((res: any) => {

            this.orderStatuses = res.orderStatuses;
            let orders = res.orders.map(el => {
                el.status = el.history.status.title;
                return el;
            });
            this.ordersForMap = orders;
            this.orders = new MatTableDataSource(orders);
            this.item_length = res.total_items;
            this.templatesMessages = res.messagesTypes;
        });

        this.filterForm = new FormGroup({
            'status_id': new FormControl(null, []),
        });
    }

    openDialog(): void {
        let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            width: '250px',
            data: {title: this.title, message: this.message}
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.message = result;
        });
    }

    openDialogForMultipleMessage() {
        let dialogRef = this.dialog.open(DialogOverviewExampleMultipleDialog, {
            width: '750px',
            data: {templatesMessages: this.templatesMessages},
        });

        dialogRef.afterClosed().subscribe(result => {
            let el = false;
            this.selectAll(el);
        });
    }

    updateOrderStatus(orderStatus_id, order_id) {
        this.service.updateOrderStatus(order_id, {status: orderStatus_id}).subscribe((res: any) => {
            console.log(res);
        });
    }

    sendMultiMessage1(status) {
        var selected = document.querySelectorAll('*[name*="client_"]:checked');
        if (selected.length == 0) {
            alert('Выберите хотя бы одного клиента');
            return;
        }
        this.selectedClients = [];
        for (var i = 0; i < selected.length; i++) {
            this.selectedClients.push(selected[i].attributes.getNamedItem('name').value.replace('client_', ''));
        }

        this.service.sendMultiMessage1({orders: this.selectedClients, status: status.id}).subscribe((res: any) => {
            let el = false;
            this.selectAll(el);
            let self = this;
            this.orders.data = this.orders.data.map(function (el) {
                self.selectedClients.forEach(function (value) {
                    if (value == el.id) {
                        el.history.status.id = status.id;
                        el.history.status.title = status.title;
                    }
                });
                return el;
            });
            this.orders = new MatTableDataSource(this.orders.data);
            this.title = 'Операция успешна';
            this.message = 'Статусы заказа успешно обновлены!';
            this.openDialog();
        });
    }

    sortByValue(event) {
        this.sort[event] ? this.sort[event] = false : this.sort[event] = true;

        this.current_sort.column = event;
        this.current_sort.value = this.sort[event];

        this.service.getOrders(1, this.item_count, this.current_sort, this.searcher, this.filter).subscribe((res: any) => {
            let orders = res.orders.map(el => {
                el.status = el.history.status.title;
                return el;
            });
            this.orders = new MatTableDataSource(orders);
            this.current_page = 0;
        });
    }

    pagination(event?: PageEvent) {
        this.item_count = event.pageSize;
        this.current_page = event.pageIndex;

        this.service.getOrders(this.current_page + 1, this.item_count, this.current_sort, this.searcher, this.filter).subscribe((res: any) => {
            let orders = res.orders.map(el => {
                el.status = el.history.status.title;
                return el;
            });
            this.orders = new MatTableDataSource(orders);
        });
    }

    search(form: NgForm) {
        console.log(form.value);
        this.searcher = form.value.searcher;
        this.service.getOrders(1, this.item_count, this.current_sort, this.searcher, this.filter).subscribe((res: any) => {
            let orders = res.orders.map(el => {
                el.status = el.history.status.title;
                return el;
            });
            this.orders = new MatTableDataSource(orders);
            this.current_page = 0;
        });
    }

    setFilter(status) {
        this.filter = status.id;
        this.currentlyFilters = [];
        this.currentlyFilters.push({
            title: 'Статус',
            name: status.title,
            type: status.id,
        });

        this.service.getOrders(1, this.item_count, this.current_sort, this.searcher, this.filter).subscribe((res: any) => {
            let orders = res.orders.map(el => {
                el.status = el.history.status.title;
                return el;
            });
            this.orders = new MatTableDataSource(orders);
            this.current_page = 0;
        });
    }

    deleteFilterUserList(param, indexParam) {
        this.filter = '';
        this.currentlyFilters.splice(indexParam, 1);
        this.service.getOrders(1, this.item_count, this.current_sort, this.searcher, this.filter).subscribe((res: any) => {
            let orders = res.orders.map(el => {
                el.status = el.history.status.title;
                return el;
            });
            this.orders = new MatTableDataSource(orders);
            this.current_page = 0;
        });
    }

    endOfSentence(number, words) {
        number = number % 100;
        if (number > 19) {
            number = number % 10;
        }
        switch (number) {
            case 1: {
                return (words[0]);
            }
            case 2:
            case 3:
            case 4: {
                return (words[1]);
            }
            default: {
                return (words[2]);
            }
        }
    }

    selectAll(el) {
        var inputs = document.querySelectorAll('*[name*="client_"]');
        for (var i = 0; i < inputs.length; i++) {
            var input = inputs[i] as HTMLInputElement;
            if (el == false) {
                input.checked = el;
            } else {
                input.checked = el.target.checked;
            }
        }
    }


    toUpdate(id) {
        this.router.navigate(['/orders/update', id]);
    }

}
