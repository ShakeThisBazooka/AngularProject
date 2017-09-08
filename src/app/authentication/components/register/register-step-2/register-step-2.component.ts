import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Applicant } from '../../../../shared/models/applicant';
import { ApplicantService } from '../../../../shared/services/applicant.service';
import { Router } from '@angular/router';
import { Company } from '../../../../shared/models/company';
import { CompanyService } from '../../../../shared/services/company.service';

@Component({
  selector: 'app-register-step-2',
  templateUrl: './register-step-2.component.html',
  styleUrls: ['./register-step-2.component.css']
})
export class RegisterStep2Component implements OnInit {

  @Input() role;
  @Input() id;

  public applicant = new Applicant();
  public company = new Company();
  public formStepTwoApplicant: FormGroup;
  public formStepTwoCompany: FormGroup;
  constructor(private applicantService: ApplicantService,
              private router: Router,
            private companyService: CompanyService) {
    this.formStepTwoApplicant = new FormGroup({
            firstName: new FormControl('', Validators.compose([Validators.required])),
            lastName: new FormControl('', Validators.compose([Validators.required]))
        });
    this.formStepTwoCompany = new FormGroup({
            name: new FormControl('', Validators.compose([Validators.required])),
            vat: new FormControl('', Validators.compose([Validators.required])),
            field: new FormControl('', Validators.compose([Validators.required]))
      });
   }

  ngOnInit() {
  }

  onSubmitApplicant() {
    this.applicant.userId = this.id;
    this.applicantService.create(this.applicant)
        .subscribe((res) => {
          this.router.navigateByUrl('auth/login');
        });
  }

  onSubmitCompany() {
    this.company.userId = this.id;
    this.companyService.create(this.company)
        .subscribe((res) => {
          this.router.navigateByUrl('auth/login');
        });
  }
}
