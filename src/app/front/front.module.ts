import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { frontRouting } from './front.routes';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { FindAJobComponent } from './components/find-a-job/find-a-job.component';
import {
  MdToolbarModule, MdSelectModule,
  MdCardModule, MdIconModule, MdTooltipModule,
  MdButtonModule, MaterialModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { JobDetailComponent } from './components/job-detail/job-detail.component';

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
