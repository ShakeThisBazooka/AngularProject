import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { FrontModule } from '../../front.module';
import { JobDetailComponent } from './job-detail.component';

describe('JobDetailComponent', () => {
  let component: JobDetailComponent;
  let fixture: ComponentFixture<JobDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should be created', () => {
    expect(component).toBeTruthy();
  }); */
});
