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
export class PagesService {

  constructor(private http: HttpClient) { }

    //Pages
    getPages(page, item_count, data) {
      return this.http.get(environment.base_url+`/pages?page=${page}&count=${item_count}&column=${data.column}&value=${data.value}`).map(this.parseData);
    }

    getPagesBySort(data, item_count) {
        return this.http.post(environment.base_url+`/pages?count=${item_count}`, data, {headers: this.setHeaders()}).map(this.parseData);
    }

    //Update
    pagesUpdateForm(id) {
        return this.http.get(environment.base_url+`/pages/update/${id}`).map(this.parseData);
    }

    updatePage(data) {
        return this.http.put(environment.base_url+`/pages/update`, data)
            .map((res: Response) => res.json())
            .catch(this.errorHandler);
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
