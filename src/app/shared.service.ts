import { HttpClient } from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SharedService {


  allPosts: any = [];
  

  constructor(private http: HttpClient) {}

  private baseUrl = 'https://crypto-prices-api-production.up.railway.app';

  private loggedInAccountSubject = new BehaviorSubject<any>(null);
  
  loggedInAccount$ = this.loggedInAccountSubject.asObservable();

  isLoggedInBool:boolean = false;

  

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
    this.isLoggedInBool = true;
    this.loggedInAccountSubject.next(account);
  }

  isLoggedIn(){
  }

  getLoggedInAccount(): Observable<any>{
    return this.loggedInAccountSubject.asObservable();
  }


  createPost(post:any) {
    return this.http.post(`${this.baseUrl}/createPost`, post);
  }

  getPosts(accountType?:string,username?:string): Observable<any>{
    if(username){
      return this.http.get(`${this.baseUrl}/getPosts?accountType=${accountType}`)

    } else {
      return this.http.get(`${this.baseUrl}/getPosts?accountType=${accountType}&username=${username}`)
    }
  }
  



}
