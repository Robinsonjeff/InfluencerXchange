import { Component } from '@angular/core';
import { SharedService } from './shared.service';
import { LoginPageComponent } from './login-page/login-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InfluencerXchange';

  constructor(private sharedService: SharedService) {
    this.sharedService.loginCredentials$.subscribe((credentials) => {
      this.login(credentials);
    });
  }
  //get from mongoDB
 
  checkValidLogin()
  {

  }


  checkAgainstDB()
  {

  }

  login(loginCredentials:any)
  {
    console.log(loginCredentials)
  }
}
