import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/partial/header/header.component';
import { MdToolbarModule, MdSidenavModule, MdMenuModule, MdInputModule, MdButtonModule, MdIconModule, MdSelectModule, MdCardModule, MdTooltipModule, MaterialModule, MdPaginator, MdTableModule, MdDialogModule, MdListModule, MdButtonToggleModule, MdTabsModule, MdPaginatorModule } from '@angular/material';
import { Md2Module } from 'md2';
import { DashboardComponent } from '../shared/dashboard.component';
import { SideNavComponent } from '../shared/components/partial/side-nav/side-nav.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileDataComponent } from './components/profile-data/profile-data.component';
import { CdkTableModule } from '@angular/cdk';
import { JobManipulationComponent } from './components/job-manipulation/job-manipulation.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MdToolbarModule,
    MdMenuModule,
    MdButtonModule,
    MdIconModule,
    FlexLayoutModule,
    MdDialogModule,
    MdSidenavModule,
    MdListModule,
    RouterModule,
    MdCardModule,
    MdTooltipModule,
    Md2Module,
    MdInputModule,
    FormsModule,
    MdButtonToggleModule,
    MdTabsModule,
    ReactiveFormsModule,
    MdTableModule,
    CdkTableModule,
    MdPaginatorModule
  ],
  entryComponents: [
    JobManipulationComponent
  ],
  exports: [
    HeaderComponent,
    SideNavComponent,
    DashboardComponent,
    ProfileComponent,
    ProfileInfoComponent,
    ProfileDataComponent,
    JobManipulationComponent
  ],
  declarations: [
    DashboardComponent,
    HeaderComponent,
    SideNavComponent,
    ProfileComponent,
    ProfileInfoComponent,
    ProfileDataComponent,
    JobManipulationComponent
  ]
})
export class SharedModule {
}
