import {
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdProgressBarModule,
  MdSidenavModule,
  MdTabsModule,
  MdToolbarModule
} from '@angular/material';

import { ApplicantGuard } from './guards/applicant.guard';
import { ApplicantProfileComponent } from './components/applicant-profile/applicant-profile.component';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { ProfileInfoComponent } from '../shared/components/profile-info/profile-info.component';
import { SharedModule } from '../shared/shared.module';
import { applicantRouting } from './applicant.routes';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    applicantRouting,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MdInputModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdListModule,
    MdGridListModule,
    MdMenuModule,
    MdSidenavModule,
    MdProgressBarModule,
    MdTabsModule,
    MdDialogModule,
    MdExpansionModule,
    FlexLayoutModule,
  ],
  declarations: [ApplicantProfileComponent],
  providers: [ApplicantGuard]
})
export class ApplicantModule { }
