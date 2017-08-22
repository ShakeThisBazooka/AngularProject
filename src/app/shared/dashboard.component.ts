import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-shared-dashboard',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `
})
export class DashboardComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
