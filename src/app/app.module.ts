import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { InfluencersComponent } from './influencers/influencers.component';
import { AdvertisersComponent } from './advertisers/advertisers.component';
const appRoutes: Routes = [
  { path: 'influencers', component: InfluencersComponent },
  { path: 'advertisers', component: AdvertisersComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    InfluencersComponent,
    AdvertisersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
