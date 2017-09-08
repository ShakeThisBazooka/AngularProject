
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../../shared/models/user';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

    public form: FormGroup;
    public role: string;
    public userId: string;
    public onRegisteredUser = false;

    public constructor(private router: Router,
    private userService: UserService) { }

  ngOnInit() {
  }


    public assign(user: User) {
      this.role = user.role;
      this.userId = user.userId;
      this.onRegisteredUser = true;
    }

}
