import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormControl, FormGroup} from "@angular/forms";
import { OrderService } from "../../services/orders.service";
import {DialogOverviewExampleDialog} from "./dialog.component";

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss']
})
export class DialogComponentMultiple {
    message: string;
    title: string;

    constructor(public dialog: MatDialog) {}

    openDialog(): void {
        let dialogRef = this.dialog.open(DialogOverviewExampleMultipleDialog, {
            width: '1000px',
            data: { title: this.title, message: this.message }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.message = result;
        });
    }
}

@Component({
    selector: 'dialog-overview-example-multiple-dialog',
    template: `<form [formGroup]="phoneForm" novalidate  (ngSubmit)="sendMultiMessage()">
      <mat-form-field>
        <mat-select placeholder="Отправка" name="status_id_1" formControlName="status_id_1">
          <mat-option *ngFor="let type of messagesTypes" value="{{ type.value }}" (click)="setDescriptionOnTextarea(type)">{{ type.text }}</mat-option>
        </mat-select>
      </mat-form-field>
      <br>
      <mat-form-field>
        <mat-label>Текст сообщения</mat-label>
        <textarea matInput formControlName="messageType" matTextareaAutosize matAutosizeMinRows=1 matAutosizeMaxRows=11></textarea>
      </mat-form-field>
      <br>
      <button type="submit" mat-raised-button color="primary">Отправить</button>
    </form>
    <button mat-button color="danger" (click)="onNoClick()" tabindex="-1">Отменить</button>`
})
export class DialogOverviewExampleMultipleDialog {

    selectedClients: any = [];
    message: string;
    title: string;
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
    templatesMessages: any = null;

    phoneForm: FormGroup;

    constructor(
        public dialogRef: MatDialogRef<DialogOverviewExampleMultipleDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private service: OrderService,
        public dialog: MatDialog) {
        this.phoneForm = new FormGroup({
            "send_type" : new FormControl(0, []),
            "status_id_1" : new FormControl(0, []),
            "messageType" : new FormControl(0, []),
        });

        this.templatesMessages = data.templatesMessages;
        console.log(this.messagesTypes);
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

    sendMultiMessage() {
        var selected = document.querySelectorAll('*[name*="client_"]:checked');
        if(selected.length == 0) {
            alert("Выберите хотя бы одного клиента");
            return;
        }
        this.selectedClients = [];
        for(var i = 0; i < selected.length; i++) {
            this.selectedClients.push(selected[i].attributes.getNamedItem('name').value.replace('client_', ''));

        }
        let keySendType = `send_${this.phoneForm.controls.status_id_1.value}`;
        let data = {
            orders: this.selectedClients,
            [keySendType]: true,
            message: this.phoneForm.controls['messageType'].value,
        };

        this.service.sendMultiMessage(data).subscribe((res:any) => {
            this.onNoClick();
            this.title = 'Операция успешна';
            this.message = 'Сообщения доставлены успешно!';
            this.openDialog();
        },(error) => {
            console.log(error.errors);
            for (let key in error.errors) {
                this.phoneForm.controls[key].setErrors({server_error: error.errors[key][0]});
            }
        });
    }

    setDescriptionOnTextarea(type){
        if (typeof type === 'object' && type !== null) {
            let self = this;
            this.templatesMessages.filter(function (el) {
                if(el.template_type_id == type.id){
                    self.phoneForm.patchValue({'messageType': el.description});
                }
                return true;
            });
        } else {
            this.phoneForm.controls['messageType'].reset();
        }
    }
}