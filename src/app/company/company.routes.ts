import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../shared/dashboard.component';
import { CompanyGuard } from './guards/company.guard';
import { CompanyProfileComponent } from './components/company-profile/company-profile.component';



const companyRoutes: Routes = [
    {
        path: 'company', component: DashboardComponent, canActivate: [CompanyGuard],
        children: [
            { path: '', redirectTo: 'profile', pathMatch: 'full' },
            { path: 'profile', component: CompanyProfileComponent },
        ]
    }

];

export const companyRouting = RouterModule.forChild(companyRoutes);
