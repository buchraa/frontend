import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthService } from './services/auth.service';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor
{
  constructor(
    private router: Router,
    private authenticationService: AuthService
      ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
    {
        if( this.authenticationService.hasToken() == true )
        {
            req = req.clone({
                setHeaders: {
                    'Authorization': 'Bearer '+ this.authenticationService.getToken()
                },
            });
        }

        return next.handle(req).pipe(catchError((error) => this.handleAuthErrorOrReThrow(error)));
    }

    private handleAuthErrorOrReThrow(err: HttpErrorResponse): Observable<any>
    {
        if (err.status === 401)
        {
            localStorage.clear();
            this.router.navigateByUrl('/login');
            return of(err.message);
        }
        return throwError(err);
    }
}