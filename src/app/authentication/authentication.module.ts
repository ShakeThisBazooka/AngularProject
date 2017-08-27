import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { authRouting } from './authentication.routes';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { IsSignedInGuard } from './guards/is-signed-in.guard';
import {MdCardModule, MdInputModule, MdIconModule, MdButtonModule, MdTooltipModule, MdSidenavModule} from '@angular/material';

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
  declarations: [LoginComponent, RegisterComponent],
  providers: [IsSignedInGuard]
})
export class AuthenticationModule { }
