/* tslint:disable */
import {NgModule}                 from '@angular/core';
import {CommonModule}             from '@angular/common';
import {RouterModule, Routes}     from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {SharedDashboardComponent} from "./shared-dashboard.component";


const sharedRoutes: Routes = [
  {
    path: "", component: SharedDashboardComponent,
    children: [
      {path: "", redirectTo: "home", pathMatch: 'full'},
      {path: "home", component: HomeComponent}
    ]
  }
];

// @NgModule({
//   imports: [
//     RouterModule.forRoot(routes)
//   ],
//   exports: [ RouterModule ]
// })
export const sharedRouting = RouterModule.forChild(sharedRoutes);

