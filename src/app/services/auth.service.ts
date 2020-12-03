import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {Credentials} from '../model/credentials.model';
import { JwtResponse } from '../model/jwtResponse.model';

const API_URL = environment.apiUrl;
const TOKEN_COOKIE_NAME = 'BIBLIOTECH.AUTH.TOKEN';
const ROLE = 'USER_ROLE';

@Injectable({
    providedIn: 'root'
})
export class AuthService {


    constructor(
        private http: HttpClient
    ) { }   
  

public postToken(credential: Credentials): Observable<any> {
        return this.http.post(API_URL + '/api/auth/signin', credential)
    }

  public setToken(token:any) {
        localStorage.setItem(TOKEN_COOKIE_NAME, token);
    }

    public setRole(role:any) {
        localStorage.setItem(ROLE, role);
    }  

    public getToken(): string {
        return localStorage.getItem(`${TOKEN_COOKIE_NAME}`);
    }

    public getRole(): string {
        return localStorage.getItem(`${ROLE}`);
    }

    public hasToken(): boolean {
        return localStorage.getItem(TOKEN_COOKIE_NAME) != undefined;
    }

    public deleteToken() {
        localStorage.clear();
    }

    public handleToken(token: string) {
        const parsedToken = token;
        return parsedToken !== undefined;
    }

   

    private handleError(error: Response | any) {
        return throwError(error);
    }

    public activateUser(token: JwtResponse){
        return this.http.patch<JwtResponse>(API_URL + '/user/activate', token)
    }


   

}
