import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from './components/partial/header/header.component';
import {FooterComponent} from './components/partial/footer/footer.component'
import {MdToolbarModule, MdSidenavModule, MdMenuModule, MdInputModule, MdButtonModule} from '@angular/material';
import {Md2Module} from 'md2';
import { DashboardComponent } from 'app/shared/dashboard.component';
import { SideNavComponent } from 'app/shared/components/partial/side-nav/side-nav.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MdSidenavModule,
    MdMenuModule,
    MdInputModule,
    MdButtonModule,
    MdToolbarModule,
    Md2Module
  ],
  exports: [
    HeaderComponent, FooterComponent, SideNavComponent
  ],
  declarations: [DashboardComponent, HeaderComponent, FooterComponent, SideNavComponent]
})
export class SharedModule {
}
