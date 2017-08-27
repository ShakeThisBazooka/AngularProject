import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private id: string;
  username: string;
  email: string;
  profileInfo: string;

  constructor(
    private userService: UserService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.id = this.authService.getLoggedUserId();
    this.userService.getProfile(this.id)
      .subscribe((user: any) => {
        this.username = user.name;
        this.email = user.email;
        this.profileInfo = user.info;
      });
  }

  saveEditable(value) {
    // call to http service
    console.log('http.service: ' + value);
  }

  public logout() {
    this.userService.logoutUser()
      .subscribe((response: any) => {
        this.authService.clearUserCookie();

        console.log('Logout successful!');
      }, (err) => {
        console.log(err);
      }, () => {
        // this.appRouter.navigateByUrl('');
      });
  }
  }


