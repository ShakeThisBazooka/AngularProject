import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { appRouting } from './app.routes';
import { HomeService } from './shared/services/home.service';
import { AuthService } from './shared/services/auth.service';
import { UserService } from './shared/services/user.service';
import { CookieService } from 'ngx-cookie-service';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdToolbarModule, MdSidenavModule, MdMenuModule, MdInputModule, MdButtonModule, MdCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    appRouting,
    SharedModule,
    RouterModule,
    HttpModule,
    BrowserAnimationsModule,
    MdSidenavModule,
    MdMenuModule,
    MdInputModule,
    MdButtonModule,
    MdToolbarModule,
    MdCardModule,
    FlexLayoutModule
  ],
  providers: [HomeService, AuthService, UserService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
