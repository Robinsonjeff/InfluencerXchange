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


    myPosts:any = []

    loading:boolean = true;

  constructor(private service: SharedService
    ,private router: Router){
    this.service.getLoggedInAccount().subscribe((account:any)=>{
      this.account  = account;
    })
 
  }

  ngOnInit(){
   
    if(this.account){
      console.log(this.account.profile.username);
      this.service.getPosts(undefined,this.account.profile.username).subscribe((posts)=>{
        this.myPosts = posts.posts 
        this.loading = false;     
      })
    } else {
      this.router.navigate(['']);
    }
  }



}
