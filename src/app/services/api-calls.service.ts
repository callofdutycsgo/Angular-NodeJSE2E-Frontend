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
  firstName: string
  lastName: string
  emailID: string
  phoneNumber: number
}
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  xDataUrl = 'http://localhost:8080/form';
  xData: xDATA;

  getxDataResponse(): Observable<HttpResponse<xDATA>> {
    return this.http.get<xDATA>(
      this.xDataUrl, { observe: 'response' });
  }


}
