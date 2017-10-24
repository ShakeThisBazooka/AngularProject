import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { ActivatedRoute } from '@angular/router';
import { Applicant } from '../../../shared/models/applicant';
import { ApplicantService } from './../../../shared/services/applicant.service';
import { ApplicantServiceMock } from './mocks/ApplicantServiceMock';
import { By } from '@angular/platform-browser';
import { FrontModule } from '../../front.module';
import { Job } from '../../../shared/models/job';
import { JobDetailComponent } from './job-detail.component';
import { JobService } from './../../../shared/services/job.service';
import { JobServiceMock } from './mocks/JobServiceMock';
import { Location } from '@angular/common';
import { LocationMock } from './mocks/LocationMock';
import { Observable } from 'rxjs/Observable';
import { UserService } from './../../../shared/services/user.service';
import { UserServiceMock } from './mocks/UserServiceMock';

describe('JobDetailComponent', () => {
  let component: JobDetailComponent;
  let fixture: ComponentFixture<JobDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers: [{provide: Location, useClass: LocationMock},
      {provide: ApplicantService, useClass: ApplicantServiceMock},
      {provide: UserService, useClass: UserServiceMock},
      {provide: ActivatedRoute, useValue: {
        params: Observable.of({ _value: { id: '123'} })
      }},
      {provide: JobService, useClass: JobServiceMock}],
      imports: [FrontModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('value field should have Edit value', () => {
    expect(component.value).toEqual('Edit');
  });

  it('job field should be set properly', () => {
    component.getJob('1');
    const job: Job = new Job();

    const applicant: Applicant = new Applicant();
    applicant.userId = '123';
    applicant.firstName = 'firstName';
    applicant.lastName = 'lastName';
    applicant.jobs = [];

    const applicant2: Applicant = new Applicant();
    applicant2.userId = '1232';
    applicant2.firstName = 'firstName2';
    applicant2.lastName = 'lastName2';
    applicant2.jobs = [];

    const applicants: Applicant[] = new Array();
    applicants.push(applicant);
    applicants.push(applicant2);

    job._id = '1';
    job.companyId = '1';
    job.benefits = 'benefits';
    job.description = 'desc';
    job.applicants = applicants;

    expect(component.job.applicants.length).toEqual(job.applicants.length);
    expect(component.job._id).toEqual(job._id);
    expect(component.job.benefits).toEqual(job.benefits);
  });

  it('should set proper value to isSameCompany', () => {
    component.getJob('1');

    expect(component.isCompanyJob).toEqual(false);
  });

  it('should set proper job title to html', () => {
    component.getJob('1');

    const title = fixture.debugElement.query(By.css('md-card-title'));
    const el: HTMLElement = title.nativeElement;

    expect(el.innerText).toContain('title');
  });

  it('should set proper md-card-subtitle', () => {
    component.getJob('1');

    const posted = fixture.debugElement.query(By.css('md-card-subtitle'));
    const el: HTMLElement = posted.nativeElement;

    expect(el.innerText).toContain('Posted by: Centroida');
  });

  it('apply job detail should work correctly', () => {
    component.applyJobDetail();
  });
});
