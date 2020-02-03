import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from "../../../services/user.service";
import {Subscription} from 'rxjs/Subscription';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../../services/product.service";
import {NgForm} from "@angular/forms";
import {MatDialog, MatTableDataSource} from "@angular/material";
import {DialogOverviewExampleDialog} from "../../dialog/dialog.component";
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as moment from 'moment';
import {OrderService} from "../../../services/orders.service";
import {DialogOverviewExampleAttributeDialog} from "../../dialog/dialogAttribute.component";
import {DialogOverviewExampleCharacteriscticDialog} from "../../dialog/dialogCharacteristic.component";


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
  selector: 'app-update-products',
  templateUrl: './products-update.component.html',
  styleUrls: ['./products-update.component.scss'],
    providers: [
        {provide: MAT_DATE_LOCALE, useValue: 'ru-US'},
        {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
        {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
    ]
})
export class ProductsUpdateComponent implements OnDestroy {


    private slug: number;
    private subscription: Subscription;

    product: any = null;

    productForm: FormGroup;
    productPriceForm: FormGroup;
    productQuantityForm: FormGroup;

    userGroups: any;
    categories: any;
    attributes: any;
    characteristics: any;
    stocks: any;
    discountTypes: any;

    isUniqueBarcode: boolean = true;
    isUniqueArticle: boolean = true;

    // togetherCheaper: any = null;
    togetherCheaperArticle: string = null;
    togetherCheaperDiscountTypeId: any = null;
    togetherCheaperValue: any = null;
    togetherCheaperStartAt: any = null;
    togetherCheaperEndAt: any = null;

    attributesArray = [];
    selectedAttributes = [];
    characteristicArray = [];
    allAttributes: any;
    allCharacteristics: any;
    images: any = null;

    prices: any = [];
    quantities: any = [];
    models: any = [];

    imagesLinks = [];

    message: string;
    title: string;

    togetherStatus: boolean;

    pdf_file: any;

    displayedColumns = ['product_id', 'title', 'article', 'action'];
    dataSource = null;
    addAnalogForm: FormGroup;
    options = [];

    reqAnalogCount: boolean = true;

    blockSubmit: boolean = false;

    description: any = null;

