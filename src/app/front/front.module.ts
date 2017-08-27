import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { frontRouting } from './front.routes';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { FindAJobComponent } from './components/find-a-job/find-a-job.component';
import { HomeService } from '../shared/services/home.service';

@NgModule({
  imports: [
    CommonModule,
    frontRouting,
    SharedModule
  ],
  declarations: [HomeComponent, FindAJobComponent],
  providers: []
})
export class FrontModule { }
