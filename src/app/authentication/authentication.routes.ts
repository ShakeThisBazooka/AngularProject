import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'app/authentication/components/login/login.component';
import { RegisterComponent } from 'app/authentication/components/register/register.component';
import { DashboardComponent } from 'app/shared/dashboard.component';

const authRoutes: Routes = [
    {
        path: '', component: DashboardComponent,
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent }
        ]
    }
];

export const authRouting = RouterModule.forChild(authRoutes);