    constructor(private service: ProductService, private orderService: OrderService, private activateRoute: ActivatedRoute, private router: Router, public dialog: MatDialog) {

        this.subscription = activateRoute.params.subscribe(params =>
            this.slug = params['slug']
        );

        this.productForm = new FormGroup({
            "category_id": new FormControl(null, [
                Validators.required,
                Validators.pattern("\\d+"),
            ]),
            "guarantee": new FormControl(null, [
                // Validators.pattern("\\d+"),
            ]),
            "article": new FormControl(null, [
                Validators.required,
            ]),
            "title": new FormControl(null, [
                Validators.required,
            ]),
            "slug": new FormControl(null, [
            ]),
            // "barcode": new FormControl(null, [
            // ]),
            "description": new FormControl(null, [
                // Validators.required,
            ]),
            "meta_title": new FormControl(null, [
            ]),
            "meta_description": new FormControl(null, [
            ]),
            "meta_keywords": new FormControl(null, [
            ]),
        });

        this.productPriceForm = new FormGroup({
            "price": new FormControl(null, [
                // Validators.required,
                // Validators.pattern("\\d+"),
            ]),
            "count": new FormControl(null, [
                // Validators.required,
                Validators.pattern("\\d+"),
            ]),
            "user_group_id": new FormControl(null, [
                // Validators.required,
                Validators.pattern("\\d+"),
            ]),
        });

        this.productQuantityForm = new FormGroup({
            "product_quantity": new FormControl(null, [
                Validators.required,
                Validators.pattern("\\d+"),
            ]),
            "product_stock_id": new FormControl(null, [
                Validators.required,
                Validators.pattern("\\d+"),
            ]),
        });

        this.addAnalogForm = new FormGroup({
            "sub_product_id" : new FormControl(null, [
                Validators.required
            ]),
        });

        this.subscription = this.service.productUpdateForm(this.slug).subscribe((res:any) => {
            this.product = res.product;
            this.userGroups = res.userGroups;
            this.categories = res.categories;
            this.stocks = res.stocks;
            this.discountTypes = res.discountTypes;
            setTimeout(()=>{
                this.description = this.product.description;
            }, 4000);

            // this.togetherCheaper = res.together_cheaper;
            if(res.product.together_cheaper) {
                this.togetherStatus = true;
                this.togetherCheaperArticle = res.product.together_cheaper.sub_product.article;
                this.togetherCheaperDiscountTypeId = res.product.together_cheaper.discount.discount_type_id;
                this.togetherCheaperStartAt = res.product.together_cheaper.discount.formatingStartAt;
                this.togetherCheaperEndAt = res.product.together_cheaper.discount.formatingEndAt;
                this.togetherCheaperValue = res.product.together_cheaper.discount.value;
            }

            res.attributes.forEach((el) => {
                this.attributesArray.push({
                    id: el.id,
                    title: el.attribute.title,
                    value: el.value
                })
            });

            res.characteristics.forEach((el) => {
                this.characteristicArray.push({
                    id: el.id,
                    title: el.attribute.title,
                    value: el.value
                })
            });

            this.allAttributes = res.allAttributes;
            this.allCharacteristics = res.allCharacteristics;

            if(this.product.mediumImageLinks.length) {
                this.imagesLinks = this.product.mediumImageLinks;
            }

            this.attributesArray.forEach((el, i) => {
                this.product.product_attributes.forEach((item) => {
                    if(el.id == item.attribute_id) {
                        el.value = item.id;
                    }
                });
            });

            this.characteristicArray.forEach((el, i) => {
                this.product.product_attributes.forEach((item) => {
                    if(el.id == item.attribute_id) {
                        el.value = item.id;
                    }
                });
            });

            this.productForm.patchValue({
                category_id: !!this.product.category_id ? this.product.category_id : null,
                guarantee:  !!this.product.guarantee ? this.product.guarantee : null,
                article:  !!this.product.article ? this.product.article : null,
                title:  !!this.product.title ? this.product.title : null,
                // barcode:  !!this.product.barcode ? this.product.barcode : null,
                description:  !!this.product.description ? this.product.description : null,
                meta_title:  !!this.product.meta_title ? this.product.meta_title : null,
                meta_description:  !!this.product.meta_description ? this.product.meta_description : null,
                meta_keywords:  !!this.product.meta_keywords ? this.product.meta_keywords : null,
            });

            if(this.product.product_prices) {
                this.product.product_prices.forEach((el, i) => {
                    this.prices.push({product_price_id: el.id, price: el.price, count: el.product_count, user_group_id: el.user_group_id});
                });
            }

            if(this.product.quantities) {
                this.product.quantities.forEach((el, i) => {
                    this.quantities.push({product_quantity_id: el.id, product_quantity: el.quantity, product_stock_id: el.product_stock_id});
                });
            }

            if(this.product.reconcilabilities) {
                this.product.reconcilabilities.forEach((el, i) => {
                    this.models.push({name: el.reconcilability.reconcilability});
                });
            }

            this.prices.push({product_price_id: null, price: null, count: null, user_group_id: null});
            this.quantities.push({product_quantity_id: null, product_quantity: null, product_stock_id: null});
            this.models.push({name: null});

            this.dataSource = new MatTableDataSource(this.product.analogs);
            if(this.dataSource.data.length >= 3) {
                this.reqAnalogCount = false;
            }
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
        console.log(this.productForm);
        console.log(this.images);
        // console.log(this.prices);
        // console.log(this.quantities);
        console.log(this.models);
        this.productForm.controls['description'].setValue(this.description);
        let formData: FormData = new FormData();
        formData.append('id', this.product.id);
        formData.append('article', this.productForm.controls['article'].value);
        // formData.append('barcode', this.productForm.controls['barcode'].value);
        formData.append('category_id', this.productForm.controls['category_id'].value);
        formData.append('description', this.productForm.controls['description'].value);
        formData.append('guarantee', this.productForm.controls['guarantee'].value);
        formData.append('title', this.productForm.controls['title'].value);
        formData.append('meta_title', this.productForm.controls['meta_title'].value);
        formData.append('meta_description', this.productForm.controls['meta_description'].value);
        formData.append('meta_keywords', this.productForm.controls['meta_keywords'].value);

        if(this.images) {
            for (let i = 0; i < this.images.length; i++) {
                formData.append('images[]', this.images[i]);
            }
        }

        // if(this.prices.length) {
        //     for (let i = 0; i < this.prices.length; i++) {
        //         if(this.prices[i]['price'] && this.prices[i]['count'] && this.prices[i]['user_group_id']) {
        //             formData.append("prices["+i+"][price]",this.prices[i]['price']);
        //             formData.append("prices["+i+"][count]",this.prices[i]['count']);
        //             formData.append("prices["+i+"][user_group_id]",this.prices[i]['user_group_id']);
        //         }
        //     }
        // }

        // if(this.quantities.length) {
        //     for (let i = 0; i < this.quantities.length; i++) {
        //         if(this.quantities[i]['product_quantity'] && this.quantities[i]['product_stock_id']) {
        //             formData.append("quantities["+i+"][product_quantity]",this.quantities[i]['product_quantity']);
        //             formData.append("quantities["+i+"][product_stock_id]",this.quantities[i]['product_stock_id']);
        //         }
        //     }
        // }

        if(this.models.length) {
            for (let i = 0; i < this.models.length; i++) {
                if(this.models[i]['name']) {
                    formData.append("models["+i+"]",this.models[i]['name']);
                }
            }
        }

        this.service.updateProduct(formData).subscribe((res:any) => {
            if(res.status) {
                this.title = 'Операция успешна';
                this.message = 'Товар обновлен';
                this.openDialog();
            } else {
                this.blockSubmit = false;
                this.title = 'Что-то пошло не так';
                this.message = 'Возможно вы ввели неверные данные';
                this.openDialog();
            }
        }, (error) => {
            this.blockSubmit = false;
            console.log(error.errors);
            this.title = 'Что-то пошло не так';
            this.message = 'Возможно вы ввели неверные данные';
            this.openDialog();
            for (let key in error.errors) {
                this.productForm.controls[key].setErrors({server_error: error.errors[key][0]});
            }
        });
    }

    deleteAttributeFromProduct(attribute) {
        let data = {
            attribute_id: [attribute.id]
        };
        this.service.deleteAttributeFromProduct(data, this.product.slug).subscribe((res:any) => {
            if(res.status){
                this.attributesArray = this.attributesArray.filter((el) => {
                    return el.id != attribute.id;
                });
                this.title = 'Операция успешна';
                this.message = 'Атрибут был успешно удален с товара';
                this.openDialog();
            } else {
                this.title = 'Что-то пошло не так';
                this.message = 'Возможно сбои на сервере';
                this.openDialog();
            }
        }, (error) => {
            this.title = 'Что-то пошло не так';
            this.message = 'Возможно сбои на сервере';
            this.openDialog();
        });
    }

    deleteCharacteristicFromProduct(characteristic) {
        let data = {
            attribute_id: [characteristic.id]
        };
        this.service.deleteAttributeFromProduct(data, this.product.slug).subscribe((res:any) => {
            if(res.status){
                this.characteristicArray = this.characteristicArray.filter((el) => {
                    return el.id != characteristic.id;
                });
                this.title = 'Операция успешна';
                this.message = 'Характеристика была успешно удалена с товара';
                this.openDialog();
            } else {
                this.title = 'Что-то пошло не так';
                this.message = 'Возможно сбои на сервере';
                this.openDialog();
            }
        }, (error) => {
            this.title = 'Что-то пошло не так';
            this.message = 'Возможно сбои на сервере';
            this.openDialog();
        });
    }

    openDialogForCreateAttribute(): void {
        let dialogRef = this.dialog.open(DialogOverviewExampleAttributeDialog, {
            width: '750px',
            data: { title: 'Добавление атрибута', allAttributes: this.allAttributes, product: this.product }
        });

        dialogRef.afterClosed().subscribe(result => {
            this.service.getProductAttributes(this.product.slug).subscribe((res:any) => {
                this.attributesArray = [];
                res.attributes.forEach((el) => {
                    this.attributesArray.push({
                        id: el.id,
                        title: el.attribute.title,
                        value: el.value
                    })
                });
            });
            console.log('The dialog was closed');
            this.message = result;
        });
    }

    openDialogForCreateCharacterictic(): void {
        let dialogRef = this.dialog.open(DialogOverviewExampleCharacteriscticDialog, {
            width: '750px',
            data: { title: 'Добавление характерисики', allCharacteristics: this.allCharacteristics, product: this.product }
        });

        dialogRef.afterClosed().subscribe(result => {
            this.service.getProductCharacterictic(this.product.slug).subscribe((res:any) => {
                this.characteristicArray = [];
                res.characteristics.forEach((el) => {
                    this.characteristicArray.push({
                        id: el.id,
                        title: el.attribute.title,
                        value: el.value
                    })
                });
            });
            console.log('The dialog was closed');
            this.message = result;
        });
    }

    setAttributes(data) {
        console.log(data);
        this.attributesArray.forEach((el, i) => {
            if(el.id == data.id) {
                el.value = data.value;
            }
        });
    }

    setCharacteristic(data) {
        console.log(data);
        this.characteristicArray.forEach((el, i) => {
            if(el.id == data.id) {
                el.value = data.value;
            }
        });
    }

    setImages(event) {
        console.log(event.target.files);
        this.images = event.target.files;
    }

    productPrice(form: NgForm, index) {
        console.log(form.value, index);
        this.prices.forEach((el, i) => {
            if(i == index) {
                if(!(!!el.price && !!el.count)) {
                    this.prices.push({price: null, count: null, user_group_id: null});
                }

                el.price = form.value.price;
                el.count = form.value.count;
                el.user_group_id = form.value.user_group_id;
            }
        });

        console.log(this.prices);
    }

    togetherCheaper(form: NgForm) {
        console.log(form.value);
        form.value.start_at = moment(form.value.start_at).format('YYYY-MM-DD HH:mm:ss');
        form.value.end_at = moment(form.value.end_at).format('YYYY-MM-DD HH:mm:ss');
        form.value.product_id = this.product.id;
        console.log(form.value);
        this.service.togetherCheaper(form.value).subscribe((res:any) => {
            if(res.status) {
                this.togetherStatus = true;
                this.title = 'Операция успешна';
                this.message = 'Товар скидка добавлена';
                this.openDialog();
            } else {
                this.title = 'Что-то пошло не так';
                this.message = 'Возможно вы ввели неверные данные';
                this.openDialog();
            }
        });
    }

    togetherCheaperDelete() {
        this.service.togetherCheaperDelete({ id: this.product.id }).subscribe((res:any) => {
            if(res.status) {
                this.togetherStatus = false;
                this.togetherCheaperArticle = null;
                this.togetherCheaperDiscountTypeId = null;
                this.togetherCheaperValue = null;
                this.togetherCheaperStartAt = null;
                this.togetherCheaperEndAt = null;
                this.title = 'Операция успешна';
                this.message = 'Товар скидка удалена';
                this.openDialog();
            } else {
                this.title = 'Что-то пошло не так';
                this.message = 'Возможно вы ввели неверные данные';
                this.openDialog();
            }
        });
    }



    productQuantity(form: NgForm, index) {
        console.log(form.value);

        this.quantities.forEach((el, i) => {
            if(i == index) {
                if(!(!!el.product_quantity && !!el.product_stock_id)) {
                    this.quantities.push({product_quantity: null, product_stock_id: null});
                }
                el.product_quantity = form.value.product_quantity;
                el.product_stock_id = form.value.product_stock_id;
            }
        });

        console.log(this.quantities);
    }

    setModel(form: NgForm, index) {
        console.log(form.value);

        this.models.forEach((el, i) => {
            if(i == index) {
                if(!(!!el.name)) {
                    this.models.push({name: null});
                }
                el.name = form.value.name;
            }
        });

        console.log(this.models);
    }

    deleteProductPrice(index) {
        this.prices.splice(index, 1);
        console.log(this.prices);
    }

    deleteProductQuantity(index) {
        this.quantities.splice(index, 1);
        console.log(this.quantities);
    }

    deleteModel(index) {
        this.models.splice(index, 1);
        console.log(this.models);
    }

    deleteImage(link, i) {
        this.service.deleteImage({link: link}).subscribe((res:any) => {
            this.imagesLinks.splice(i, 1);
            console.log(link);
        });
    }

    checkUniqueValue(type) {
        console.log(this.productForm.controls[type]);
        if(this.productForm.controls[type].valid) {
            let data = {
                value: this.productForm.controls[type].value
            };

            this.service.checkUnique(data, type).subscribe((res: any) => {
                if(res.exists){
                    if(res.type == 'article'){
                        this.isUniqueArticle = false;
                        this.productForm.controls['article'].setErrors({unique: 'Такой Article уже есть'});
                    }else if(res.type == 'barcode'){
                        this.isUniqueBarcode = false;
                        this.productForm.controls['barcode'].setErrors({unique: 'Такой Barcode уже есть'});
                    }
                }else{
                    if(res.type == 'article'){
                        this.isUniqueArticle = true;
                    }else if(res.type == 'barcode'){
                        this.isUniqueBarcode = true;
                    }
                }
            });
        }
    }

    setPdf(event) {
        console.log(event.target.files[0]);
        this.pdf_file = event.target.files[0];
    }

    uploadPdf() {
       console.log(this.pdf_file);

        let formData: FormData = new FormData();
        formData.append('product_id', this.product.id);
        formData.append('file', this.pdf_file);

        this.service.uploadPdf(formData).subscribe((res:any) => {
            if(res.status) {
                this.title = 'Операция успешна';
                this.message = 'Файл загружен';
                this.openDialog();
            }
        });
    }

    setDiscount(form: NgForm) {
        console.log(form.value);
        form.value.start_at = moment(form.value.start_at).format('YYYY-MM-DD HH:mm:ss');
        form.value.end_at = moment(form.value.end_at).format('YYYY-MM-DD HH:mm:ss');
        form.value.product_id = this.product.id;
        this.service.setDiscount(form.value).subscribe((res:any) => {
            this.product.product_discounts.push(res.productDiscount);
        });

        console.log(this.product.product_discounts);
    }

    deleteDiscount(id, i) {
        this.service.deleteDiscount(id).subscribe((res:any) => {
            if(res.status) {
                this.product.product_discounts.splice(i, 1);
            }
        });
    }

    addAnalogs(e){
        // console.log(e);
        this.orderService.getProducts(e.target.value).subscribe(res => {
            console.log(res);
            this.options = res.products;
        }, err => alert(err.message));
    }

    addAnalog(){
        console.log(this.product.id);
        let index = this.options.findIndex(el => el.article == this.addAnalogForm.value.sub_product_id);
        console.log(index);
        let data = {
            main_product_id: this.product.id,
            sub_product_id: this.options[index].id,
        };

        console.log(data);

        this.service.setAnalog(data).subscribe(res => {
            if(res.product) {
                this.product.analogs.push(res.product);

                this.dataSource = new MatTableDataSource(this.product.analogs);

                this.addAnalogForm.controls['sub_product_id'].patchValue(null);
                this.addAnalogForm.controls['sub_product_id'].setErrors(null);

                if(this.dataSource.data.length >= 3) {
                    this.reqAnalogCount = false;
                } else if(this.dataSource.data.length < 3) {
                    this.reqAnalogCount = true;
                }
            }
            console.log(this.reqAnalogCount);
        }, err => alert(err.message));
    }

    remove(id) {
        let data = {
            main_product_id: this.product.id,
            sub_product_id: id,
        };

        this.service.deleteAnalog(data).subscribe((res:any) => {
            if(res.status) {
                this.dataSource.data.forEach((el, i) => {
                   if(el.id == id) {
                       this.dataSource.data.splice(i, 1);

                       this.dataSource = new MatTableDataSource(this.dataSource.data);
                   }

                    if(this.dataSource.data.length >= 3) {
                        this.reqAnalogCount = false;
                    } else if(this.dataSource.data.length < 3) {
                       this.reqAnalogCount = true;
                    }
                   // if(this.dataSource.data.length = 3 ) {
                   //     this.reqAnalogCount = false;
                   // }
                    console.log(this.reqAnalogCount);
                });
            }
        });
    }

    setPrice(form: NgForm) {
        form.value.product_id = this.product.id;
        console.log(form.value);
        this.service.setPrice(form.value).subscribe((res:any) => {
            if(res.price) {
                console.log(res.price);
                this.prices.pop();
                this.prices.push({product_price_id: res.price.id, price: res.price.price, count: res.price.product_count, user_group_id: res.price.user_group_id});
                this.prices.push({product_price_id: null, price: null, count: null, user_group_id: null});

                this.title = 'Операция успешна';
                this.message = 'Цена добавлена';
                this.openDialog();
            }

            console.log(this.prices);
        });
    }

    updatePrice(form: NgForm) {
        this.service.updatePrice(form.value).subscribe((res:any) => {
            if(res.status) {
                this.title = 'Операция успешна';
                this.message = 'Цена обновлена';
                this.openDialog();
            }
        });
    }

    deletePrice(product_price_id) {
        this.service.deletePrice(product_price_id).subscribe((res:any) => {
            if(res.status) {
                this.prices.forEach((el, i) => {
                   if(el.product_price_id == product_price_id) {
                       this.prices.splice(i, 1);
                   }
                });
                this.title = 'Операция успешна';
                this.message = 'Цена удалена';
                this.openDialog();
            }
        });
    }

    setQuantity(form: NgForm) {
        form.value.product_id = this.product.id;
        console.log(form.value);
        this.service.setQuantity(form.value).subscribe((res:any) => {
            if(res.quantity) {
                console.log(res.quantity);
                this.quantities.pop();
                this.quantities.push({product_quantity_id: res.quantity.id, product_quantity: res.quantity.quantity, product_stock_id: res.quantity.product_stock_id});
                this.quantities.push({product_quantity_id: null, product_quantity: null, product_stock_id: null});

                this.title = 'Операция успешна';
                this.message = 'Количество добавлено';
                this.openDialog();
            }

            console.log(this.quantities);
        });
    }

    updateQuantity(form: NgForm) {
        this.service.updateQuantity(form.value).subscribe((res:any) => {
            if(res.status) {
                this.title = 'Операция успешна';
                this.message = 'Количество обновлено';
                this.openDialog();
            }
        });
    }

    deleteQuantity(product_quantity_id) {
        this.service.deleteQuantity(product_quantity_id).subscribe((res:any) => {
            if(res.status) {
                this.quantities.forEach((el, i) => {
                    if(el.product_quantity_id == product_quantity_id) {
                        this.quantities.splice(i, 1);
                    }
                });

                this.title = 'Операция успешна';
                this.message = 'Количество удалено';
                this.openDialog();
            }
        });
    }

    changeAttributes() {
        // console.log(this.productForm.controls['category_id'].value);
        setTimeout(()=>{
            console.log(this.productForm.controls['category_id'].value);
        this.service.getAttributes(this.productForm.controls['category_id'].value).subscribe((res:any) => {
           if(res.attributes) {
               // this.attributes = [];
               // this.characteristics = [];
               this.attributesArray = [];
               this.characteristicArray = [];

               res.attributes.forEach((el, i) => {
                   if(el.type == 'Атрибут') {
                       this.attributes = el.attributes;
                       el.attributes.forEach((el, i) => {
                           this.attributesArray.push({ id: el.id, title: el.title, values: el.values, value: null });
                       });
                   } else if(el.type == 'Характеристика') {
                       this.characteristics = el.attributes;
                       el.attributes.forEach((el, i) => {
                           this.characteristicArray.push({ id: el.id, title: el.title, values: el.values, value: null });
                       });
                   }
               });
           }

           console.log(this.attributesArray);
            console.log(this.characteristicArray);
            console.log(this.attributes);
            console.log(this.characteristics);
        });
        }, 1500);
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
}
