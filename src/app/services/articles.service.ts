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
export class ArticlesService {

  constructor(private http: HttpClient) { }

    //Users
    getArticles(page, item_count, data) {
      return this.http.get(environment.base_url+`/articles?page=${page}&count=${item_count}&column=${data.column}&value=${data.value}`).map(this.parseData);
    }

    getArticlesBySort(data, item_count) {
        return this.http.post(environment.base_url+`/articles?count=${item_count}`, data, {headers: this.setHeaders()}).map(this.parseData);
    }

    //Create
    // categoryForm() {
    //     return this.http.get(environment.base_url+`/categories/create`).map(this.parseData);
    // }

    setArticle(data) {
        return this.http.post(environment.base_url+`/articles/create`, data)
            .map((res: Response) => res.json())
            .catch(this.errorHandler);
    }

    //Update
    articleUpdateForm(slug) {
        return this.http.get(environment.base_url+`/articles/update/${slug}`).map(this.parseData);
    }

    updateArticle(data) {
        return this.http.post(environment.base_url+`/articles/update`, data)
            .map((res: Response) => res.json())
            .catch(this.errorHandler);
    }

    //Delete
    deleteArticle(slug) {
        return this.http.delete(environment.base_url+`/articles/delete/${slug}`, {headers: this.setHeaders()})
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
