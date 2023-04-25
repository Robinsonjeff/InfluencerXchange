import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  
  
  
  constructor(private sharedService: SharedService, private router: Router) {}
  
  login(email: string, password: string) {
  }

  goToSignUp(){
    this.router.navigate(['/signup']);
  }
  
}
