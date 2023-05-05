import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advertisers',
  templateUrl: './advertisers.component.html',
  styleUrls: ['./advertisers.component.css']
})
export class AdvertisersComponent {
  constructor(private sharedService: SharedService,
    private router: Router) {};

  allPosts: any = []

  ngOnInit(){
    if(this.sharedService.isLoggedInBool == false){
      this.router.navigate(['']);
    }
    //getting posts for Influencer to see
    this.sharedService.getPosts('Influencer').subscribe((data) => {
        this.allPosts = data.posts;
      }, (error) => {
        console.log(error);
      });
     
  }
  visitAccount(username:string){
    this.router.navigate([username]);
  }
 
// influencers = [
//   {
//     name:"Crob",
//     postPrice: 300,
//     targetAudience:"Gamers",
//     socialMediaLink:"https://twitter.com/MrBeast"
//   },
//   {
//     name:"Joel",
//     postPrice: 100,
//     targetAudience:"Test",
//     socialMediaLink:"https://twitter.com/ElonMusk"
//   },
//   {
//     name:"Scott",
//     postPrice: 1000,
//     targetAudience:"Fashion",
//     socialMediaLink:"https://twitter.com/JoeBiden"
//   },
//   {
//     name:"Murrell",
//     postPrice: 20000,
//     targetAudience:"Test2",
//     socialMediaLink:"https://twitter.com/JoeRogan"
//   }
// ]


goToSocialSite(link:string){
  window.open(link)
}

}
