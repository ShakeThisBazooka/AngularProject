import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Http, HttpModule } from '@angular/http';

import { AuthenticationModule } from './../../authentication.module';
import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from './../../../shared/services/user.service';
import { appRouting } from './../../../app.routes';

const RouterMock = {
};

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers: [UserService, {provide: ActivatedRoute, useValue: RouterMock},
      {provide: Router, useValue: RouterMock}],
      imports: [AuthenticationModule, HttpModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /* it('should be created', () => {
    expect(component).toBeTruthy();
  }); */
});
