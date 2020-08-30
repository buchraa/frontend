import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../services/auth.service';
@Injectable({providedIn: 'root'})
export class NotConnectedGuard implements CanActivate {

    constructor(
        private router: Router,
        private authenticationService: AuthService
    ) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authenticationService.hasToken()) {
          this.router.navigate(['/']);
          return false;
        }
        return true;

    }
}
