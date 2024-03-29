import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  message: string;
  title: string;

  constructor(public dialog: MatDialog) {}

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

}

@Component({
  selector: 'dialog-overview-example-dialog',
  template: `<h1 mat-dialog-title style="text-align: center">{{data.title}}</h1>
<div mat-dialog-content>
  <p style="text-align: center">{{data.message}}</p>
</div>
<div mat-dialog-actions>
  <button mat-button [mat-dialog-close]="data.message" tabindex="2">Ok</button>
  <!--<button mat-button (click)="onNoClick()" tabindex="-1">No Thanks</button>-->
</div>`
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void { 
    this.dialogRef.close();
  }
}
