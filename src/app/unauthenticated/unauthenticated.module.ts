import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindAJobComponent } from 'app/unauthenticated/components/find-a-job/find-a-job.component';
import { HomeComponent } from 'app/unauthenticated/components/home/home.component';
import { unAuthRouting } from 'app/unauthenticated/unauthenticated.routes';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    unAuthRouting,
    SharedModule
  ],
  declarations: [HomeComponent, FindAJobComponent]
})
export class UnauthenticatedModule { }
