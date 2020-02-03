import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ProductService} from "../../../services/product.service";
import {RequestOptions} from "@angular/http";
import {MatDialog, MatTableDataSource} from "@angular/material";
import {DialogOverviewExampleDialog} from "../../dialog/dialog.component";

@Component({
    selector: 'app-create-products',
    templateUrl: './products-create.component.html',
    styleUrls: ['./products-create.component.scss']
})
export class ProductsCreateComponent implements OnInit {

    productForm: FormGroup;
    productPriceForm: FormGroup;
    productQuantityForm: FormGroup;

    userGroups: any;
    categories: any;
    attributes: any;
    characteristics: any;
    stocks: any;

    isUniqueBarcode: boolean = true;
    isUniqueArticle: boolean = true;

    attributesArray = [];
    characteristicArray = [];
    images: any = null;

    prices: any = [];
    quantities: any = [];
    models: any = [];

    message: string;
    title: string;

    blockSubmit: boolean = false;

    constructor(private service: ProductService, private router: Router, public dialog: MatDialog) {

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
            "images": new FormControl(null, [
            ]),
            "attributes": new FormControl(null, [
            ]),
            "characteristics": new FormControl(null, [
            ]),
        });

        this.productPriceForm = new FormGroup({
            "price": new FormControl(null, [
                // Validators.required,
                // Validators.pattern("\\d+"),
            ]),
            "count": new FormControl(null, [
                Validators.required,
                Validators.pattern("\\d+"),
            ]),
            "user_group_id": new FormControl(null, [
                Validators.required,
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

        this.prices.push({price: null, count: null, user_group_id: null});
        this.quantities.push({product_quantity: null, product_stock_id: null});
        this.models.push({name: null});

        console.log(this.productForm, this.productPriceForm);
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

    ngOnInit() {
        this.service.productForm().subscribe((res:any) => {
            console.log(res);
            this.userGroups = res.userGroups;
            this.categories = res.categories;
            this.stocks = res.stocks;

            res.attributes.forEach((el, i) => {
                console.log(el.type);
               if(el.type == 'Атрибут') {
                   this.attributes = el.attributes;
                   el.attributes.forEach((el, i) => {
                      this.attributesArray.push({ id: el.id, title: el.title, value: null });
                   });
               } else if(el.type == 'Характеристика') {
                    this.characteristics = el.attributes;
                   el.attributes.forEach((el, i) => {
                       this.characteristicArray.push({ id: el.id, title: el.title, value: null });
                   });
               }
            });

            console.log(this.attributesArray, this.characteristicArray);
        });
    }

    submit() {
        this.blockSubmit = true;
        console.log(this.productForm);
        console.log(this.images);
        console.log(this.attributesArray);
        console.log(this.characteristicArray);
        console.log(this.prices);
        console.log(this.quantities);
        console.log(this.models);

        let formData: FormData = new FormData();
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

        if(this.attributesArray.length) {
            this.attributesArray.forEach((el, i) => {
                if(el.value) {
                    formData.append('attributes[]', el.value);
                }
            });
        }

        if(this.characteristicArray.length) {
            this.characteristicArray.forEach((el, i) => {
                if(el.value) {
                    formData.append('characteristics[]', el.value);
                }
            });
        }

        if(this.prices.length) {
            for (let i = 0; i < this.prices.length; i++) {
                if(this.prices[i]['price'] && this.prices[i]['count'] && this.prices[i]['user_group_id']) {
                    formData.append("prices["+i+"][price]",this.prices[i]['price']);
                    formData.append("prices["+i+"][count]",this.prices[i]['count']);
                    formData.append("prices["+i+"][user_group_id]",this.prices[i]['user_group_id']);
                }
            }
        }

        if(this.quantities.length) {
            for (let i = 0; i < this.quantities.length; i++) {
                if(this.quantities[i]['product_quantity'] && this.quantities[i]['product_stock_id']) {
                    formData.append("quantities["+i+"][product_quantity]",this.quantities[i]['product_quantity']);
                    formData.append("quantities["+i+"][product_stock_id]",this.quantities[i]['product_stock_id']);
                }
            }
        }

        if(this.models.length) {
            for (let i = 0; i < this.models.length; i++) {
                if(this.models[i]['name']) {
                    formData.append("models["+i+"]",this.models[i]['name']);
                }
            }
        }

        this.service.setProduct(formData).subscribe((res:any) => {
            if(res.status) {
                this.title = 'Операция успешна';
                this.message = 'Товар создан';
                this.openDialog();
                this.router.navigate(['/products']);
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
        console.log(this.characteristicArray);
    }

    setImages(event) {
        console.log(event.target.files);
        this.images = event.target.files;
    }

    productPrice(value, index) {
        console.log(value);
        if(this.productPriceForm.valid) {
            this.prices.forEach((el, i) => {
                if(i == index) {
                    if(!(!!el.price && !!el.count)) {
                        this.prices.push({price: null, count: null});
                    }

                    el.price = this.productPriceForm.controls['price'].value;
                    el.count = this.productPriceForm.controls['count'].value;
                    el.user_group_id = this.productPriceForm.controls['user_group_id'].value;
                }
            });
        }
        console.log(this.prices);
    }

    setModel(form: NgForm, index) {
        console.log(form.value, 1);

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

    productQuantity(value, index) {
        console.log(value);
        if(this.productQuantityForm.valid) {
            this.quantities.forEach((el, i) => {
                if(i == index) {
                    if(!(!!el.product_quantity && !!el.product_stock_id)) {
                        this.quantities.push({product_quantity: null, product_stock_id: null});
                    }
                    el.product_quantity = this.productQuantityForm.controls['product_quantity'].value;
                    el.product_stock_id = this.productQuantityForm.controls['product_stock_id'].value;
                }
            });
        }
        console.log(this.quantities);
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
}
