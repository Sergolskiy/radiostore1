import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {NgForm} from "@angular/forms";
import {ProductService} from "../../services/product.service";
import {DialogOverviewExampleDialog} from "./dialog.component";

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss']
})
export class DialogComponentAttribute {
    message: string;
    title: string;

    constructor(public dialog: MatDialog) {}

    openDialog(): void {
        let dialogRef = this.dialog.open(DialogOverviewExampleAttributeDialog, {
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
    selector: 'dialog-overview-example-attribute-dialog',
    template: `<h1 mat-dialog-title style="text-align: center">{{data.title}}</h1>
    <form *ngIf="allAttributes.length;else withOutAllCharacteristics">
        <mat-form-field>
            <mat-select placeholder="Выберите атрибут">
                <mat-option *ngFor="let attribute of allAttributes" (click)="showValueAttribute(attribute)" [value]="attribute.id" required="required">
                    {{ attribute.title }}
                </mat-option>
            </mat-select>
        </mat-form-field>
        <mat-form-field *ngIf="showButton">
            <mat-select placeholder="Выберите значение атрибута">
                <mat-option *ngFor="let value of attributeValues" (click)="setValueAttribute(value)" [value]="value.id" required="required">
                    {{ value.value }}
                </mat-option>
            </mat-select>
        </mat-form-field>
        <div mat-dialog-actions style="display: flex; justify-content: center">
            <button mat-button color="primary" (click)="addAttributeToProduct()" tabindex="2">Добавить</button>
            <button mat-button (click)="onNoClick()" tabindex="-1">Отменить</button>
        </div>
    </form>
    <ng-template #withOutAllCharacteristics>
        Атрибутов нету, добавьте их!
        <div mat-dialog-actions style="display: flex; justify-content: center">
            <button mat-button (click)="onNoClick()" tabindex="-1">Отменить</button>
        </div>
    </ng-template>`
})
export class DialogOverviewExampleAttributeDialog {

    product: any;
    allAttributes: any;
    attributeValues: any;
    showButton: any;
    attributeValueId: any;
    title: any;
    message: any;

    constructor(
        private service: ProductService,
        public dialog: MatDialog,
        public dialogRef: MatDialogRef<DialogOverviewExampleAttributeDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
        this.showButton = false;
        this.allAttributes = data.allAttributes;
        this.product = data.product
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

    showValueAttribute(attribute) {
        this.attributeValues = attribute.values;
        this.showButton = true;
    }

    setValueAttribute(value) {
        this.attributeValueId = value.id
    }

    addAttributeToProduct() {
        let data = {
            attribute_id: [this.attributeValueId],
        };
        this.service.addAttributeToProduct(data, this.product.slug).subscribe((res:any) => {
            if(res.status){
                this.onNoClick();
                this.title = 'Операция успешная';
                this.message = 'Атрибут добавлен к товару';
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
}