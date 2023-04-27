import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SharedService {


  constructor(private http: HttpClient) {}

  private baseUrl = 'https://crypto-prices-api-production.up.railway.app';

  private loggedInAccountSubject = new BehaviorSubject<any>(null);
  
  loggedInAccount$ = this.loggedInAccountSubject.asObservable();

  register(userData: {
    username: string;
    password: string;
    phoneNumber: string;
    accountType: string;
    firstName: string;
    lastName: string;
    email: string;
    age:number;
    }): Observable<any> {
      return this.http.post(`${this.baseUrl}/register`, userData);
    
  }

  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }

  setLoggedInAccount(account:any){
    this.loggedInAccountSubject.next(account);
  }

  getLoggedInAccount(): Observable<any>{
    return this.loggedInAccountSubject.asObservable();
  }

 

}
