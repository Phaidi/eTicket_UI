/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {User} from '../models/user';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
import { map } from 'rxjs/internal/operators/map';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  URL = `http://localhost:7000`;


  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {

    let errors = [{ status: 'Error', message: ' Ooops, someting went wrong!' }];
    let msg = ' Ooops, someting went wrong!';
    if (error.status === 0) {
    } else {

      msg = error.error.message ? error.error.message:error.error.text;
        errors = error.error;
    }
    return throwError(errors);
  }

  signUp(data: User): Observable<User> {
    return this.http
    .post<User>(`${this.URL}/registration`, data)
    .pipe(map(data => {
      console.log('Im in sign up API: ', data);

      return data;
    }), catchError(this.handleError));

  };

  login(): Observable<User> {
    return this.http.get<User>(`${this.URL}/login`);
  }
}
