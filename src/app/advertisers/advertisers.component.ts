import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-advertisers',
  templateUrl: './advertisers.component.html',
  styleUrls: ['./advertisers.component.css']
})
export class AdvertisersComponent {
  constructor(private sharedService: SharedService) {};

  allPosts: any = []

  ngOnInit(){
    //getting posts for Influencer to see
    this.sharedService.getPosts('Influencer').subscribe((data) => {
        this.allPosts = data.posts;
      }, (error) => {
        console.log(error);
      });
     
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
