import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import 'rxjs/add/operator/map';
import { User } from '../../../shared/models/user';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {


    public form: FormGroup;
    public user: User = new User();
    public error: string;
    public isLoading = false;

    constructor(
    private userService: UserService,
    private router: Router
  ) {
        this.form = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', Validators.required),
            // role: new FormControl("")
        });
    }


  ngOnInit() {
  }

  onSubmit() {
    this.userService.login(this.user)
      .subscribe(() => {
        console.log('Successfully logged in!');
        this.router.navigateByUrl(`home`);
      });
  }
}
