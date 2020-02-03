import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Headers, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { HttpClient } from '../shared/http-client';


@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  constructor(private http: HttpClient) {
  }

  getStatus() {
    return this.http.get(environment.base_url+`/settings/import-prom`).map(this.parseData);
  }

    cacheClear() {
      return this.http.get(environment.base_url+`/settings/cache-clear`).map(this.parseData);
    }

    getProductsExcel() {
        return this.http.get(environment.base_url+`/settings/export_excel/excel`).map(this.parseData);
    }

    getAttributeExcel() {
        return this.http.get(environment.base_url+`/settings/export_excel/excelAttr`).map(this.parseData);
    }

    uploadPromFile(data) {
      return this.http.post(environment.base_url+`/settings/import-prom`, data).map(this.parseData);
    }

  uploadAttributeFile(data) {
    return this.http.post(environment.base_url+`/settings/import-attributes`, data).map(this.parseData);
  }

    private setHeaders(){
        let headers = new Headers();
        headers.append("Content-Type", "application/json" );
        return headers;
    }

    private parseData(res: Response){
        return res.json() || [];
    }

    private errorHandler(error: Response) {
        return Observable.throw(error.json());
    }
}
