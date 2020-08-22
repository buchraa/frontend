import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse, HttpParams} from '@angular/common/http';
import { Observable, from } from 'rxjs';

import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

const baseUrl = environment. apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
 
  constructor(private http: HttpClient) { }

httpOptions = {headers : new HttpHeaders({
  'Access-Control-Allow-Headers':'content-type, origin',
  'Content-Type':'application/json',
  'Access-Control-Allow-Origin':'*'
})}; 
  
getById(url: string, uuId: string): Observable<any> {
  return this.http.get(`${baseUrl}/${url}/${uuId}`);
}

get(url: string, uuId: string): Observable<any> {
  return this.http.get(`${baseUrl}/${url}/${uuId}`);
}

getList(url: string): Observable<any>  {
    return this.http.get(`${baseUrl}/${url}`);
}

saveOrUpdateItem(url: string, item): Observable<any> { 
  // It's an insert
 return  this.http.post(`${baseUrl}/${url}`, item);

}



 deleteItem(url: string, Id: number): Observable<any> {
    return this.http.delete(`${baseUrl}/${url}/${Id}`);
  }


}