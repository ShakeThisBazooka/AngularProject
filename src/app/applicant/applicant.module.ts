import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { applicantRouting } from './applicant.routes';
import { ApplicantGuard } from './guards/applicant.guard';
import { ApplicantProfileComponent } from './components/applicant-profile/applicant-profile.component';
import { MdToolbarModule, MdIconModule,
  MdCardModule, MdInputModule, MdButtonModule,
  MdButtonToggleModule, MdListModule, MdGridListModule,
  MdMenuModule, MdProgressBarModule, MdSidenavModule,
  MdDialogModule, MdTabsModule, MdExpansionModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProfileInfoComponent } from '../shared/components/profile-info/profile-info.component';



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
