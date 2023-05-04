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
import { HttpClientModule } from '@angular/common/http';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, NgForm } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AddPostDialogComponent } from './add-post-dialog/add-post-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MoneyPipe } from './money.pipe';


const appRoutes: Routes = [
  { path: 'influencers', component: InfluencersComponent },
  { path: 'advertisers', component: AdvertisersComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: RegisterPageComponent },
  { path: 'account', component: AccountPageComponent },
  { path: '', redirectTo:'/login', pathMatch: 'full'}
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
    LoginPageComponent,
    AddPostDialogComponent,
    MoneyPipe


  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    CommonModule,
    MatSlideToggleModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatRadioModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
