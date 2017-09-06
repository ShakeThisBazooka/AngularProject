import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { appRouting } from './app.routes';
import { UserService } from './shared/services/user.service';
import { CookieService } from 'ngx-cookie-service';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdToolbarModule, MdSidenavModule, MdMenuModule, MdInputModule, MdButtonModule, MdCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { JobService } from './shared/services/job.service';
import { ApplicantService } from './shared/services/applicant.service';
import { CompanyService } from './shared/services/company.service';

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
  providers: [ UserService, JobService, ApplicantService, CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
