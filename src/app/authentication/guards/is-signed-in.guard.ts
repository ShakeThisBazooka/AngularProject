import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../../shared/services/user.service';

@Injectable()
export class IsSignedInGuard implements CanActivate {

  public constructor(private router: Router, private userService: UserService) {
    }

    public canActivate(): Observable<boolean> | boolean {
      if (this.userService.getLoggedIn()) {
        this.router.navigateByUrl('');
        return false;
      }
      return true;
    }
}
