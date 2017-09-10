import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/partial/header/header.component';
import { MdToolbarModule, MdSidenavModule, MdMenuModule, MdInputModule, MdButtonModule, MdIconModule, MdSelectModule, MdCardModule, MdTooltipModule, MaterialModule, MdPaginator, MdTableModule, MdDialogModule, MdListModule, MdButtonToggleModule, MdTabsModule, MdPaginatorModule } from '@angular/material';
import { Md2Module } from 'md2';
import { DashboardComponent } from '../shared/dashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileDataComponent } from './components/profile-data/profile-data.component';
import { CdkTableModule } from '@angular/cdk';
import { JobManipulationComponent } from './components/job-manipulation/job-manipulation.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { FullNamePipe } from './pipes/fullname.pipe';
import { ShortenPipe } from './pipes/shorten.pipe';



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
    ShortenPipe
  ],
  declarations: [
    DashboardComponent,
    HeaderComponent,
    ProfileInfoComponent,
    ProfileDataComponent,
    JobManipulationComponent,
    EditProfileComponent,
    FullNamePipe,
    ShortenPipe
  ]
})
export class SharedModule {
}
