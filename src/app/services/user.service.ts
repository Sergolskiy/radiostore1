import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Headers, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { HttpClient } from '../shared/http-client'


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

    getAdmin() {
        return this.http.get(environment.domain_url+`/check-admin`).map(this.parseData);
    }

    //Users
    getUsers(page, item_count, data, searcher, filterByParams) {
      let filterParameters = '';
      if(typeof filterByParams !== 'undefined' && Object.keys(filterByParams).length ) {
          Object.keys(filterByParams).forEach(function(value) {
              filterParameters += `&filterByParams[${value}][]=` + filterByParams[value].join(`&filterByParams[${value}][]=`);
          });
      }
      console.log(1, filterParameters, filterByParams);
      return this.http.get(environment.base_url+`/users?page=${page}&count=${item_count}&column=${data.column}&value=${data.value}&searcher=${searcher}${filterParameters}`).map(this.parseData);
    }

    getUsersBySort(data, item_count) {
        return this.http.post(environment.base_url+`/users?count=${item_count}`, data, {headers: this.setHeaders()}).map(this.parseData);
    }

    //Create
    userForm() {
        return this.http.get(environment.base_url+`/users/create`).map(this.parseData);
    }

    setUser(data) {
        return this.http.post(environment.base_url+`/users/create`, data, {headers: this.setHeaders()})
            .map((res: Response) => res.json())
            .catch(this.errorHandler);
    }

  setTags(data) {
    return this.http.post(environment.base_url+`/users/create/tag/`, data, {headers: this.setHeaders()})
      .map((res: Response) => res.json())
      .catch(this.errorHandler);
  }

  updateUserTag(data) {
      return this.http.post(environment.base_url+`/users/apply/tags`, data, {headers: this.setHeaders()})
  }

    //Update
    userUpdateForm(id) {
        return this.http.get(environment.base_url+`/users/update/${id}`).map(this.parseData);
    }

    updateUser(data) {
        return this.http.put(environment.base_url+`/users/update`, data, {headers: this.setHeaders()})
            .map((res: Response) => res.json())
            .catch(this.errorHandler);
    }

    //Delete
    deleteUser(id) {
        return this.http.delete(environment.base_url+`/users/delete/${id}`, {headers: this.setHeaders()})
            .map((res: Response) => res.json())
            .catch(this.errorHandler);
    }

    checkUniqueEmail(data, type) {
        return this.http.post(environment.base_url+`/users/${type}/exists`, data, {headers: this.setHeaders()})
            .map((res: Response) => res.json())
            .catch(this.errorHandler);
    }

    checkUniqueTag(data) {
        return this.http.post(environment.base_url+`/users/tag/exists`, data, {headers: this.setHeaders()})
            .map((res: Response) => res.json())
            .catch(this.errorHandler);
    }

    createNewTag(data) {
        return this.http.post(environment.base_url+`/users/create/tag`, data, {headers: this.setHeaders()})
            .map((res: Response) => res.json())
            .catch(this.errorHandler);
    }

    deleteTagUser(data) {
        return this.http.post(environment.base_url+`/users/delete/tag`, data, {headers: this.setHeaders()})
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
