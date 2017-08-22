import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared/shared.module';
import { companyRouting } from 'app/company/company.routes';
import { CompanyGuard } from 'app/company/guards/company.guard';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    companyRouting
  ],
  declarations: [],
  providers: [CompanyGuard]
})
export class CompanyModule { }
