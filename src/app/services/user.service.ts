import { Injectable } from '@angular/core';
import { HttpClient,  HttpParams } from '@angular/common/http';

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


    getUserList(pageNB: number, limit: number): Observable<any>  {
      const opts = { params: new HttpParams({fromString: `pageNo=${pageNB}&pageSize=${limit}`}) };
      return this.http.get(`${API_URL}/api/auth/users`, opts);
    
    }

    public getUsers(): Observable<any>  {
      return this.http.get(`${API_URL}/api/auth/users`);
    }

    public deleteUser(id: number): Observable<any> {
      return this.http.delete(`${API_URL}/user/${id}`);
    }

    public getUserCurrent(): Observable<User> {
      return this.http.get<User>(`${API_URL}/api/auth/user/current`);
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

    public patchUserSpecific(user:User): Observable<any> {
      return this.http.post(`${API_URL}/api/auth/updateUser`, user);
    }
}