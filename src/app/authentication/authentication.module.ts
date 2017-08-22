import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { authRouting } from 'app/authentication/authentication.routes';
=======
>>>>>>> f251c76a47cabde87aaa50e0028bf3c60e88f7f3
import { SharedModule } from 'app/shared/shared.module';
import { IsSignedInGuard } from 'app/authentication/guards/is-signed-in.guard';
import { LoginComponent } from 'app/authentication/components/login/login.component';
import { RegisterComponent } from 'app/authentication/components/register/register.component';
<<<<<<< HEAD
=======
import { authRouting } from 'app/authentication/authentication.routes';
>>>>>>> f251c76a47cabde87aaa50e0028bf3c60e88f7f3

@NgModule({
  imports: [
    CommonModule,
<<<<<<< HEAD
    authRouting,
    SharedModule
=======
    SharedModule,
    authRouting
>>>>>>> f251c76a47cabde87aaa50e0028bf3c60e88f7f3
  ],
  declarations: [LoginComponent, RegisterComponent],
  providers: [IsSignedInGuard]
})
export class AuthenticationModule { }
