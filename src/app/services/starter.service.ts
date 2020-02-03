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
export class StarterService {

  constructor(private http: HttpClient) { }
    getGraph(date) {
      return this.http.get(environment.base_url+`/pages/get-graphs?date=` + date)
          .map(this.parseData)
          .catch(this.errorHandler);
    }

    private parseData(res: Response){
        return res.json() || [];
    }

    private errorHandler(error: Response) {
        return Observable.throw(error.json());
    }
}
