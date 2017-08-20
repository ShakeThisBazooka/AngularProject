import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HomeService {
  constructor(private http: Http) { }

  getHomeInfo(): Observable<Response> {
    return this.http.get('api/home');
  }
}
