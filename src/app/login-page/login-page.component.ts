import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  
  @Output() onLogin = new EventEmitter<{email: string, password: string}>();
  
  
  constructor(private sharedService: SharedService) {}
  
  login(email: string, password: string) {
    this.sharedService.emitLoginCredentials({ email, password });
  }
  
}
