import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../shared/dashboard.component';
import { FindAJobComponent } from './components/find-a-job/find-a-job.component';
import { HomeComponent } from './components/home/home.component';
import { JobDetailComponent } from './components/job-detail/job-detail.component';




const frontRoutes: Routes = [
    {
        path: '', component: DashboardComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'jobs', component: FindAJobComponent },
            { path: 'jobs/:id', component: JobDetailComponent }
        ]
    }
];

export const frontRouting = RouterModule.forChild(frontRoutes);
