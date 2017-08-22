import { Component, OnInit } from '@angular/core';
import {HomeService} from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  info: string;
  constructor(private appService: HomeService) { }

  ngOnInit(): void {
    this.appService.getHomeInfo()
      .map((res) => res.json())
      .subscribe((response: any) => {
        this.info = response.info;
      });
  }

}
