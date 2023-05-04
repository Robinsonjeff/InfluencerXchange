import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent {
  username: string = "";

  myPosts:any = []

  loading:boolean = true;


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


  constructor(private route: ActivatedRoute, private service: SharedService) {
    
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.username = params.get('username')!;
      // Fetch and display the user's profile information using this.username
    });

    this.service.getPosts(undefined,this.username).subscribe((posts)=> {
      this.loading = false;
      this.myPosts = posts.posts;
    })
  }
}
