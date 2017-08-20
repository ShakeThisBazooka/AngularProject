/* tslint:disable */
import {NgModule}                 from '@angular/core';
import {CommonModule}             from '@angular/common';
import {RouterModule, Routes}     from '@angular/router';


const appRoutes: Routes = [
  {path: 'shared', loadChildren: 'app/shared/shared.module#SharedModule'},
];

export const appRouting = RouterModule.forRoot(appRoutes,{useHash:true});

