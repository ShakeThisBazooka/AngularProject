import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { FindAJobComponent } from './find-a-job.component';

describe('FindAJobComponent', () => {
  let component: FindAJobComponent;
  let fixture: ComponentFixture<FindAJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FindAJobComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindAJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /* it('should be created', () => {
    expect(component).toBeTruthy();
  }); */
});
