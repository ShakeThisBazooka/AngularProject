import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { companyRouting } from './company.routes';
import { SharedModule } from '../shared/shared.module';
import { CompanyGuard } from './guards/company.guard';
import { CompanyProfileComponent } from './components/company-profile/company-profile.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    companyRouting
  ],
  declarations: [CompanyProfileComponent],
  providers: [CompanyGuard]
})
export class CompanyModule { }
