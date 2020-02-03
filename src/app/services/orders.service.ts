import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {HttpClient} from '../shared/http-client';


@Injectable({
    providedIn: 'root'
})
export class OrderService {

    constructor(private http: HttpClient) {
    }

    //Orders
    getOrders(page, item_count, data, searcher, filter) {
        return this.http.get(environment.base_url + `/orders?page=${page}&count=${item_count}&column=${data.column}&value=${data.value}&searcher=${searcher}&filter=${filter}`).map(this.parseData);
    }

    getUsersBySort(data, item_count) {
        return this.http.post(environment.base_url + `/orders?count=${item_count}`, data, {headers: this.setHeaders()}).map(this.parseData);
    }

    //Create
    userForm() {
        return this.http.get(environment.base_url + `/orders/create`).map(this.parseData);
    }

    setUser(data) {
        return this.http.post(environment.base_url + `/orders/create`, data, {headers: this.setHeaders()})
            .map((res: Response) => res.json())
            .catch(this.errorHandler);
    }

    //Update
    userUpdateForm(id) {
        return this.http.get(environment.base_url + `/orders/update/${id}`).map(this.parseData);
    }

    updateOrder(data) {
        return this.http.put(environment.base_url + `/orders/update`, data, {headers: this.setHeaders()})
            .map((res: Response) => res.json())
            .catch(this.errorHandler);
    }

    //Delete
    deleteProduct(id) {
        return this.http.delete(environment.base_url + `/orders/delete/${id}`, {headers: this.setHeaders()})
            .map((res: Response) => res.json())
            .catch(this.errorHandler);
    }

    checkUniqueEmail(data, type) {
        return this.http.post(environment.base_url + `/users/${type}/exists`, data, {headers: this.setHeaders()})
            .map((res: Response) => res.json())
            .catch(this.errorHandler);
    }

    getProducts(value) {
        return this.http.get(environment.domain_url + `/search-by-string?search_string=${value}&count=5`).map(this.parseData);
    }

    addProduct(obj, id) {
        return this.http.post(`${environment.base_url}/orders/add-product/${id}`, JSON.stringify(obj), {headers: this.setHeaders()}).map(this.parseData);
    }

    statusConfirm(id) {
        return this.http.get(environment.base_url + `/orders/privat-confirm/${id}`).map(this.parseData);
    }

    statusCancel(id) {
        return this.http.get(environment.base_url + `/orders/privat-cancel/${id}`).map(this.parseData);
    }

    getSenders() {
        return this.http.get(environment.base_url + `/orders/get-senders`).map(this.parseData);
    }

    getCitys(data) {
        return this.http.post(environment.domain_url + `/delivery-types/places`, data, {headers: this.setHeaders()})
            .map((res: Response) => res.json())
            .catch(this.errorHandler);
    }

    getAddresses(data) {
        return this.http.post(environment.domain_url + `/delivery-types/offices`, data, {headers: this.setHeaders()})
            .map((res: Response) => res.json())
            .catch(this.errorHandler);
    }

    setTTN(order_id, data) {
        return this.http.post(environment.base_url + `/orders/${order_id}/create-ttn`, data, {headers: this.setHeaders()}).map(this.parseData);
    }

    sendMessage(order_id, data) {
        return this.http.post(environment.domain_url + `/phone/${order_id}`, data, {headers: this.setHeaders()}).map(this.parseData);
    }

    sendMultiMessage(data) {
        return this.http.post(environment.base_url + `/orders/send/messages`, data, {headers: this.setHeaders()}).map(this.parseData).catch(this.errorHandler);
    }

    sendMultiMessage1(data) {
        return this.http.put(environment.base_url + `/orders/update/orders`, data, {headers: this.setHeaders()}).map(this.parseData).catch(this.errorHandler);
    }

    updateOrderStatus(order_id, data) {
        return this.http.put(environment.base_url + `/orders/update/status/${order_id}`, data, {headers: this.setHeaders()}).map(this.parseData).catch(this.errorHandler);
    }

    private setHeaders() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return headers;
    }

    private parseData(res: Response) {
        return res.json() || [];
    }

    private errorHandler(error: Response) {
        console.error('orders', error);
        return Observable.throw(error.json());
    }
}
