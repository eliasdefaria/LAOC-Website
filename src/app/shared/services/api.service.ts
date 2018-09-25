import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient
  ) {}

  // setting headers on every http call
  private setHeaders(image:boolean = false): HttpHeaders {
    const headersConfig = {
      'Accept': 'application/json'
    };
    if (!image) {
      headersConfig['Content-Type'] = 'application/json';
    }

    return new HttpHeaders(headersConfig);
  }

  private formatErrors(error: any) {
     return Observable.throw(error);
  }

  // http post method for saving data
  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${environment.api_url}${path}`,
      JSON.stringify(body),
      { headers: this.setHeaders() }
    )
    .catch(this.formatErrors);
  }

}
