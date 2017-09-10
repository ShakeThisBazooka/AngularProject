import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import { User } from '../models/user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { environment } from '../../../environments/environment';
import { handleError } from './miscellaneous';
import { UserInfo } from '../models/user-info';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  public login(user: User): Observable<any> {
        return this.http.post(`${environment.apiEndpoint}/login`, user)
        .map((res) => {
            localStorage.setItem('access_token', res.json().token);
            localStorage.setItem('user_role', res.json().role);
            localStorage.setItem('user_name', res.json().name);
            localStorage.setItem('user_id', res.json()._id);
            localStorage.setItem('user_info', res.json().info);
            localStorage.setItem('user_email', res.json().email);
        }).catch((error: Response) => handleError(error));
  }

  public register(user: User) {
        return this.http
            .post(`${environment.apiEndpoint}/register`, user)
            .map((res) => res.json());
  }

  public getUserInfo(): UserInfo {
        const userInfo: UserInfo = new UserInfo();
        userInfo.name = localStorage.getItem('user_name');
        userInfo.userId = localStorage.getItem('user_id');
        userInfo.role = localStorage.getItem('user_role');
        userInfo.info = localStorage.getItem('user_info');
        userInfo.email = localStorage.getItem('user_email');
        return userInfo;
  }

  public getLoggedIn(): boolean {
      return localStorage.getItem('access_token') ? true : false;
  }

  public logout(): void {
      localStorage.removeItem('user_role');
      localStorage.removeItem('user_name');
      localStorage.removeItem('user_id');
      localStorage.removeItem('user_info');
      localStorage.removeItem('user_email');
      localStorage.removeItem('access_token');
  }
}
