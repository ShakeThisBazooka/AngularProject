import { Component, OnInit, Input, Inject, Optional, Output, EventEmitter } from '@angular/core';
import { Applicant } from '../../models/applicant';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Company } from '../../models/company';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

    public applicant: Applicant;
    public company: Company;
    public applicantView: boolean;
    public applicantForm: FormGroup;
    public companyForm: FormGroup;

    @Output()
    public onApplicantSubmit: EventEmitter<Applicant> = new EventEmitter();
    @Output()
    public onCompanySubmit: EventEmitter<Company> = new EventEmitter();
  constructor(
    public dialogRef: MdDialogRef<any>,
                       @Optional() @Inject(MD_DIALOG_DATA) private data: any
  ) {
        this.company = data || new Company();
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

  // public onSubmitApplicant(аpplicant) {
  //       this.dialogRef.close(аpplicant);
  //       this.applicant = new Applicant();
  //       this.onApplicantSubmit.emit(аpplicant);
  // }

  public onSubmitCompany(company) {
        this.dialogRef.close(company);
        this.company = new Company();
        this.onCompanySubmit.emit(company);
  }


}
