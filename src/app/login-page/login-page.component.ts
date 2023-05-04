import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  
  loadingLogin: boolean = false;
  
  constructor(private sharedService: SharedService,
    private snackBar: MatSnackBar,
    private router: Router) {}
  
  login(email: string, password: string) {
    this.loadingLogin = true;

    const loginRes = this.sharedService.login({username:email,password:password}).subscribe(
      (response:any) => {

        this.sharedService.setLoggedInAccount(response);
        
        this.loadingLogin = false;

        console.log(response)
        
        if(response.profile.accountType === 'Advertiser'){
          this.router.navigate(['/influencers'])
        } else {
          this.router.navigate(['/advertisers'])

        }

        this.snackBar.open(
          `Login Successful, welcome ${response.profile.firstName}!`,
          'Close',
          {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          }
        );

      },(error) => {
        this.snackBar.open(
          `Error during login: ${error.message}`,
          'Close',
          {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          }
        );
      }
    )

  }

  goToSignUp(){
    this.router.navigate(['/signup']);
  }

  
  
}
