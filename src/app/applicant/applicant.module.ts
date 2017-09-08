import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { applicantRouting } from './applicant.routes';
import { ApplicantGuard } from './guards/applicant.guard';
import { ApplicantProfileComponent } from './components/applicant-profile/applicant-profile.component';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    applicantRouting
  ],
  declarations: [ApplicantProfileComponent],
  providers: [ApplicantGuard]
})
export class ApplicantModule { }
