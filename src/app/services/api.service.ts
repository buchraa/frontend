import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Router } from '@angular/router';


import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { Module } from '../model/module.model';

const baseUrl = environment.apiUrl;
const assetUrl = "../src/assets/images";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  images: any = ["/assets/images/ecrits.jpg","/assets/images/oeuvres.jpg","/assets/images/rechercher.jpg","/assets/images/media.jpg","/assets/images/qasidas.jpg","/assets/images/ouvrages.jpg"]

  constructor(private router: Router, private http: HttpClient) { }

httpOptions = {headers : new HttpHeaders({
  'Access-Control-Allow-Headers':'content-type, origin',
  'Content-Type':'application/json',
  'Access-Control-Allow-Origin':'*'
})}; 
  
getById(url: string, uiid: number): Observable<any> {
  return this.http.get(`${baseUrl}/${url}/${uiid}`);
}

get(url: string, uiid: string): Observable<any> {
  return this.http.get(`${baseUrl}/${url}/${uiid}`);
}

getOeuvre(uuId: string): Observable<any> {
  return this.http.get(`${baseUrl}/Oeuvre/ByTitre/${uuId}`);
}

getModule(uiid: string): Observable<any> {
  return this.http.get(`${baseUrl}/Module/ByName/${uiid}`);
}

getObjectByName(object: string, name: string): Observable<any> {
  return this.http.get(`${baseUrl}/${object}/ByName/${name}`);
}

getCategory(uiid: string): Observable<any> {
  return this.http.get(`${baseUrl}/Categorie/ByName/${uiid}`);
}

getList(url: string): Observable<any>  {
    return this.http.get(`${baseUrl}/${url}`);
}

saveOrUpdateItem(url: string, item): Observable<any> { 
  // It's an insert
 return  this.http.post(`${baseUrl}/${url}`, item);

}

SearchOeuvre(query: string): Observable<any>  {
  const opts = { params: new HttpParams({fromString: `titre=${query}`}) };
  return this.http.get(`${baseUrl}/oeuvres/query`, opts);

}

getOeuvreList(url: string, pageNB: number, limit: number): Observable<any>  {
  const opts = { params: new HttpParams({fromString: `pageNo=${pageNB}&pageSize=${limit}`}) };
  return this.http.get(`${baseUrl}/${url}`, opts);
}

getFiltredList(url: string, searchText: string, pageNB: number, limit: number): Observable<any>  {
  const opts = { params: new HttpParams({fromString: `searchText=${searchText}&pageNo=${pageNB}&pageSize=${limit}`}) };
  return this.http.get(`${baseUrl}/${url}`, opts);
}

findOeuvresForCategories(uiid: number, pageNB: number, limit: number): Observable<any>  {
  const opts = { params: new HttpParams({fromString: `pageNo=${pageNB}&pageSize=${limit}`}) };
  return this.http.get(`${baseUrl}/OeuvresForCategory/${uiid}`, opts);

}

findItems(uiid: number): Observable<any>  {
  return this.http.get(`${baseUrl}/VersForOeuvre/${uiid}`);

}


getVersList(url: string): Observable<any>  {
  return this.http.get(`${baseUrl}/${url}`);
}



 deleteItem(url: string, Id: number): Observable<any> {
    return this.http.delete(`${baseUrl}/${url}/${Id}`);
}

  getImageFromName(url: string){
    if(url != undefined) {
      return "/assets/images/" + url.toLowerCase() + ".jpg"
    }
    else 
    "/assets/images/rechercher.jpg"
    }

getRandImage(){
return this.images[Math.floor(Math.random() * Math.floor(this.images.length))];
}
    
//load image
  getImage(url: string){
   switch(url)
   {
      case "Ecrits de Cheikh A. Bamba":
      return "/assets/images/ecrits.jpg";
      break;

      case "Oeuvres du Mouridisme":
        return "/assets/images/oeuvres.jpg";
        break;
      
      case "Recherche sur le Mouridisme":
        return "/assets/images/rechercher.jpg";
        break;   
      case "M??diath??que du Mouridisme":
        return "/assets/images/media.jpg";
        break;  
      
      case "Po??mes (Qasidas)":
        return "/assets/images/qasidas.jpg";
        break;
      case  "Correspondances":
        return "/assets/images/manuscrits.jpg";
        break;
      case "Ouvrages didactiques": 
        return "/assets/images/ouvrages.jpg";
        break;
      case "Manuscrits":
        return "/assets/images/manuscrits.jpg";
        break;

      case "Biographies":
        return "/assets/images/biographie.jpg";
        break;
      case "Po??sie" :
        return "/assets/images/qasidas.jpg";
        break; 
      case "R??cits oraux": 
        return "/assets/images/ecrits.jpg";
        break;
      case "Sermons":
        return "/assets/images/sermons.jpg";
        break;
      case "Conf??rences":
        return "/assets/images/conferences.jpg";
        break;
      case "Musicographie":
        return "/assets/images/musicographie.jpg";
        break;
      case "Livres":
        return "/assets/images/livres.jpg";
        break;
        
      case "Th??ses":
        return "/assets/images/theses.png";
        break;
      case "Articles":
        return "/assets/images/articles.jpg";
        break;
      case "Outils":
        return "/assets/images/outil.png";
        break;

      case "Photos":
        return "/assets/images/photos.jpg";
        break;

      case "Audios":
        return "/assets/images/audios.jpg";
        break;
      case "Web" :
        return "/assets/images/web.jpg";
        break; 
      case "Wolofal" :
        return "/assets/images/wolafal.jpg";
        break;   
      default:
        return "/assets/images/ecrits.jpg";

   }
  }

  sortByVerId(objectItem: any){
    var items = objectItem;
    console.log("Array",items);
    items.sort(function (a, b) {
    return a.versId - b.versId;
    });
  }

  getImgPath(url: string){
    var http = new XMLHttpRequest();
    http.open("get", url, false);
        http.send();
        if (http.status != 404)
            return url
        else    
            return "/assets/images/biographie.jpg" ;    
    }



    goToPage(object: any) {
      switch(object.name)
      {
        case "Ecrits de Cheikh A. Bamba":
          this.router.navigate(["/Modules/ecrit-mouridisme"]);
        break;
  
        case "Oeuvres du Mouridisme":
          this.router.navigate(["/Modules/oeuvre-mouridisme"]);
          break;
        
        case "Recherche sur le Mouridisme":
          this.router.navigate(["/Modules/recherche-mouridisme"]);
          break;   
        case "M??diath??que du Mouridisme":
          this.router.navigate(["/Modules/mediatheque-mouridisme"]);
          break;
        default:
          this.router.navigate(["/"]);  
      }
    }

}

