import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { AccountPageComponent } from './account-page/account-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { InfluencersComponent } from './influencers/influencers.component';
import { AdvertisersComponent } from './advertisers/advertisers.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule, NgForm } from '@angular/forms';
import {MatCard, MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


const appRoutes: Routes = [
  { path: 'influencers', component: InfluencersComponent },
  { path: 'advertisers', component: AdvertisersComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    InfluencersComponent,
    AdvertisersComponent,
    FooterComponent,
    AccountPageComponent,
    RegisterPageComponent,
    

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule,
    ReactiveFormsModule,
    CommonModule,
    MatButtonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
