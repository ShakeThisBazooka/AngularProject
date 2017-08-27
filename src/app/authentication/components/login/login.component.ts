import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import 'rxjs/add/operator/map';
import { User } from '../../../shared/models/user';
import { UserService } from '../../../shared/services/user.service';
import { AuthService } from '../../../shared/services/auth.service';

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
    private router: Router
  ) { }

  ngOnInit() {
    if (this.authService.isLogged()) {
      console.log('User is already logged in!');

      this.router.navigateByUrl('');
    }
  }

  onSubmit(form: NgForm) {
    this.userService.loginUser(this.user)
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
        // this.router.navigateByUrl('profile');
        this.router.navigateByUrl('');
      });
  }
}
