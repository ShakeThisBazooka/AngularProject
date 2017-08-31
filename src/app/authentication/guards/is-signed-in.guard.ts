import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../shared/services/auth.service';

@Injectable()
export class IsSignedInGuard implements CanActivate {

  public constructor(private router: Router, private authService: AuthService) {
    }

    public canActivate(): Observable<boolean> | boolean {
      if (this.authService.isLogged()) {
        this.router.navigateByUrl('');
        return false;
      }
      return true;
    }
}
