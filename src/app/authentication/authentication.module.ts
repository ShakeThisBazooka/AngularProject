import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MdCardModule, MdButtonToggleModule,
  MdInputModule, MdIconModule, MdButtonModule,
  MdTooltipModule, MdSidenavModule} from '@angular/material';
import { RegisterStep2Component } from './components/register/register-step-2/register-step-2.component';
import { RegisterStep1Component } from './components/register/register-step-1/register-step-1.component';
import { authRouting } from './authentication.routes';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { IsSignedInGuard } from './guards/is-signed-in.guard';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    authRouting,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MdCardModule,
    MdIconModule,
    MdButtonModule,
    MdTooltipModule,
    MdSidenavModule,
    MdInputModule,
    MdButtonToggleModule,
    FlexLayoutModule
  ],
  declarations: [LoginComponent, RegisterComponent, RegisterStep1Component, RegisterStep2Component],
  providers: [IsSignedInGuard]
})
export class AuthenticationModule { }
