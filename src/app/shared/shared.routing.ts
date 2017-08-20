/* tslint:disable */
import {NgModule}                 from '@angular/core';
import {CommonModule}             from '@angular/common';
import {RouterModule, Routes}     from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {SharedDashboardComponent} from "./shared-dashboard.component";
import {FindAJobComponent} from "./components/find-a-job/find-a-job.component";


const sharedRoutes: Routes = [
  {
    path: "", component: SharedDashboardComponent,
    children: [
      {path: "", redirectTo: "home", pathMatch: 'full'},
      {path: "home", component: HomeComponent},
      {path: "jobs", component: FindAJobComponent}
    ]
  }
];

export const sharedRouting = RouterModule.forChild(sharedRoutes);

