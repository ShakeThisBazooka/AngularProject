import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
   MaterialModule,
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
   MdPaginatorModule,
   MdProgressBarModule,
   MdSidenavModule,
   MdTableModule,
   MdTabsModule,
   MdToolbarModule,
   MdTooltipModule
} from '@angular/material';

import { CdkTableModule } from '@angular/cdk';
import { CommonModule } from '@angular/common';
import { CompanyGuard } from './guards/company.guard';
import { CompanyProfileComponent } from './components/company-profile/company-profile.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { JobApplicantsComponent } from './components/job-applicants/job-applicants.component';
import { Md2Module } from 'md2';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { companyRouting } from './company.routes';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    companyRouting,
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
    MdPaginatorModule,
    MaterialModule
  ],
  declarations: [CompanyProfileComponent, JobApplicantsComponent],
  providers: [CompanyGuard]
})
export class CompanyModule { }
