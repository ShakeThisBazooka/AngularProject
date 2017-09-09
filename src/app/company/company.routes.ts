import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../shared/dashboard.component';
import { CompanyGuard } from './guards/company.guard';
import { CompanyProfileComponent } from './components/company-profile/company-profile.component';
import { JobApplicantsComponent } from './components/job-applicants/job-applicants.component';



const companyRoutes: Routes = [
    {
        path: '', component: DashboardComponent, canActivate: [CompanyGuard],
        children: [
            { path: '', redirectTo: 'profile', pathMatch: 'full' },
            { path: 'profile', component: CompanyProfileComponent },
            { path: 'jobs/:id', component: JobApplicantsComponent }
        ]
    }

];

export const companyRouting = RouterModule.forChild(companyRoutes);
