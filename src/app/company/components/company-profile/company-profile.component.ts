import { Component, OnInit } from '@angular/core';
import { Company } from '../../../shared/models/company';
import { UserService } from '../../../shared/services/user.service';
import { CompanyService } from '../../../shared/services/company.service';
import { Job } from '../../../shared/models/job';
import { MdDialog } from '@angular/material';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {

  public company: Company;
  public jobs: Job[] = [];
  public jobsCount: number;
  constructor(
    private userService: UserService,
    private companyService: CompanyService,
    private dialog: MdDialog
  ) {
    this.getCompany(this.userService.getUserInfo().userId);
    this.getJobs(this.userService.getUserInfo().userId);
   }

  ngOnInit() {

  }

  public getCompany(id: string) {
    this.companyService.get(id)
        .subscribe((company: Company) => {
          this.company = company;
        });
  }

  public getJobs(companyId: string) {
    this.companyService.getJobs(companyId)
      // .map((response: { jobs: Job[] }) => {
      //   this.jobsCount = response.jobs.length;
      //   response.jobs.map((job: Job, jobIndex: number) => {
      //     job.counter = jobIndex + 1;
      //     return job;
      //   });
      //   return response.jobs;
      // })
      .subscribe((jobs) => {
        this.jobs = jobs;
      });
  }

  public addJob(data) {

  }

  public editJob(data) {

  }

  public deleteJob(data) {

  }
}
