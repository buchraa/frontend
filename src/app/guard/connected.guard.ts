import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../services/auth.service';
@Injectable({providedIn: 'root'})
export class ConnectedGuard implements CanActivate {


    role="ROLE_USER";

    constructor(
        private router: Router,
        private authenticationService: AuthService
    ) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        
        if ((this.authenticationService.hasToken()) && (this.authenticationService.getRole() != this.role) ) {
          return true;
        }
        this.router.navigate(['/login']);
    }
}
