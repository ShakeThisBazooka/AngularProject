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
  public currentUser: string;

  constructor(private userService: UserService,
            private router: Router) { }

  ngOnInit() {
  }

}

