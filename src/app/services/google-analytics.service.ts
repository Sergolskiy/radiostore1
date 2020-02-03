import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Headers, Response} from '@angular/http';
import { HttpClient } from '../shared/http-client';

@Injectable({
    providedIn: 'root'
})

export class GoogleAnalyticsService {

    constructor(private http: HttpClient) {
    }

//    GoogleAnalytics
    getAnalytics(period) {
        console.log(period);
        return this.http.get(environment.base_url + `/google-analytics?period=${period}`).map(this.parseData);
    }

    // getAnalytics() {
    //     return this.http.get(environment.base_url + `/google-analytics`).map(this.parseData);
    // }

    private parseData(res: Response){
        return res.json() || [];
    }
}
