import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Http, Headers, Response } from '@angular/http';
import { User } from '../models/user';

@Injectable()
export class UserService {
  private headers = new Headers({ 'Content-Type': 'application/json' });

  private registerUrl = '/api/users';
  private loginUrl = '/api/authenticate';
  private logoutUrl = '/api/logout';
  private profileUrl = '/api/users/';

  constructor(private http: Http) { }

  registerUser(user: User): Observable<Response> {
    return this.http.post(this.registerUrl, JSON.stringify(user), {
      headers: this.headers
    }).map((res) => res.json());
  }

  loginUser(user: User): Observable<Response> {
    return this.http.post(this.loginUrl, JSON.stringify({
      username: user.name, password: user.password
    }), {
      headers: this.headers
    }).map((res) => res.json());
  }

  logoutUser(): Observable<Response> {
    return this.http.get(this.logoutUrl).map((res) => res.json());
  }

  getProfile(id: string): Observable<Response> {
    return this.http.get(this.profileUrl + id).map((res) => res.json());
  }
}
