import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable'
import "rxjs/add/operator/map";


@Injectable()
export class HomeService {
  constructor(private http: Http) {
  }

  getHomeInfo(): Observable<Response> {
    return this.http.get('api/home').map(res => {
      console.log(res.json())
      return res.json()
    })
  }
}
