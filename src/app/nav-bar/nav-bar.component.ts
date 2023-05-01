import { Component, NgModule, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { MatSidenav } from '@angular/material/sidenav';
import { MatDialog } from '@angular/material/dialog';
import { AddPostDialogComponent } from '../add-post-dialog/add-post-dialog.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent {
  activeAccount = "";
  activeAccountType = "";
  gravatarUrl= "";
  gravatarUrlStart = 'https://www.gravatar.com/avatar/';
  gravatarUrlEnd ='?s=50&d=identicon&r=PG';

  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav | undefined;




  constructor(private sharedService: SharedService,
    private snackBar: MatSnackBar,
    private router: Router,
    private dialog: MatDialog) {
      
    }


  ngOnInit(){
    this.sharedService.getLoggedInAccount().subscribe(
      (response) =>{
        if(response){
         this.activeAccount = response.profile.firstName;
         this.activeAccountType = response.profile.accountType;
         this.gravatarUrl = this.gravatarUrlStart + response.profile.username + this.gravatarUrlEnd;
        }
      },(error) => {
        console.error("Error subscribing to getLoggedInAccount():", error);
      },
      () => {
        console.log("Subscription to getLoggedInAccount() completed.");
      }
    )
  }
  
  openAddPostDialog(){
    const dialogRef = this.dialog.open(AddPostDialogComponent);
  }


  logout(){
    this.sharedService.setLoggedInAccount({});
    this.activeAccount = "";
    this.activeAccountType = "";
    this.sidenav?.toggle();
    this.router.navigate(['']);
  }
}
