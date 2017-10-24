import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MaterialModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdDialogModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdPaginator,
  MdPaginatorModule,
  MdSelectModule,
  MdSidenavModule,
  MdTableModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule
} from '@angular/material';

import { CdkTableModule } from '@angular/cdk';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../shared/dashboard.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FullNamePipe } from './pipes/fullname.pipe';
import { HeaderComponent } from './components/partial/header/header.component';
import { JobManipulationComponent } from './components/job-manipulation/job-manipulation.component';
import { Md2Module } from 'md2';
import { NgModule } from '@angular/core';
import { ProfileDataComponent } from './components/profile-data/profile-data.component';
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';
import { RouterModule } from '@angular/router';
import { ShortenPipe } from './pipes/shorten.pipe';
import { TitleUnderlineDirective } from './directives/title-underline.directive';

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
    JobManipulationComponent,
    EditProfileComponent
  ],
  exports: [
    HeaderComponent,
    DashboardComponent,
    ProfileInfoComponent,
    ProfileDataComponent,
    JobManipulationComponent,
    EditProfileComponent,
    FullNamePipe,
    ShortenPipe,
    TitleUnderlineDirective
  ],
  declarations: [
    DashboardComponent,
    HeaderComponent,
    ProfileInfoComponent,
    ProfileDataComponent,
    JobManipulationComponent,
    EditProfileComponent,
    FullNamePipe,
    ShortenPipe,
    TitleUnderlineDirective
  ]
})
export class SharedModule {
}
