import { Component, OnInit, Input, Inject, Optional, Output, EventEmitter } from '@angular/core';
import { Applicant } from '../../models/applicant';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Company } from '../../models/company';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

    public applicant: Applicant = undefined;
    public company: Company = undefined;
    public applicantView: boolean;
    public applicantForm: FormGroup;
    public companyForm: FormGroup;
  constructor(
    public dialogRef: MdDialogRef<Applicant | Company>,
                       @Optional() @Inject(MD_DIALOG_DATA) private data: any,
                       private userService: UserService
                      ) {
        this.userService.getUserInfo().role === 'applicant' ? this.applicant = data : this.company = data;
        !this.applicant ? this.applicantView = false : this.applicantView = true;
         this.applicantForm = new FormGroup({
            firstName: new FormControl('', Validators.compose([Validators.required])),
            lastName: new FormControl('', Validators.compose([Validators.required]))
        });
          this.companyForm = new FormGroup({
            name: new FormControl('', Validators.compose([Validators.required])),
            vat: new FormControl('', Validators.compose([Validators.required])),
            field: new FormControl('', Validators.compose([Validators.required]))
        });
   }

  ngOnInit() {
  }

  public onSubmitApplicant(аpplicant) {
        this.dialogRef.close(аpplicant);
        this.applicant = new Applicant();
  }

  public onSubmitCompany(company) {
        this.dialogRef.close(company);
        this.company = new Company();
  }


}
