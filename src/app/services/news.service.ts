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
export class NewsService {

  constructor(private http: HttpClient) { }

    //Users
    getNews(page, item_count, data) {
      return this.http.get(environment.base_url+`/news?page=${page}&count=${item_count}&column=${data.column}&value=${data.value}`).map(this.parseData);
    }

    getNewsBySort(data, item_count) {
        return this.http.post(environment.base_url+`/news?count=${item_count}`, data, {headers: this.setHeaders()}).map(this.parseData);
    }

    setNews(data) {
        return this.http.post(environment.base_url+`/news/create`, data)
            .map((res: Response) => res.json())
            .catch(this.errorHandler);
    }

    //Update
    newsUpdateForm(slug) {
        return this.http.get(environment.base_url+`/news/update/${slug}`).map(this.parseData);
    }

    updateNews(data) {
        return this.http.post(environment.base_url+`/news/update`, data)
            .map((res: Response) => res.json())
            .catch(this.errorHandler);
    }

    //Delete
    deleteNews(slug) {
        return this.http.delete(environment.base_url+`/news/delete/${slug}`, {headers: this.setHeaders()})
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
