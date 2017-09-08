import { Component, DoCheck, OnInit} from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isLoggedIn: boolean;

  constructor(private userService: UserService,
            private router: Router) {

              if (this.userService.getLoggedIn()) {
                this.isLoggedIn = true;
              }

    }

  ngOnInit() {
  }

  public navigate() {
    this.router.navigate([this.userService.getUserInfo().role]);
  }

  logout() {
    this.router.navigateByUrl('home');
    this.userService.logout();
    this.isLoggedIn = false;
  }


}

