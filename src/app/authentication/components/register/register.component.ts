
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import 'rxjs/add/operator/map';
import { User } from '../../../shared/models/user';
import { UserService } from '../../../shared/services/user.service';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private user: User = new User();

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    if (this.authService.isLogged()) {
      console.log('User is already logged in!');

      this.router.navigateByUrl('');
    }
  }

  onSubmit(form: NgForm): void {
    this.userService.registerUser(this.user)
      .subscribe((responseUser: any) => {
          console.log('Congrats, you are registered!');
        }, (err) => {
          console.log('err', err);
        },
        () => {
          this.router.navigateByUrl('login');
        });
  }

}
