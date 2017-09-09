import { Component, OnInit } from '@angular/core';
import { ApplicantService } from '../../../shared/services/applicant.service';
import { Applicant } from '../../../shared/models/applicant';
import { UserService } from '../../../shared/services/user.service';
import { Job } from "../../../shared/models/job";

@Component({
  selector: 'app-applicant-profile',
  templateUrl: './applicant-profile.component.html',
  styleUrls: ['./applicant-profile.component.css']
})
export class ApplicantProfileComponent implements OnInit {

  public applicant: Applicant;
  public jobs: Job[];
  public jobsData: number;
  constructor(
    private applicantService: ApplicantService,
    private userService: UserService
  ) {
    this.getApplicant(this.userService.getUserInfo().userId);
  }

  ngOnInit() {
  }

  public getApplicant(id: string) {
  this.applicantService.get(id)
        .subscribe((applicant: Applicant) => {
            this.applicant = applicant;
            this.jobs = applicant.jobs;
            console.log(applicant.jobs);
            // this.jobsData = this.jobs.length;
      });
  }




}
