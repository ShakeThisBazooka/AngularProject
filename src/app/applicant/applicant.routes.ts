import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ApplicantGuard } from 'app/applicant/guards/applicant.guard';
import { DashboardComponent } from 'app/shared/dashboard.component';


const applicantRoutes: Routes = [

    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    {
        path: 'dashboard', component: DashboardComponent, canActivate: [ApplicantGuard],
        children: [
            /*APPLICANT ROUTES GO HERE*/
            /**
             * We should implement at least the following:
             * PROFILE
             * EDIT-PROFILE
             * SUBMIT APPLICATION (like applying for a job in a way, probably in a form format)
             * APPLICATIONS LIST (listing all applications of this applicant)
             */
        ]
    }

];

export const applicantRouting = RouterModule.forChild(applicantRoutes);
