import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';



const appRoutes: Routes = [
  { path: '', loadChildren: 'app/front/front.module#FrontModule' },
  { path: 'applicant', loadChildren: 'app/applicant/applicant.module#ApplicantModule' },
  { path: 'company', loadChildren: 'app/company/company.module#CompanyModule' },
  { path: 'auth', loadChildren: 'app/authentication/authentication.module#AuthenticationModule' },
];

export const appRouting = RouterModule.forRoot(appRoutes, { useHash: true });

