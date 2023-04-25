import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SharedService {


  constructor(private http: HttpClient) {}

  private baseUrl = 'http://localhost:3000';

  register(userData: {
    username: string;
    password: string;
    phoneNumber: string;
    accountType: string;
    firstName: string;
    lastName: string;
    email: string;
    }): Observable<any> {
      return this.http.post(`${this.baseUrl}/register`, userData);
    }

  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }

 

}
