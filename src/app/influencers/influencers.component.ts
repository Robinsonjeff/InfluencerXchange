import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-influencers',
  templateUrl: './influencers.component.html',
  styleUrls: ['./influencers.component.css']
})
export class InfluencersComponent {

  constructor(private sharedService: SharedService,private router: Router) {};

    allPosts: any = []

    ngOnInit(){
      this.sharedService.getPosts().subscribe((data) => {
          this.allPosts = data.posts;
          console.log(this.allPosts);

        }, (error) => {
          console.log(error);
        });
       
    }
 
  
  goToSocialSite(link:string){
    window.open(link);
  }
  goToAccountPage(){
    this.router.navigate(['/account']);
  }

}
