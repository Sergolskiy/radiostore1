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
export class CommentsService {

  constructor(private http: HttpClient) { }

    //Users
    getComments(page, item_count, data) {
      return this.http.get(environment.base_url+`/comments?page=${page}&count=${item_count}&column=${data.column}&value=${data.value}`).map(this.parseData);
    }

    getCommentsBySort(data, item_count) {
        return this.http.post(environment.base_url+`/comments?count=${item_count}`, data, {headers: this.setHeaders()}).map(this.parseData);
    }

    updateComment(data) {
        return this.http.put(environment.base_url+`/comments/update-status`, data, {headers: this.setHeaders()})
            .map((res: Response) => res.json())
            .catch(this.errorHandler);
    }

    //Delete
    deleteComment(id) {
        return this.http.delete(environment.base_url+`/comments/delete/${id}`, {headers: this.setHeaders()})
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
