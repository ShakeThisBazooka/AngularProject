import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ApplicantProfileComponent } from './components/applicant-profile/applicant-profile.component';
import { DashboardComponent } from '../shared/dashboard.component';
import { ApplicantGuard } from './guards/applicant.guard';


const applicantRoutes: Routes = [

    {
        path: '', component: DashboardComponent, canActivate: [ApplicantGuard],
        children: [
            { path: '', redirectTo: 'profile', pathMatch: 'full' },
            { path: 'profile', component: ApplicantProfileComponent },
        ]
    }

];

export const applicantRouting = RouterModule.forChild(applicantRoutes);

