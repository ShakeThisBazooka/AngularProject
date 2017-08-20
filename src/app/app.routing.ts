/* tslint:disable */
import {NgModule}                 from '@angular/core';
import {CommonModule}             from '@angular/common';
import {RouterModule, Routes}     from '@angular/router';
import {HomeComponent} from "./shared/components/home/home.component";


const appRoutes: Routes = [
  {path: 'shared', loadChildren: 'app/shared/shared.moduleSharedModule'},
];

// @NgModule({
//   imports: [
//     RouterModule.forRoot(routes)
//   ],
//   exports: [RouterModule]
// })

export const appRouting = RouterModule.forRoot(appRoutes,{useHash:true});

