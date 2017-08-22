import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private userService: UserService,
    private userAuthService: AuthService,
    private appRouter: Router
  ) { }

  ngOnInit() {
    this.userService.logoutUser()
      .subscribe((response: any) => {
        this.userAuthService.clearUserCookie();

        console.log('Logout successful!');
      }, (err) => {
        console.log(err);
      }, () => {
        this.appRouter.navigateByUrl('');
      });
  }
}
