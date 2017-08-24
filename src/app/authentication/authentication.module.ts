import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { authRouting } from 'app/authentication/authentication.routes';
import { SharedModule } from 'app/shared/shared.module';
import { IsSignedInGuard } from 'app/authentication/guards/is-signed-in.guard';
import { LoginComponent } from 'app/authentication/components/login/login.component';
import { RegisterComponent } from 'app/authentication/components/register/register.component';
import {MdCardModule, MdInputModule, MdIconModule, MdButtonModule, MdTooltipModule, MdSidenavModule} from '@angular/material';
import { RegisterStep1Component } from "./components/register/register-step-1/register-step-1.component";
import { RegisterStep2Component } from "./components/register/register-step-2/register-step-2.component";

@NgModule({
  imports: [
    CommonModule,
    authRouting,
    SharedModule,
    FormsModule,
    MdCardModule,
    MdIconModule,
    MdButtonModule,
    MdTooltipModule,
    MdSidenavModule,
    MdInputModule
  ],
  declarations: [LoginComponent, RegisterComponent, RegisterStep1Component, RegisterStep2Component],
  providers: [IsSignedInGuard]
})
export class AuthenticationModule { }
