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
  
  
  
  constructor(private sharedService: SharedService,
    private snackBar: MatSnackBar,
    private router: Router) {}
  
  login(email: string, password: string) {
    console.log("here")
    const loginRes = this.sharedService.login({username:email,password:password}).subscribe(
      (response:any) => {
        console.log(response)
        this.sharedService.setLoggedInAccount(response);
        if(response.profile.accountType === 'Advertiser'){
          this.router.navigate(['/advertisers'])
        } else {
          this.router.navigate(['/influencers'])
          

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
