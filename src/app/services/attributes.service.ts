import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { HttpClient } from '../shared/http-client';

@Injectable({
  providedIn: 'root'
})
export class AttributesService {

  constructor(private http: HttpClient) { }

    //Users
    getAttributes(page, item_count, data, searcher) {
      return this.http.get(environment.base_url+`/attributes?page=${page}&count=${item_count}&column=${data.column}&value=${data.value}&searcher=${searcher}`).map(this.parseData);
    }

    getAttributesBySort(data, item_count) {
        return this.http.post(environment.base_url+`/attributes?count=${item_count}`, data, {headers: this.setHeaders()}).map(this.parseData);
    }

    // Create
    attributeForm() {
        return this.http.get(environment.base_url+`/attributes/create`).map(this.parseData);
    }

    setAttribute(data) {
        return this.http.post(environment.base_url+`/attributes/create`, data)
            .map((res: Response) => res.json())
            .catch(this.errorHandler);
    }

    //Update
    attributeUpdateForm(id) {
        return this.http.get(environment.base_url+`/attributes/update/${id}`).map(this.parseData);
    }

    updateAttribute(data) {
        return this.http.put(environment.base_url+`/attributes/update`, data)
            .map((res: Response) => res.json())
            .catch(this.errorHandler);
    }

    //Delete
    deleteAttribute(id) {
        return this.http.delete(environment.base_url+`/attributes/delete/${id}`, {headers: this.setHeaders()})
            .map((res: Response) => res.json())
            .catch(this.errorHandler);
    }

    setAttributeValue(data) {
        return this.http.post(environment.base_url+`/attributes/create-value`, data)
            .map((res: Response) => res.json())
            .catch(this.errorHandler);
    }

    updateAttributeValue(data) {
        return this.http.put(environment.base_url+`/attributes/update-value`, data)
            .map((res: Response) => res.json())
            .catch(this.errorHandler);
    }

    deleteAttributeValue(id) {
        return this.http.delete(environment.base_url+`/attributes/delete-value/${id}`, {headers: this.setHeaders()})
            .map((res: Response) => res.json())
            .catch(this.errorHandler);
    }

    setCategory(data) {
        return this.http.post(environment.base_url+`/attributes/set-category`, data)
            .map((res: Response) => res.json())
            .catch(this.errorHandler);
    }

    deleteCategory(data) {
        return this.http.post(environment.base_url+`/attributes/delete-category`, data, {headers: this.setHeaders()})
            .map((res: Response) => res.json())
            .catch(this.errorHandler);
    }

    getCategories(data) {
        return this.http.post(environment.base_url+`/attributes/get-categories`, data)
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
