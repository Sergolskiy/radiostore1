import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import * as moment from 'moment';
import {ProductService} from "../../services/product.service";
import {DialogOverviewExampleDialog} from "./dialog.component";

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss']
})
export class DialogComponentDiscount {
    message: string;
    title: string;

    constructor(public dialog: MatDialog) {}

    openDialog(): void {
        let dialogRef = this.dialog.open(DialogOverviewExampleDiscountDialog, {
            width: '250px',
            data: { title: this.title, message: this.message }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.message = result;
        });
    }

}

@Component({
    selector: 'dialog-overview-example-dialog-dialog',
    template: `<h1 mat-dialog-title style="text-align: center">{{data.title}}</h1><i class="material-icons" style="cursor: pointer" (click)="onNoClick()">close</i>
    <hr>
    <div mat-dialog-content>
        <form #discountsForm="ngForm" (ngSubmit)="setDiscount(discountsForm)">
            <mat-form-field>
                <mat-select placeholder="Тип скидки" name="discount_type_id" required="required">
                    <mat-option *ngFor="let type of data.discountTypes" [value]="type.id">{{type.type}}</mat-option>
                </mat-select>
            </mat-form-field>

            <mat-form-field>
                <input matInput type="number" placeholder="Значение"  name="value" required="required">
            </mat-form-field>

            <mat-form-field>
                <input matInput [matDatepicker]="pickerDiscFrom" placeholder="Дата начала скидки" name="start_at">
                <mat-datepicker-toggle matSuffix [for]="pickerDiscFrom"></mat-datepicker-toggle>
                <mat-datepicker #pickerDiscFrom></mat-datepicker>
            </mat-form-field>

            <mat-form-field>
                <input matInput [matDatepicker]="pickerDiscTo" placeholder="Дата окончания скидки" name="end_at">
                <mat-datepicker-toggle matSuffix [for]="pickerDiscTo"></mat-datepicker-toggle>
                <mat-datepicker #pickerDiscTo></mat-datepicker>
            </mat-form-field>
            <button type="submit" mat-raised-button color="primary">Добавить</button>
        </form>
    </div>
    <div mat-dialog-actions style="display: flex; justify-content: center">
      <button mat-button (click)="onNoClick()" tabindex="-1">Отменить</button>
    </div>`
})
export class DialogOverviewExampleDiscountDialog {

    discountTypes: any;
    selectedClients: any;
    title: any;
    message: any;

    constructor(
        private service: ProductService,
        public dialogRef: MatDialogRef<DialogOverviewExampleDiscountDialog>,
        @Inject(MAT_DIALOG_DATA)
        public data: any,
        public dialog: MatDialog) {
        this.discountTypes = data.discountTypes;
    }

    onNoClick() {
        this.dialogRef.close();
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

    setDiscount(form: NgForm) {
        var selected = document.querySelectorAll('*[name*="product_"]:checked');
        if(selected.length == 0) {
            alert("Выберите хотя бы одного клиента");
            return;
        }
        this.selectedClients = [];
        for(var i = 0; i < selected.length; i++) {
            this.selectedClients.push(selected[i].attributes.getNamedItem('name').value.replace('product_', ''));
        }
        let data = {
            discount: {
                start_at: moment(form.value.start_at).format('YYYY-MM-DD HH:mm:ss'),
                end_at: moment(form.value.end_at).format('YYYY-MM-DD HH:mm:ss'),
                value: form.value.value,
                discount_type_id: form.value.discount_type_id
            },
            products: this.selectedClients,
        };
        this.service.sendMultiMessage1(data).subscribe((res:any) => {
            this.onNoClick();
            this.title = 'Операция успешна';
            this.message = 'Скидки назначены успешно!';
            this.openDialog();
        });
    }
}