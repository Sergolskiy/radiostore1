import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Headers, Response} from '@angular/http';
import { HttpClient } from '../shared/http-client';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class StatisticsService {

  constructor(private http: HttpClient) {
  }

  getStatistics(date_from, date_to) {
    return this.http.get(environment.base_url + `/statistics`).map(this.parseData);
  }

  statisticsSetPeriod(date_from, date_to) {
    return this.http.post(environment.base_url+`/statistics/period/${date_from}/${date_to}`, [], {headers: this.setHeaders()}).map(this.parseData).catch(this.errorHandler);
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
