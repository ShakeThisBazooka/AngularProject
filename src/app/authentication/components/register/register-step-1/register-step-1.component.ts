import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-register-step-1',
  templateUrl: './register-step-1.component.html',
  styleUrls: ['./register-step-1.component.css']
})
export class RegisterStep1Component implements OnInit {

  @Output() onFormRequest = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() {
  }

  getFormResult(value: string){
    this.onFormRequest.emit(value);
  }

}
