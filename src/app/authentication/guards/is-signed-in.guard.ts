import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../shared/services/auth.service';

@Injectable()
export class IsSignedInGuard implements CanActivate {

  public constructor(private _router: Router, private authService: AuthService) {
    }

    public canActivate(): Observable<boolean> | boolean{
      if (this.authService.isLogged()) {
      console.log('User is already logged in!');

      this.router.navigateByUrl('');
    }
    }
}
