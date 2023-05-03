import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-influencers',
  templateUrl: './influencers.component.html',
  styleUrls: ['./influencers.component.css']
})
export class InfluencersComponent {

  constructor(private sharedService: SharedService) {};

    allPosts: any = []

    ngOnInit(){
      this.sharedService.getPosts().subscribe((data) => {
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
