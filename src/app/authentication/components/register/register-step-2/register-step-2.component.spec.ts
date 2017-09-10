import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { RegisterStep2Component } from './register-step-2.component';

describe('RegisterStep2Component', () => {
  let component: RegisterStep2Component;
  let fixture: ComponentFixture<RegisterStep2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterStep2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /* it('should be created', () => {
    expect(component).toBeTruthy();
  }); */
});
