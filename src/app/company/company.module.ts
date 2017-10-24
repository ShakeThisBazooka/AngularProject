import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { companyRouting } from './company.routes';
import { SharedModule } from '../shared/shared.module';
import { CompanyGuard } from './guards/company.guard';
import { CompanyProfileComponent } from './components/company-profile/company-profile.component';
import { MdToolbarModule, MdIconModule, MdCardModule,
  MdInputModule, MdButtonModule, MdButtonToggleModule,
  MdListModule, MdGridListModule, MdMenuModule,
  MdSidenavModule, MdProgressBarModule, MdTabsModule,
  MdDialogModule, MdExpansionModule, MaterialModule,
  MdTooltipModule, MdTableModule, MdPaginatorModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { Md2Module } from 'md2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdkTableModule } from '@angular/cdk';
import { JobApplicantsComponent } from './components/job-applicants/job-applicants.component';


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
