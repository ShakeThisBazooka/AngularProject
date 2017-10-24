import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from '../../models/user';
import { UserInfo } from '../../models/user-info';
import { UserService } from '../../services/user.service';
import { Applicant } from '../../models/applicant';
import { Company } from '../../models/company';
import { MdDialog } from '@angular/material';
import { CompanyService } from '../../services/company.service';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';
import { ApplicantService } from '../../services/applicant.service';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {

  @Input() public user: Company;
  public isApplicant = false;
  public userInfo: UserInfo;

  @Output()
  public onEditProfile: EventEmitter<any> = new EventEmitter();
  constructor(
    private userService: UserService,
    private dialog: MdDialog,
    private companyService: CompanyService,
    private applicantService: ApplicantService
  ) {
    this.userInfo = this.userService.getUserInfo();
    this.isApplicant = this.userInfo.role === 'applicant' ? true : false;
  }

  ngOnInit() {

  }

}
