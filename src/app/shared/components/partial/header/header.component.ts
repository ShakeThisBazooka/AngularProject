import { Component, DoCheck, OnInit} from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {

  public isLoggedIn: boolean;
  public currentUser: string;

  constructor(private authService: AuthService,
              private userService: UserService,
            private router: Router) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.isLogged();
    this.currentUser = this.authService.getLoggedUser();
    console.log(this.currentUser);
  }

  ngDoCheck() {
    this.isLoggedIn = this.authService.isLogged();
    this.currentUser = this.authService.getLoggedUser();
  }

  public logout() {
    this.userService.logoutUser()
      .subscribe((response: any) => {
        this.authService.clearUserCookie();

        console.log('Logout successful!');
      }, (err) => {
        console.log(err);
      }, () => {
        this.router.navigateByUrl('');
      });
  }
}

