import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../../shared/services/home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  info: string;
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.getHomeInfo()
      .subscribe((response: any) => {
        this.info = response.info;
      });
  }

}
