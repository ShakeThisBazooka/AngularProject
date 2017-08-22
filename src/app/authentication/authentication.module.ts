import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared/shared.module';
import { IsSignedInGuard } from 'app/authentication/guards/is-signed-in.guard';
import { LoginComponent } from 'app/authentication/components/login/login.component';
import { RegisterComponent } from 'app/authentication/components/register/register.component';
import { authRouting } from 'app/authentication/authentication.routes';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    authRouting
  ],
  declarations: [LoginComponent, RegisterComponent],
  providers: [IsSignedInGuard]
})
export class AuthenticationModule { }
