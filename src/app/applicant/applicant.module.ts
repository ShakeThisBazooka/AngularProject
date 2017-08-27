import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { applicantRouting } from './applicant.routes';
import { ApplicantGuard } from './guards/applicant.guard';


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
