import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-shared-dashboard',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
  `
})
export class DashboardComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
