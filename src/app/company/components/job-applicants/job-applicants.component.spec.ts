import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { ActivatedRoute } from '@angular/router';
import { Applicant } from '../../../shared/models/applicant';
import { ApplicantService } from './../../../shared/services/applicant.service';
import { By } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Company } from '../../../shared/models/company';
import { CompanyModule } from './../../company.module';
import { CompanyProfileComponent } from '../company-profile/company-profile.component';
import { CompanyService } from './../../../shared/services/company.service';
import { CompanyServiceMock } from './mocks/CompanyServiceMock';
import { Job } from '../../../shared/models/job';
import { JobApplicantsComponent } from './job-applicants.component';
import { JobService } from './../../../shared/services/job.service';
import { JobServiceMock } from './mocks/JobServiceMock';
import { Observable } from 'rxjs/Observable';
import { UserService } from './../../../shared/services/user.service';
import { UserServiceMock } from './mocks/UserServiceMock';

describe('JobApplicantsComponent', () => {
  let component: JobApplicantsComponent;
  let fixture: ComponentFixture<JobApplicantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers: [{ provide: UserService, useClass: UserServiceMock },
      {provide: CompanyService, useClass: CompanyServiceMock},
      {provide: JobService, useClass: JobServiceMock},
      {provide: ActivatedRoute, useValue: {
        params: Observable.of({ id: 'test' })
      }},
      {provide: ApplicantService}],
      imports: [CompanyModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobApplicantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set company field properly', () => {
    component.getCompany('1');

    const company: Company = new Company();
    company.userId = '1234';
    company.name = 'Name';
    company.vat = 'vat';
    company.field = 'field';
    company.jobs = [];

    expect(component.company.userId === company.userId).toBeTruthy();
    expect(component.company.field === company.field).toBeTruthy();
    expect(component.company.vat === company.vat).toBeTruthy();
    expect(component.company.name === company.name).toBeTruthy();
  });

  it('should set applicants field properly', () => {
    component.getApplicantsOfJob('1');

    const applicant: Applicant = new Applicant();
    applicant.userId = '123';
    applicant.firstName = 'firstName';
    applicant.lastName = 'lastName';
    applicant.jobs = [];

    const job: Job = new Job();
    job._id = '1';
    job.applicants = [applicant];

    expect(component.applicants.includes(job.applicants[0]));
    expect(component.applicants.includes(job.applicants[1]));
  });

  it('expects html to have h3 with specific value', () => {
    const h3 = fixture.debugElement.query(By.css('h3'));
    const el: HTMLElement = h3.nativeElement;

    expect(el.innerText).toContain('Applicants');
  });
});
