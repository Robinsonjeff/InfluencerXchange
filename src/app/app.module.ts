import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { FooterComponent } from './footer/footer.component';
import { AccountPageComponent } from './account-page/account-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { InfluencersComponent } from './influencers/influencers.component';
import { AdvertisersComponent } from './advertisers/advertisers.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';


const appRoutes: Routes = [
  { path: 'influencers', component: InfluencersComponent },
  { path: 'advertisers', component: AdvertisersComponent },
  { path: 'login', component: LoginPageComponent },
  // { path: 'signup', component: InfluencersComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    InfluencersComponent,
    AdvertisersComponent,
    FooterComponent,
    AccountPageComponent,
    LoginPageComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
