import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

export interface xDATA {
  id: number
  firstName: string
  lastName: string
  emailID: string
  phoneNumber: number
  isPrimary: boolean
}
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  xgetDataUrl = 'http://localhost:8080/getform';
  xpostDataUrl = 'http://localhost:8080/updateform';

  xData: xDATA;

  getxDataResponse(): Observable<HttpResponse<xDATA>> {
    return this.http.get<xDATA>(
      this.xgetDataUrl, { observe: 'response' });
  }

  postxDataRequest() {
    return this.http.post(
      this.xpostDataUrl, httpOptions);
  }

}
