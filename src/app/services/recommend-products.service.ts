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
export class RecommendProductsService {

  constructor(private http: HttpClient) { }

    //Recommend Products
    getRecommendProducts() {
      return this.http.get(environment.base_url+`/recommend-products`).map(this.parseData);
    }

    //Set product
    setRecommendProduct(data) {
        return this.http.post(environment.base_url+`/recommend-products/store`, data, {headers: this.setHeaders()}).map(this.parseData);
    }

    //Delete
    deleteRecommendProduct(slug) {
        return this.http.delete(environment.base_url+`/recommend-products/delete/${slug}`, {headers: this.setHeaders()})
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
