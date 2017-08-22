import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdToolbarModule, MdCardModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { HomeModule } from './home/home.module';
import { UsersModule } from './users/users.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { HomeService } from './services/home.service';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    HomeModule,
    UsersModule,
    MdToolbarModule,
    MdButtonModule,
    MdCardModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/', pathMatch: 'full' },
    ])
  ],
  bootstrap: [AppComponent],
  providers: [
    CookieService,
    AuthService,
    UserService,
    HomeService
  ]
})
export class AppModule { }
