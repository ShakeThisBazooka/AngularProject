import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from '../../models/user';
import { UserInfo } from '../../models/user-info';
import { UserService } from '../../services/user.service';
import { Applicant } from '../../models/applicant';
import { Company } from '../../models/company';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {

  @Input() public user: Applicant | Company;
  public isApplicant = false;
  public userInfo: UserInfo;
  constructor(private userService: UserService) {
    this.userInfo = this.userService.getUserInfo();
    this.isApplicant = this.userInfo.role === 'applicant' ? true : false;
    console.log(this.userInfo);
   }

  ngOnInit() {

  }

}
