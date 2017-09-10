import { Component, OnInit } from '@angular/core';
import { ApplicantService } from '../../../shared/services/applicant.service';
import { Applicant } from '../../../shared/models/applicant';
import { UserService } from '../../../shared/services/user.service';
import { Job } from '../../../shared/models/job';
import { Router } from '@angular/router';
import { EditProfileComponent } from '../../../shared/components/edit-profile/edit-profile.component';
import { MdDialog } from '@angular/material';

@Component({
  selector: 'app-applicant-profile',
  templateUrl: './applicant-profile.component.html',
  styleUrls: ['./applicant-profile.component.css']
})
export class ApplicantProfileComponent implements OnInit {

  public applicant: Applicant;
  public jobs: Job[];
  public jobsCount: number;
  constructor(
    private applicantService: ApplicantService,
    private userService: UserService,
    public router: Router,
    private dialog: MdDialog
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
            this.jobsCount = this.jobs.length;
      });
  }

  public deleteApplicant(isSure: boolean) {
      this.applicantService.delete(this.userService.getUserInfo().userId)
          .subscribe(() => {
            this.router.navigateByUrl('home');
            this.userService.logout();
          });
  }

  public editProfile(data) {
    this.dialog.open(EditProfileComponent, {
            height: 'auto',
            width: '400px',
            data: (data !== undefined) ? data : null,
        }).afterClosed().subscribe((result: Applicant) => {
            if (result) {
              console.log(result);
                this.applicantService.update(result).subscribe(
                    () => {
                        this.applicantService.getJobs(this.userService.getUserInfo().userId);
                    });
            }
        });
  }




}
