import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from './components/partial/header/header.component';
import { MdToolbarModule, MdSidenavModule, MdMenuModule, MdInputModule, MdButtonModule, MdIconModule } from '@angular/material';
import {Md2Module} from 'md2';
import { DashboardComponent } from '../shared/dashboard.component';
import { SideNavComponent } from '../shared/components/partial/side-nav/side-nav.component';
import { ProfileComponent } from './components/profile/profile.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MdSidenavModule,
    MdMenuModule,
    MdInputModule,
    MdButtonModule,
    MdToolbarModule,
    Md2Module,
    MdIconModule
  ],
  exports: [
    HeaderComponent,  SideNavComponent, DashboardComponent, ProfileComponent
  ],
  declarations: [DashboardComponent, HeaderComponent, SideNavComponent, ProfileComponent]
})
export class SharedModule {
}
