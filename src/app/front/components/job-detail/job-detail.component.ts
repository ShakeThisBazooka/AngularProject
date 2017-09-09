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

  private job;
  public value: string;
  public isCompanyJob: boolean;

  constructor(private location: Location, private applicantService: ApplicantService,
  private userService: UserService, private route: ActivatedRoute,
  private jobService: JobService) { }

  getJob(id: string) {
    this.jobService.getOne(id)
          .subscribe((job: Job) => {
              this.job = job;
        });
  }

  ngOnInit() {
    const userInfo = this.userService.getUserInfo();
    const userRole = userInfo.role;

    if (userRole === 'applicant') {
      this.value = 'Apply';
    } else {
      const jobId = this.route.params['_value'].id;
      this.getJob(jobId);

      if (this.job.companyId === userInfo.userId) {
        this.isCompanyJob = true;
      } else {
        this.isCompanyJob = false;
      }
      this.value = 'Edit';
    }
  }
  applyJobDetail() {
    const userInfo = this.userService.getUserInfo();
    const userId = userInfo.userId;
    const jobId = this.route.params['_value'].id;

    if (userId !== undefined) {
      return this.applicantService.apply(userId, jobId);
    }
  }

}
