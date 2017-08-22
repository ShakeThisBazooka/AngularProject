import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared/shared.module';
import { applicantRouting } from 'app/applicant/applicant.routes';
import { ApplicantGuard } from 'app/applicant/guards/applicant.guard';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    applicantRouting
  ],
  declarations: [],
  providers: [ApplicantGuard]
})
export class ApplicantModule { }
