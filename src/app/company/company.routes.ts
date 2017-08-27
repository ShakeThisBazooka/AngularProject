import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../shared/dashboard.component';
import { CompanyGuard } from './guards/company.guard';



const companyRoutes: Routes = [

    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    {
        path: 'dashboard', component: DashboardComponent, canActivate: [CompanyGuard],
        children: [
            /*COMPANY ROUTES GO HERE*/
            /**
             * We should implement at least the following:
             * PROFILE
             * EDIT-PROFILE
             * SUBMIT POSITION (md-dialog with a form)
             * APPLICANTS LIST (listing all applicants for given position)
             */
        ]
    }

];

export const companyRouting = RouterModule.forChild(companyRoutes);
