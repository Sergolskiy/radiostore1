import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { HttpClient } from '../shared/http-client';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

    //Users
    getCategories(page, item_count, data, search = '') {
      return this.http.get(environment.base_url+`/categories?page=${page}&count=${item_count}&column=${data.column}&value=${data.value}&searcher=${search}`).map(this.parseData);
    }

    uploadPhotoToCategory(data, slug) {
        return this.http.post(environment.base_url+`/categories/uploadPhoto/${slug}`, data, {headers: this.setHeaders()})
            .map((res: Response) => res.json())
            .catch(this.errorHandler);
    }

    getCategoriesBySort(data, item_count) {
        return this.http.post(environment.base_url+`/categories?count=${item_count}`, data, {headers: this.setHeaders()}).map(this.parseData);
    }

    //Create
    categoryForm() {
        return this.http.get(environment.base_url+`/categories/create`).map(this.parseData);
    }

    setCategory(data) {
        return this.http.post(environment.base_url+`/categories/create`, data, {headers: this.setHeaders()})
            .map((res: Response) => res.json())
            .catch(this.errorHandler);
    }

    //Update
    categoryUpdateForm(slug) {
        return this.http.get(environment.base_url+`/categories/update/${slug}`).map(this.parseData);
    }

    updateCategory(data) {
        return this.http.put(environment.base_url+`/categories/update`, data, {headers: this.setHeaders()})
            .map((res: Response) => res.json())
            .catch(this.errorHandler);
    }

    //Delete
    deleteCategory(slug) {
        return this.http.delete(environment.base_url+`/categories/delete/${slug}`, {headers: this.setHeaders()})
            .map((res: Response) => res.json())
            .catch(this.errorHandler);
    }

    setDiscount(data) {
        return this.http.post(environment.base_url+`/categories/set-discount`, data, {headers: this.setHeaders()})
            .map((res: Response) => res.json())
            .catch(this.errorHandler);
    }


    deleteDiscount(id) {
        return this.http.delete(environment.base_url+`/categories/delete-discount/${id}`)
            .map((res: Response) => res.json())
            .catch(this.errorHandler);
    }

    checkUniqueEmail(data, type) {
        return this.http.post(environment.base_url+`/categories/${type}/exists`, data, {headers: this.setHeaders()})
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
