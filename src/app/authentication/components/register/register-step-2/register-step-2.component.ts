import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { User } from '../../../../shared/models/user';

@Component({
  selector: 'app-register-step-2',
  templateUrl: './register-step-2.component.html',
  styleUrls: ['./register-step-2.component.css']
})
export class RegisterStep2Component implements OnInit {

  @Input() userRole;

  public user = new User();
  public formStepTwo: FormGroup;
  constructor() {
    this.formStepTwo = new FormGroup({
            username: new FormControl('', Validators.compose([Validators.required]))
        });
   }

  ngOnInit() {
    console.log('on step two: ', this.userRole);
  }

  onSubmit(){
  }
}
