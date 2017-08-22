import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthService {

  private cookieName: string;

  constructor(private cookieService: CookieService) {
    this.cookieName = 'safe-elks';
  }

  getLoggedUser(): string {
    const username: string = this.cookieService.get(this.cookieName);
    if (!username) {
      return undefined;
    }

    return username;
  }

  isLogged() {
    return this.cookieService.check(this.cookieName);
  }

  setLoggedUser(username: string) {
    const cookieDate: Date = new Date(2060, 1, 1);
    this.cookieService.set(this.cookieName, username, cookieDate);
  }

  clearUserCookie(): void {
    this.cookieService.delete(this.cookieName);
  }
}
