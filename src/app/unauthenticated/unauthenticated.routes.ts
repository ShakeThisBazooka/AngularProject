import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'app/unauthenticated/components/home/home.component';
import { FindAJobComponent } from 'app/unauthenticated/components/find-a-job/find-a-job.component';
import { DashboardComponent } from 'app/shared/dashboard.component';



const unAuthRoutes: Routes = [
    {
        path: '', component: DashboardComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'jobs', component: FindAJobComponent }
        ]
    }
];

export const unAuthRouting = RouterModule.forChild(unAuthRoutes);
