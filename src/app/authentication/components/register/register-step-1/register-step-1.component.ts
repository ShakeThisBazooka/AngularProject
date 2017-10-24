import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../../../shared/models/user';
import { UserService } from '../../../../shared/services/user.service';

@Component({
  selector: 'app-register-step-1',
  templateUrl: './register-step-1.component.html',
  styleUrls: ['./register-step-1.component.css']
})
export class RegisterStep1Component implements OnInit {

  @Output() onUserRegistered = new EventEmitter<User>();
  public formStepOne: FormGroup;
  public user: User = new User();

  constructor(private userService: UserService) {
    this.formStepOne = new FormGroup({
            name: new FormControl('', Validators.compose([Validators.required])),
            email: new FormControl('', [Validators.required, Validators.email]),
            role: new FormControl('', Validators.compose([Validators.required])),
            password: new FormControl('', Validators.compose([Validators.required,
              Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{6,}$')])),
            info: new FormControl('', Validators.compose([Validators.required]))
        });
   }

  ngOnInit() {
  }

  onSubmit() {
    this.userService.register(this.user)
        .subscribe((user: User) => {
          this.onUserRegistered.emit(user);
        });
  }

}
