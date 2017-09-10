import {
  MaterialModule,
  MdButtonModule,
  MdCardModule,
  MdIconModule,
  MdSelectModule,
  MdToolbarModule,
  MdTooltipModule
} from '@angular/material';

import { CommonModule } from '@angular/common';
import { FindAJobComponent } from './components/find-a-job/find-a-job.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { JobDetailComponent } from './components/job-detail/job-detail.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { frontRouting } from './front.routes';

@NgModule({
  imports: [
    CommonModule,
    frontRouting,
    SharedModule,
    MdToolbarModule,
    FlexLayoutModule,
    MdSelectModule,
    FormsModule,
    MdCardModule,
    MdIconModule,
    MdTooltipModule,
    MdButtonModule,
    MaterialModule
  ],
  declarations: [HomeComponent, FindAJobComponent, JobDetailComponent],
  providers: []
})
export class FrontModule { }
