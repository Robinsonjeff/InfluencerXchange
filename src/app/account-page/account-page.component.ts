import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})
export class AccountPageComponent {

    account = {
      profile:{
        username:"",
        accountType:"",
        email:"",
        age:0,
        firstName:"",
        lastName:"",
        phoneNumber:0
      }
    }

  constructor(private service: SharedService
    ,private router: Router){
    this.service.getLoggedInAccount().subscribe((account:any)=>{
      this.account  = account;
      console.log(this.account)
    })
  }

  ngOnInit(){
    if(this.account){

    } else {
      this.router.navigate(['']);
    }
  }



}
