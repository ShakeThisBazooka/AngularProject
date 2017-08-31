import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthService {

  private cookieName: string;
  private cookieId: string;

  constructor(private cookieService: CookieService) {
    this.cookieName = 'username';
    this.cookieId = 'userId';
  }

  getLoggedUser(): string {
    const username: string = this.cookieService.get(this.cookieName);
    if (!username) {
      return undefined;
    }

    return username;
  }

  getLoggedUserId(): string {
    const id: string = this.cookieService.get(this.cookieId);
    if (!id) {
      return undefined;
    }

    return id;
  }

  isLogged() {
    console.log('cookieCheck', this.cookieService.check(this.cookieName));
    return this.cookieService.check(this.cookieName);
  }

  setLoggedUser(username: string) {
    const cookieDate: Date = new Date(2060, 1, 1);
    this.cookieService.set(this.cookieName, username, cookieDate);
  }

  setLoggedUserId(id: string) {
    const cookieDate: Date = new Date(2060, 1, 1);
    this.cookieService.set(this.cookieId, id, cookieDate);
  }

  clearUserCookie(): void {
    this.cookieService.delete(this.cookieName);
  }
}
