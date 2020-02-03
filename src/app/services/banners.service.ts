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
export class BannersService {

  constructor(private http: HttpClient) { }

    //Banners
    getBanners(page, item_count, data) {
      return this.http.get(environment.base_url+`/banners?page=${page}&count=${item_count}&column=${data.column}&value=${data.value}`).map(this.parseData);
    }

    getBannersBySort(data, item_count) {
        return this.http.post(environment.base_url+`/banners?count=${item_count}`, data, {headers: this.setHeaders()}).map(this.parseData);
    }

    setBanner(data) {
        return this.http.post(environment.base_url+`/banners/create`, data)
            .map((res: Response) => res.json())
            .catch(this.errorHandler);
    }

    //Update
    bannerUpdateForm(id) {
        return this.http.get(environment.base_url+`/banners/update/${id}`).map(this.parseData);
    }

    updateBanner(data) {
        return this.http.post(environment.base_url+`/banners/update`, data)
            .map((res: Response) => res.json())
            .catch(this.errorHandler);
    }

    //Delete
    deleteBanner(id) {
        return this.http.delete(environment.base_url+`/banners/delete/${id}`, {headers: this.setHeaders()})
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
