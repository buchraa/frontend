import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {User} from './../model/user.model';


const API_URL = environment.apiUrl;

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(
        private http: HttpClient
    ) { }

    public getUsers() {
      return this.http.get(API_URL + '/users');
    }

    public getUser(uuid:string): Observable<User> {
      return this.http.get<User>(API_URL + '/user/'+uuid);
    }

    public getUserCurrent(): Observable<User> {
      return this.http.get<User>(API_URL + '/api/auth/user/current');
    }

    public postUser(user:User): Observable<User> {
      return this.http.post<User>(API_URL + '/api/auth/signup', user);
    }



    public patchUserActivate(token:string): Observable<User> {
      return this.http.patch<User>(API_URL + '/user/activate', token);
    }

    public patchUserCurrent(user:User): Observable<User> {
      return this.http.patch<User>(API_URL + '/user/current', user);
    }

    public patchUserSpecific(uuid:string, user:User): Observable<User> {
      return this.http.patch<User>(API_URL + '/user' +uuid, user);
    }
}