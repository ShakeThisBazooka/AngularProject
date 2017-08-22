import { Component, DoCheck, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, DoCheck {

  public isLoggedIn: boolean;
  public currentUser: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.isLogged();
    this.currentUser = this.authService.getLoggedUser();
    console.log(this.currentUser);
  }

  ngDoCheck() {
    this.isLoggedIn = this.authService.isLogged();
    this.currentUser = this.authService.getLoggedUser();
  }

}
