import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { JobManipulationComponent } from './job-manipulation.component';

describe('JobManipulationComponent', () => {
  let component: JobManipulationComponent;
  let fixture: ComponentFixture<JobManipulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobManipulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobManipulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /* it('should create', () => {
    expect(component).toBeTruthy();
  }); */
});
