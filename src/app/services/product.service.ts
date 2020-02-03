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
export class ProductService {

  constructor(private http: HttpClient) { }

    //Products
    getProducts(page, item_count, data, searcher, filterType = null) {
      let parameters = '';
      console.log(filterType);
      if (filterType != null) {
          if (filterType.hasOwnProperty('category')) {
              filterType.category.map(function (el) {
                  parameters += `&category[]=${el}`
              })
          }
          if (filterType.hasOwnProperty('discount')) {
              parameters += `&discount[]=${filterType.discount}`
          }
          if (filterType.hasOwnProperty('price')) {
              parameters += `&price[]=${filterType.price}`
          }
          if (filterType.hasOwnProperty('quantity')) {
              parameters += `&quantity[]=${filterType.quantity}`
          }
      }
      return this.http.get(environment.base_url+`/products?page=${page}&count=${item_count}&column=${data.column}&value=${data.value}&searcher=${searcher}${parameters}`).map(this.parseData);
    }

    //Create
    productForm() {
        return this.http.get(environment.base_url+`/products/create`).map(this.parseData);
    }

    setProduct(data) {
        return this.http.post(environment.base_url+`/products/create`, data)
            .map((res: Response) => res.json())
            .catch(this.errorHandler);
    }

    uploadPdf(data) {
        return this.http.post(environment.base_url+`/products/upload-pdf`, data)
            .map((res: Response) => res.json())
            .catch(this.errorHandler);
    }

    sendMultiMessage1(data) {
        return this.http.post(environment.base_url+`/products/update/multiple`, data, {headers: this.setHeaders()}).map(this.parseData).catch(this.errorHandler);
    }

    //Add
    addAttributeToProduct(data, slug) {
        return this.http.post(environment.base_url+`/products/update/attributes/${slug}`, data, {headers: this.setHeaders()}).map(this.parseData).catch(this.errorHandler);
    }

    getProductAttributes(slug) {
        return this.http.post(environment.base_url+`/products/attributes/${slug}`, {headers: this.setHeaders()}).map(this.parseData).catch(this.errorHandler);
    }

    getProductCharacterictic(slug) {
        return this.http.post(environment.base_url+`/products/characterictic/${slug}`, {headers: this.setHeaders()}).map(this.parseData).catch(this.errorHandler);
    }

    //Update
    productUpdateForm(slug) {
        return this.http.get(environment.base_url+`/products/update/${slug}`).map(this.parseData);
    }

    updateProduct(data) {
        return this.http.post(environment.base_url+`/products/update`, data)
            .map((res: Response) => res.json())
            .catch(this.errorHandler);
    }

    //Delete
    deleteAttributeFromProduct(data, slug) {
        return this.http.post(environment.base_url+`/products/delete/attributes/${slug}`, data, {headers: this.setHeaders()})
            .map((res: Response) => res.json())
            .catch(this.errorHandler);
    }

    deleteProduct(slug) {
        return this.http.delete(environment.base_url+`/products/delete/${slug}`, {headers: this.setHeaders()})
            .map((res: Response) => res.json())
            .catch(this.errorHandler);
    }

    restoreProduct(slug) {
        return this.http.delete(environment.base_url+`/products/restore/${slug}`, {headers: this.setHeaders()})
            .map((res: Response) => res.json())
            .catch(this.errorHandler);
    }


    deleteImage(data) {
        return this.http.post(environment.base_url+`/products/delete-image`, data, {headers: this.setHeaders()})
            .map((res: Response) => res.json())
            .catch(this.errorHandler);
    }

    togetherCheaper(data) {
        return this.http.post(environment.base_url+`/products/add-together-cheaper-product`, data, {headers: this.setHeaders()})
            .map((res: Response) => res.json())
            .catch(this.errorHandler);
    }

    togetherCheaperDelete(data) {
        return this.http.post(environment.base_url+`/products/delete-together-cheaper-product`, data, {headers: this.setHeaders()})
            .map((res: Response) => res.json())
            .catch(this.errorHandler);
    }

    setDiscount(data) {
        return this.http.post(environment.base_url+`/products/set-discount`, data, {headers: this.setHeaders()})
            .map((res: Response) => res.json())
            .catch(this.errorHandler);
    }

    setAnalog(data) {
        return this.http.post(environment.base_url+`/products/set-analog`, data, {headers: this.setHeaders()})
            .map((res: Response) => res.json())
            .catch(this.errorHandler);
    }

    deleteAnalog(data) {
        return this.http.post(environment.base_url+`/products/delete-analog`, data, {headers: this.setHeaders()})
            .map((res: Response) => res.json())
            .catch(this.errorHandler);
    }


    deleteDiscount(id) {
        return this.http.delete(environment.base_url+`/products/delete-discount/${id}`)
            .map((res: Response) => res.json())
            .catch(this.errorHandler);
    }

    setPrice(data) {
        return this.http.post(environment.base_url+`/products/price/create`, data, {headers: this.setHeaders()})
            .map((res: Response) => res.json())
            .catch(this.errorHandler);
    }

    setQuantity(data) {
        return this.http.post(environment.base_url+`/products/quantity/create`, data, {headers: this.setHeaders()})
            .map((res: Response) => res.json())
            .catch(this.errorHandler);
    }

    updatePrice(data) {
        return this.http.put(environment.base_url+`/products/price/update`, data, {headers: this.setHeaders()})
            .map((res: Response) => res.json())
            .catch(this.errorHandler);
    }

    updateQuantity(data) {
        return this.http.put(environment.base_url+`/products/quantity/update`, data, {headers: this.setHeaders()})
            .map((res: Response) => res.json())
            .catch(this.errorHandler);
    }

    deletePrice(id) {
        return this.http.delete(environment.base_url+`/products/price/delete/${id}`)
            .map((res: Response) => res.json())
            .catch(this.errorHandler);
    }

    deleteQuantity(id) {
        return this.http.delete(environment.base_url+`/products/quantity/delete/${id}`)
            .map((res: Response) => res.json())
            .catch(this.errorHandler);
    }

    checkUnique(data, type) {
        return this.http.post(environment.base_url+`/products/${type}/exists`, data, {headers: this.setHeaders()})
            .map((res: Response) => res.json())
            .catch(this.errorHandler);
    }

    getAttributes(id) {
        return this.http.get(environment.base_url+`/products/get-attributes/${id}`).map(this.parseData);
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
