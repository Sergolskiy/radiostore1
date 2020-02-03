import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, RequestOptionsArgs, Response} from '@angular/http';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable()
export class HttpClient {

    constructor(private http: Http) {}

    enableCorsOption(headers: Headers) {
        if(environment.cors) {
            return new RequestOptions({headers: headers, withCredentials: true});
        } else {
            return new RequestOptions({headers: headers});
        }
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        let headers = options ? options.headers : new Headers();
        let RequestOptions = this.enableCorsOption(headers);
        return this.http.get(url, RequestOptions);
    }

    post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        let headers = options ? options.headers : new Headers();
        let RequestOptions = this.enableCorsOption(headers);
        return this.http.post(url, body, RequestOptions);
    }

    put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        let headers = options ? options.headers : new Headers();
        let RequestOptions = this.enableCorsOption(headers);
        return this.http.put(url, body, RequestOptions);
    }

    delete(url: string, options?: RequestOptionsArgs) : Observable<Response> {
        let headers = options ? options.headers : new Headers();
        let RequestOptions = this.enableCorsOption(headers);
        return this.http.delete(url, RequestOptions);
    }
}