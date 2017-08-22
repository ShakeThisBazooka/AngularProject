import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, Response } from '@angular/http';

@Injectable()
export class UserService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private registerUrl = '/api/users';
  private loginUrl = '/api/authenticate';
  private logoutUrl = '/api/logout';

  constructor(private http: Http) { }

  registerUser(user: User): Observable<Response> {
    return this.http.post(this.registerUrl, JSON.stringify(user), {
      headers: this.headers
    });
  }

  loginUser(user: User): Observable<Response> {
    return this.http.post(this.loginUrl, JSON.stringify({
      username: user.name, password: user.password
    }), {
      headers: this.headers
    });
  }

  logoutUser(): Observable<Response> {
    return this.http.get(this.logoutUrl);
  }
}
