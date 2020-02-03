import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";
import {MatDialog, MatTableDataSource, PageEvent} from "@angular/material";
import { Router } from "@angular/router";
import {NewsService} from "../../services/news.service";
import {ArticlesService} from "../../services/articles.service";
import {SettingsService} from "../../services/settings.service";
import {DialogOverviewExampleDialog} from "../dialog/dialog.component";
import {environment} from "../../../environments/environment";


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

    message: string;
    title: string;

    prom_file: any = null;
    processing: boolean = false;

    attribute_file: any = null;

    product_excel_link = environment.base_url+`/settings/export_excel/excel`;
    attribute_excel_link =  environment.base_url+`/settings/export_excel/excelAttr`;

    constructor(private service: SettingsService, private router: Router, public dialog: MatDialog) {
      this.getStatus();
    }

    getStatus()
    {
      this.service.getStatus().subscribe((res:any) => {
        if(res) {
          this.processing = res.processing;
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

    cacheClear() {
        this.service.cacheClear().subscribe((res:any) => {
            if(res.status) {
                this.title = 'Операция успешна';
                this.message = 'Кеш очищен';
                this.openDialog();
            }
        });
    }

    getProductsExcel() {
        this.service.getProductsExcel().subscribe((res:any) => {
            if(res.status) {
                this.title = 'Операция успешна';
                this.message = 'файл отправлен';
                this.openDialog();
            }
        });
    }

    getAttributeExcel() {
        this.service.getAttributeExcel().subscribe((res:any) => {
            if(res.status) {
                this.title = 'Операция успешна';
                this.message = 'файл отправлен';
                this.openDialog();
            }
        });
    }

    setPromFile(event) {
        this.prom_file = event.target.files[0];
    }

    uploadPromFile() {

        let formData: FormData = new FormData();
        formData.append('file', this.prom_file);

        this.service.uploadPromFile(formData).subscribe((res:any) => {
            if(res.success) {
              this.processing = true;
                this.title = 'Импорт запущен';
                this.message = 'Импорт поставлен в очередь на выполнение';
                this.openDialog();
            }
        });
    }

    setAttributeFile(event) {
      this.attribute_file = event.target.files[0];
    }

    uploadAttributeFile()
    {
      let formData: FormData = new FormData();
      formData.append('file', this.attribute_file);

      this.service.uploadAttributeFile(formData).subscribe((res:any) => {
        if(res.success) {
          this.title = 'Импорт успешно завершен';
          this.message = 'Импорт атрибутов успешно завершен.';
          this.openDialog();
        }
      });
    }
}
