import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../shared/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { IsSignedInGuard } from './guards/is-signed-in.guard';


const authRoutes: Routes = [
    {
        path: '', component: DashboardComponent, canActivate: [IsSignedInGuard],
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent }
        ]
    }
];

export const authRouting = RouterModule.forChild(authRoutes);
