import 'rxjs/add/operator/map';

import { Component, OnInit } from '@angular/core';

import { Company } from '../../../shared/models/company';
import { CompanyService } from '../../../shared/services/company.service';
import { EditProfileComponent } from '../../../shared/components/edit-profile/edit-profile.component';
import { Job } from '../../../shared/models/job';
import { JobManipulationComponent } from '../../../shared/components/job-manipulation/job-manipulation.component';
import { MdDialog } from '@angular/material';
import { Router } from '@angular/router';
import { UserService } from '../../../shared/services/user.service';

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
    private dialog: MdDialog,
    private router: Router
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
      .map((response: any) => {
        return response.jobs;
      })
      .subscribe((jobs) => {
        this.jobsCount = jobs.length;
        this.jobs = jobs;
      });
  }

  public addJob(data) {
    this.dialog.open(JobManipulationComponent, {
            height: 'auto',
            width: '400px',
            data: (data !== undefined) ? data : null,
            disableClose: true
        }).afterClosed().subscribe((result: Job) => {
            if (result) {
                result.companyId = this.userService.getUserInfo().userId;
                this.companyService.addJob(result).subscribe(
                    () => {
                        this.getJobs(this.userService.getUserInfo().userId);
                    });
            }
        });
  }

  public editJob(data) {
    this.dialog.open(JobManipulationComponent, {
            height: 'auto',
            width: '400px',
            data: (data !== undefined) ? data : null,
        }).afterClosed().subscribe((result: Job) => {
            if (result) {
              console.log(result);
                this.companyService.updateJob(result).subscribe(
                    () => {
                        this.getJobs(this.userService.getUserInfo().userId);
                    });
            }
        });
  }

  public editProfile(data) {
    this.dialog.open(EditProfileComponent, {
      height: 'auto',
      width: '400px',
      data: (data !== undefined) ? data : null,
    }).afterClosed().subscribe((result: Company) => {
      if (result) {
        console.log(result);
        this.companyService.update(result).subscribe(
          () => {
            console.log('done');
          });
      }
    });
  }

  public deleteJob(id: string) {
    this.companyService.deleteJob(this.userService.getUserInfo().userId, id)
      .subscribe((res) => {
        console.log('delete job', res);
        this.getJobs(this.userService.getUserInfo().userId);
      });
  }

  public deleteCompany(isSure: boolean) {
      this.companyService.delete(this.userService.getUserInfo().userId)
          .subscribe(() => {
            this.router.navigateByUrl('home');
            this.userService.logout();
          });
  }
}
