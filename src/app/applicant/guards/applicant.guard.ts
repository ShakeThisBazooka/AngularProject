import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../../shared/services/user.service';

@Injectable()
export class ApplicantGuard implements CanActivate {
  // TODO implement guard checking user role and forwarding

  public constructor(private router: Router, private userService: UserService) {
  }

  public canActivate(): Observable<boolean> | boolean {
    if (!this.userService.getLoggedIn()) {
      this.router.navigate(['auth/login']);
      return false;
    } else {
      if (this.userService.getUserInfo().role === 'applicant') {
        this.router.navigate(['applicant/profile']);
        return true;
      }
      this.router.navigate(['home']);
      return false;
    }

  }
}
