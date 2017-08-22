import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { authRouting } from 'app/authentication/authentication.routes';
import { SharedModule } from 'app/shared/shared.module';
import { IsSignedInGuard } from 'app/authentication/guards/is-signed-in.guard';
import { LoginComponent } from 'app/authentication/components/login/login.component';
import { RegisterComponent } from 'app/authentication/components/register/register.component';

@NgModule({
  imports: [
    CommonModule,
    authRouting,
    SharedModule
  ],
  declarations: [LoginComponent, RegisterComponent],
  providers: [IsSignedInGuard]
})
export class AuthenticationModule { }
