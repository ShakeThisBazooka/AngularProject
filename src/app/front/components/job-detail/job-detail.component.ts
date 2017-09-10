import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ApplicantService } from '../../../shared/services/applicant.service';
import { Job } from './../../../shared/models/job';
import { JobService } from './../../../shared/services/job.service';
import { Location } from '@angular/common';
import { Response } from '@angular/http';
import { UserService } from './../../../shared/services/user.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {

  public job: Job;
  public value: string;
  public isCompanyJob: boolean;
  public jobId: string;

  constructor(public location: Location, private applicantService: ApplicantService,
    private userService: UserService, private route: ActivatedRoute,
    private jobService: JobService) { }

  ngOnInit() {

    if (this.userService.getUserInfo().role === 'applicant') {
      this.value = 'Apply';
      this.route.params.subscribe((params) => {
        this.jobId = params['id'];
        this.getJob(params['id']);
      });

    }
  }

  public applyJobDetail() {
    if (this.userService.getUserInfo().userId !== undefined) {
      this.applicantService.apply(this.userService.getUserInfo().userId, this.jobId)
        .subscribe((res) => {
        });
    }
  }

  public getJob(id: string) {
    this.jobService.getOne(id)
      .subscribe((job: Job) => {
        this.job = job;
        if (this.job.companyId === this.userService.getUserInfo().userId) {
          this.isCompanyJob = true;
        } else {
          this.isCompanyJob = false;
        }
        this.value = 'Edit';
      });
  }

}
