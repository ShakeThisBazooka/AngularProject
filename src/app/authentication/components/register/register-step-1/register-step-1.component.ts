import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../../../shared/models/user';

@Component({
  selector: 'app-register-step-1',
  templateUrl: './register-step-1.component.html',
  styleUrls: ['./register-step-1.component.css']
})
export class RegisterStep1Component implements OnInit {

  @Output() onRoleSelected = new EventEmitter<string>();
  public formStepOne: FormGroup;
  public user: User = new User();

  constructor() {
    this.formStepOne = new FormGroup({
            role: new FormControl('', Validators.compose([Validators.required]))
        });
   }

  ngOnInit() {
  }

  onSubmit() {
    this.onRoleSelected.emit(this.user.role);
  }

}
