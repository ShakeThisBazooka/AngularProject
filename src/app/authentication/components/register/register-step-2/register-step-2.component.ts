import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../../shared/models/user';
import { FormGroup, FormControl, Validators } from "@angular/forms";

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
