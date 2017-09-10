import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Applicant } from '../../../shared/models/applicant';
import { Company } from '../../../shared/models/company';
import { CompanyService } from '../../../shared/services/company.service';
import { JobService } from '../../../shared/services/job.service';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-job-applicants',
  templateUrl: './job-applicants.component.html',
  styleUrls: ['./job-applicants.component.css']
})
export class JobApplicantsComponent implements OnInit {

  public company: Company;
  public applicants: Applicant[];
  constructor(
    public companyService: CompanyService,
    public userService: UserService,
    public jobService: JobService,
    public route: ActivatedRoute
  ) {
    this.getCompany(this.userService.getUserInfo().userId);
    this.route.params.subscribe((params) => {
            this.getApplicantsOfJob(params['id']);
        });
   }

  ngOnInit() {
  }

  public getCompany(id: string) {
    this.companyService.get(id)
        .subscribe((company: Company) => {
          this.company = company;
        });
  }

  public getApplicantsOfJob(id: string) {
    this.jobService.getOne(id)
      .map((res) => res.applicants)
      .subscribe((applicants: Applicant[]) => {
        this.applicants = applicants;
      });
  }

}
