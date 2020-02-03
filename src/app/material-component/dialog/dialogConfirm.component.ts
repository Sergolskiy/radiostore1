import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss']
})
export class DialogComponentConfirm {
    message: string;
    title: string;

    constructor(public dialog: MatDialog) {}

    openDialog(): void {
        let dialogRef = this.dialog.open(DialogOverviewExampleConfirmDialog, {
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
    selector: 'dialog-overview-example-confirm-dialog',
    template: `<h1 mat-dialog-title style="text-align: center">{{data.title}}</h1>
<div mat-dialog-content>
  <p style="text-align: center">{{data.message}}</p>
</div>
<div mat-dialog-actions style="display: flex; justify-content: center">
  <button mat-button [mat-dialog-close]="true" tabindex="2">Удалить</button>
  <button mat-button (click)="onNoClick()" tabindex="-1">Отменить</button>
</div>`
})
export class DialogOverviewExampleConfirmDialog {

    constructor(
        public dialogRef: MatDialogRef<DialogOverviewExampleConfirmDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    onNoClick() {
        this.dialogRef.close();
    }
}