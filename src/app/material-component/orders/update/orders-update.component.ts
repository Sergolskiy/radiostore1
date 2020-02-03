import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {OrderService} from "../../../services/orders.service";
import {Subscription} from 'rxjs/Subscription';
import {AbstractControl, FormControl, FormGroup, Validators, FormArray} from "@angular/forms";
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as moment from 'moment';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {environment} from "../../../../environments/environment";
import {DialogOverviewExampleDialog} from "../../dialog/dialog.component";

export const MY_FORMATS = {
    parse: {
        dateInput: 'L',
    },
    display: {
        dateInput: 'L',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMM YYYY',
    },
};

@Component({
  selector: 'app-update-ordrs',
  templateUrl: './orders-update.component.html',
  styleUrls: ['./orders-update.component.scss'],
    providers: [
        {provide: MAT_DATE_LOCALE, useValue: 'ru-US'},
        {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
        {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
    ]
})
export class OrdersUpdateComponent implements OnDestroy {
    base_url = environment.base_url;
    private id: number;
    private subscription: Subscription;

    options = [];
    optionsCity = [];
    optionsCitiesForUpdate = [];
    optionsAddress = [];
    optionsAddressForUpdate = [];

    order: any = {};
    deliveries = [];
    payments = [];
    statuses = [];
    amount: number = 0;
    order_liqpay_link = '';

    total_price = 0;
    total_quantity = 0;

    displayedColumns = ['article', 'title', 'price', 'total_price', 'quantity', 'action'];
    displayedColumnsHistory = ['created_at', 'comment', 'user_id'];
    dataSource = null;
    historyDataSource = null;

    orderForm: FormGroup;
    addProductForm: FormGroup;
    ttnForm: FormGroup;
    phoneForm: FormGroup;
    public mask: Array<string | RegExp>;
    user_role_id: number;

    blockSubmit: boolean = false;
    show: boolean = false;
    buttonName: any = 'Изменить адрес доставки';

    message: string;
    title: string;

    senders: any;
    senderInfo: any;
    ttn: string = null;
    blockTTNSubmit: boolean = false;
    cityRef: string = null;
    cityRefForUpdate: string = null;

    firstLoad: boolean = true;

    Math: any;

    constructor(private service: OrderService, private activateRoute: ActivatedRoute, private router: Router, public dialog: MatDialog) {
      this.Math = Math;
        this.mask = [/\+/,/[0-9]/,/\d/, ' ', '(', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

        this.subscription = activateRoute.params.subscribe(params=>
            this.id = params['id']
        );

        this.addProductForm = new FormGroup({
            "product_id" : new FormControl(null, [
                Validators.required
            ]),
            "quantity" : new FormControl(1, [
                Validators.required,
                Validators.min(1)
            ])
        });

        this.orderForm = new FormGroup({
            "first_name": new FormControl(null, [
                Validators.maxLength(64),
            ]),
            "middle_name": new FormControl(null, [
                Validators.maxLength(64),
            ]),
            "last_name": new FormControl(null, [
                Validators.maxLength(64),
            ]),
            "email": new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-z|A-Z|0-9|_|\\-|\\.]+@[a-z|A-Z|0-9|_|\\-|\\.]+\\.[a-z|A-Z]{2,3}")
            ]),
            "phone": new FormControl(null, [
                Validators.required,
            ]),
            "admin_comment": new FormControl(null, [
            ]),
            "status": new FormControl(null, [
                Validators.required
            ]),
            "delivery": new FormControl(null, [
                Validators.required
            ]),
            "payment": new FormControl(null, [
                Validators.required
            ]),
            "sender_city_for_update" : new FormControl(null),
            "address": new FormControl(null, [
                Validators.required
            ]),
            "send_at": new FormControl(null, [
            ]),
            "ttn": new FormControl(null, [
            ]),
            "addressUpdate": new FormControl(null, [
            ]),
            "cityUpdate": new FormControl(null, [
            ]),
        });

        this.ttnForm = new FormGroup({
            "sender" : new FormControl(null, [
                Validators.required,
            ]),
            "sender_city" : new FormControl(null, [
                Validators.required
            ]),
            "PayerType" : new FormControl(null, [
                Validators.required,
            ]),
            "SeatsAmount" : new FormControl(null, [
                Validators.required,
            ]),
            "Description" : new FormControl(null, [
                Validators.required,
            ]),
            "Weight" : new FormControl(null, [
                Validators.required,
            ]),
          "NpPrice" : new FormControl(null, [

          ]),
          "c_height" : new FormControl(0, [

          ]),
          "c_width" : new FormControl(0, [

          ]),
          "c_yardage" : new FormControl(0, [

          ]),
            "VolumeGeneral" : new FormControl(null, [
                Validators.required,
            ]),
            "CargoType" : new FormControl(null, [
            ]),
            "BackwardPayerType" : new FormControl(null, [
                // Validators.required,
            ]),

            "BackwardCargoType" : new FormControl(null, [
            ]),
            "BackwardDelivery" : new FormControl(0, [
            ]),
            "sender_cityref" : new FormControl(null, [
            ]),
            "sender_addressref" : new FormControl(null, [
            ]),

        });

        this.phoneForm = new FormGroup({
            "message" : new FormControl(null, [Validators.required]),
            "send_email" : new FormControl(0, []),
            "send_phone" : new FormControl(0, []),
        });

        this.service.userUpdateForm(this.id).subscribe((res:any) => {
            this.order = res.order;
            this.statuses = res.statuses;
            this.deliveries = res.deliveries;
            this.payments = res.payments;
            this.amount = res.order.amount;
            this.order_liqpay_link = this.order.liq_pay_order ? `${this.base_url}/liqpay-return/order/${this.order.id}` : null;

            if(this.order.order_t_t_n) {
                this.ttn = this.order.order_t_t_n.ttn;
            }

            this.orderForm.patchValue({
                phone: !!this.order.phone ? this.order.phone : null,
                email: !!this.order.email ? this.order.email : null,
                last_name: !!this.order.last_name ? this.order.last_name : null,
                first_name: !!this.order.first_name ? this.order.first_name : null,
                middle_name: !!this.order.middle_name ? this.order.middle_name : null,
                admin_comment: !!this.order.admin_comment ? this.order.admin_comment : null,
                status: !!this.order.history ? this.order.history.order_status_id : null,
                delivery: !!this.order.delivery ? this.order.delivery.delivery_type_id : null,
                payment: !!this.order.payment ? this.order.payment.payment_type_id : null,
                address: !!this.order.delivery ? this.order.delivery.address.address : null,
                send_at: !!this.order.send_at ? this.order.send_at : null,
                ttn: !!this.order.ttn ? this.order.ttn : null,
                addressUpdate: null,
                cityUpdate: null,
            });
          this.ttnForm.patchValue({
            NpPrice: !!this.order.amount ? this.order.amount : null
          });

            this.total_price = this.order.amount;
            this.total_quantity = this.order.product_count;

            this.historyDataSource = new MatTableDataSource(this.order.status_history);
            this.dataSource = new MatTableDataSource(this.order.products);
        });

        this.service.getSenders().subscribe((res:any) => {
            if(res.senders) {
                this.senders = res.senders;
              this.cityRef = 'db5c88f0-391c-11dd-90d9-001a92567626';
              this.ttnForm.patchValue({
                sender: '0083e74d-37f9-11e8-8b24-005056881c6b',
                sender_city: 'Днепр'
              });
              this.addCity();
            }
        });

      this.ttnForm.patchValue({
        c_width: '0',
        c_height: '0',
        c_yardage: '0'
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

    submit() {
       this.blockSubmit = true;
        console.log(this.orderForm);
        if(!this.orderForm.invalid) {
            this.orderForm.value.id = this.id;
            this.service.updateOrder(this.orderForm.value).subscribe((res: any) => {
                this.title = 'Операция успешна';
                this.message = 'Заказ обновлен';
                this.openDialog();
                this.router.navigate(['/products  ']);
            }, (error) => {
                this.blockSubmit = false;
                console.log(error.errors);
                for (let key in error.errors) {
                    this.orderForm.controls[key].setErrors({server_error: error.errors[key][0]});
                }
            });
        }
    }

    changeDate(e: MatDatepickerInputEvent<Date>){
        console.log(e);
        this.orderForm.patchValue({
            send_at: moment(e.value).format('YYYY-MM-DD HH:mm:ss')
        });
    }

    remove(id) {
        this.service.deleteProduct(id).subscribe((res:any) => {
            this.order.products = res.product.products;

            this.dataSource = new MatTableDataSource(this.order.products);

            this.total_price = res.product.amount;
            this.total_quantity = res.product.product_count;
        });
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

    addProducts(e){
        this.service.getProducts(e.target.value).subscribe(res => {
            console.log(res);
            this.options = res.products;
        }, err => alert(err.message));
    }

    addProduct(){
        console.log(this.order.id);
        let obj = this.addProductForm.value;
        let index = this.options.findIndex(el => el.title === this.addProductForm.value.product_id);
        obj.product_id = this.options[index].id;
        obj.together = false;
        this.service.addProduct(obj, this.order.id).subscribe(res => {
            this.dataSource = new MatTableDataSource(res.order.products);
            this.total_price = res.order.amount;
            this.total_quantity = res.order.product_count;
            this.addProductForm.reset();
        }, err => alert(err.message));
    }


    statusConfirm() {
        this.service.statusConfirm(this.order.id).subscribe((res: any) => {
            if(res.status) {
                this.title = 'Операция успешна';
                this.message = 'Заказ подтвержден';
                this.openDialog();
            } else {
                this.title = 'Что-то пошло не так';
                this.message = 'Возможно есть проблемы на сервере';
                this.openDialog();
            }
        });
    }

    statusCancel() {
        this.service.statusCancel(this.order.id).subscribe((res: any) => {
            if(res.status) {
                this.title = 'Операция успешна';
                this.message = 'Заказ отменен';
                this.openDialog();
            } else {
                this.title = 'Что-то пошло не так';
                this.message = 'Возможно есть проблемы на сервере';
                this.openDialog();
            }
        });
    }

    ttnSubmit() {
        if(this.ttnForm.valid) {
            this.blockTTNSubmit = true;
            let data = this.ttnForm.value;

            this.senders.forEach((el, i) => {
                if(el.Ref == this.ttnForm.controls['sender'].value) {
                    data.sender_FirstName = el.FirstName;
                    data.sender_MiddleName = el.MiddleName;
                    data.sender_LastName = el.LastName;
                    data.sender_Ref = el.Ref;
                    data.sender_Phone = el.Phones;
                }
            });
            data.sender_cityref = this.cityRef;

            this.service.setTTN(this.order.id, data).subscribe((res:any) => {
                if(res.ttn) {
                    this.title = 'Операция успешна';
                    this.message = 'ТТН создан';
                    this.openDialog();
                    this.ttn = res.ttn.ttn;
                } else {
                    this.title = 'Что-то пошло не так';
                    this.message = 'Возможно есть проблемы на сервере или вы ввели неверные данные';
                    this.openDialog();
                }
                console.log(this.ttn);
            }, (error) => {
                this.title = 'Что-то пошло не так';
                this.message = 'Возможно есть проблемы на сервере';
                this.openDialog();
                this.blockTTNSubmit = false;
                console.log(error.errors);
                for (let key in error.errors) {
                    this.orderForm.controls[key].setErrors({server_error: error.errors[key][0]});
                }
            });
        }
    }

    sendMessage() {
        if(!this.phoneForm.controls['send_email'].value && !this.phoneForm.controls['send_phone'].value) {
            this.phoneForm.setErrors({empty: 'empty'});
            // this.phoneForm.controls['send_phone'].setErrors({message: 'empty'});
            return;
        }

        if(this.phoneForm.valid) {
            this.service.sendMessage(this.order.id, this.phoneForm.value).subscribe((res:any) => {
                if(res.status) {
                    this.phoneForm.controls['message'].patchValue(null);
                    this.phoneForm.controls['send_email'].patchValue(0);
                    this.phoneForm.controls['send_phone'].patchValue(0);
                    this.phoneForm.controls['message'].setErrors(null);
                    this.phoneForm.controls['send_email'].setErrors(null);
                    this.phoneForm.controls['send_phone'].setErrors(null);
                    this.title = 'Операция успешна';
                    this.message = 'Сообщение отправлено';
                    this.openDialog();
                } else {
                    this.title = 'Что-то пошло не так';
                    this.message = 'Возможно есть проблемы на сервере';
                    this.openDialog();
                }
            }, (error) => {
                this.title = 'Что-то пошло не так';
                this.message = 'Возможно есть проблемы на сервере';
                this.openDialog();
                console.log(error.errors);
            });
        }
    }

    ShowChangeDelivery() {
        this.show = !this.show;

        if(this.show)
            this.buttonName = "Скрыть";
        else
            this.orderForm.controls['cityUpdate'].reset();
            this.orderForm.controls['addressUpdate'].reset();
            this.buttonName = "Изменить адрес доставки";
    }

    addCitiesForUpdate(e) {

        let data = {
            city: e.target.value,
            type: "novaposhta",
        };

        this.service.getCitys(data).subscribe(res => {
            this.optionsCitiesForUpdate = res.places;
        }, err => alert(err.message));
    }

    addCityForUpdate(){
        if(this.optionsCitiesForUpdate.length == 0) {
            this.optionsCitiesForUpdate.push({Ref: 'db5c88f0-391c-11dd-90d9-001a92567626'});
        }
        this.cityRefForUpdate = this.optionsCitiesForUpdate[0].Ref;
        let data = {
            city: this.optionsCitiesForUpdate[0].Ref,
            type: "novaposhta"
        };

        this.service.getAddresses(data).subscribe(res => {
            this.optionsAddressForUpdate = res.data;
        }, err => alert(err.message));
    }

    addCitys(e) {

        let data = {
            city: e.target.value,
            type: "novaposhta",
        };

        this.service.getCitys(data).subscribe(res => {
            this.optionsCity = res.places;
        }, err => alert(err.message));
    }

    calcNP()
    {
      let x = parseInt(this.ttnForm.controls['c_width'].value);
      let y = parseInt(this.ttnForm.controls['c_height'].value);
      let z = parseInt(this.ttnForm.controls['c_yardage'].value);
      this.ttnForm.controls['VolumeGeneral'].patchValue(this.Math.ceil(x * y * z / 4000 * 2) / 2);
    }

    addCity(){
      if(this.optionsCity.length == 0) {
        this.optionsCity.push({Ref: 'db5c88f0-391c-11dd-90d9-001a92567626'});
      }
      this.cityRef = this.optionsCity[0].Ref;
      let data = {
        city: this.optionsCity[0].Ref,
        type: "novaposhta"
      };

        this.service.getAddresses(data).subscribe(res => {
            this.optionsAddress = res.data;
            if(this.firstLoad) {
              this.firstLoad = false;
              this.ttnForm.patchValue({
                sender_addressref: '1ec09daa-e1c2-11e3-8c4a-0050568002cf'
              });

            }
        }, err => alert(err.message));
    }

}
