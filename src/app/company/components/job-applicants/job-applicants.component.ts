import { Component, OnInit } from '@angular/core';
import { Company } from '../../../shared/models/company';
import { CompanyService } from '../../../shared/services/company.service';
import { UserService } from "../../../shared/services/user.service";

@Component({
  selector: 'app-job-applicants',
  templateUrl: './job-applicants.component.html',
  styleUrls: ['./job-applicants.component.css']
})
export class JobApplicantsComponent implements OnInit {

  public company: Company;
  constructor(
    public companyService: CompanyService,
    public userService: UserService
  ) {
    this.getCompany(this.userService.getUserInfo().userId);
   }

  ngOnInit() {
  }

  public getCompany(id: string) {
    this.companyService.get(id)
        .subscribe((company: Company) => {
          this.company = company;
        });
  }

}
