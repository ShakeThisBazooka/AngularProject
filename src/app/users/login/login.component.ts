import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  private user: User = new User();

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private appRouter: Router
  ) { }

  ngOnInit() {
    if (this.authService.isLogged()) {
      console.log('User is already logged in!');

      this.appRouter.navigateByUrl('');
    }
  }

  onSubmit(form: NgForm) {
    this.userService.loginUser(this.user)
      .map((res) => res.json())
      .subscribe((response: any) => {
        if (!response.name) {
          throw new Error('Something went wrong!');
        }

        this.authService.setLoggedUser(response.name);
        this.authService.setLoggedUserId(response.id);

        console.log('Successfully logged in!');
      }, (err) => {
        console.log(err);
      }, () => {
        this.appRouter.navigateByUrl('profile');
      });
  }
}
