import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-influencers',
  templateUrl: './influencers.component.html',
  styleUrls: ['./influencers.component.css']
})
export class InfluencersComponent {

  constructor(private sharedService: SharedService,
    private router: Router) {};

    allPosts: any = []

    ngOnInit(){
      if(this.sharedService.isLoggedInBool == false){
        this.router.navigate(['']);
      }
      //getting posts for Advertisers to see
      this.sharedService.getPosts('Advertiser').subscribe((data) => {
          this.allPosts = data.posts;
        }, (error) => {
          console.log(error);
        });
       
    }
 
  goToSocialSite(link:string){
    window.open(link)
  }

}
