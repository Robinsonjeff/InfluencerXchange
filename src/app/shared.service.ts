import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private loginCredentialsSource = new Subject<{ email: string; password: string }>();

  loginCredentials$ = this.loginCredentialsSource.asObservable();

  constructor() {}

  emitLoginCredentials(credentials: { email: string; password: string }) {
    this.loginCredentialsSource.next(credentials);
  }
}
