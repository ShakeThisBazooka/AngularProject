import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './components/home/home.component';
import {SharedDashboardComponent} from './shared-dashboard.component';
import {RouterModule} from '@angular/router';
import {sharedRouting} from './shared.routing';
import {HeaderComponent} from './components/partial/header/header.component';
import {FooterComponent} from './components/partial/footer/footer.component'
import {MdToolbarModule, MdSidenavModule, MdMenuModule, MdInputModule, MdButtonModule} from '@angular/material';
import {Md2Module} from 'md2';
import { FindAJobComponent } from './components/find-a-job/find-a-job.component';


@NgModule({
  imports: [
    CommonModule,
    sharedRouting,
    MdSidenavModule,
    MdMenuModule,
    MdInputModule,
    MdButtonModule,
    MdToolbarModule,
    Md2Module
  ],
  exports: [
    HomeComponent
  ],
  declarations: [HomeComponent, SharedDashboardComponent, HeaderComponent, FooterComponent, FindAJobComponent]
})
export class SharedModule {
}
