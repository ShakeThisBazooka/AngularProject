import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { companyRouting } from './company.routes';
import { SharedModule } from '../shared/shared.module';
import { CompanyGuard } from './guards/company.guard';


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
