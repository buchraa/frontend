import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse, HttpParams} from '@angular/common/http';
import { Observable, from } from 'rxjs';

import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

const baseUrl = environment. apiUrl;
const assetUrl = "../src/assets/images";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  images: any = ["/assets/images/ecrits.jpg","/assets/images/oeuvres.jpg","/assets/images/rechercher.jpg","/assets/images/media.jpg","/assets/images/qasidas.jpg","/assets/images/ouvrages.jpg"]

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

getOeuvre(uuId: string): Observable<any> {
  return this.http.get(`${baseUrl}/Oeuvre/ByTitre/${uuId}`);
}

getModule(uuId: string): Observable<any> {
  return this.http.get(`${baseUrl}/Module/ByName/${uuId}`);
}

getObjectByName(object: string, name: string): Observable<any> {
  return this.http.get(`${baseUrl}/${object}/ByName/${name}`);
}

getCategory(uuId: string): Observable<any> {
  return this.http.get(`${baseUrl}/Categorie/ByName/${uuId}`);
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
      case "Médiathèque du Mouridisme":
        return "/assets/images/media.jpg";
        break;  
      
      case "Poèmes (Qasidas)":
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
      case "Poésie" :
        return "/assets/images/qasidas.jpg";
        break; 
      case "Rècits oraux":
        return "/assets/images/récits.jpg";
        break;
      case "Sermons":
        return "/assets/images/sermons.jpg";
        break;
      case "Conférences":
        return "/assets/images/conferences.jpg";
        break;
      case "Musicographie":
        return "/assets/images/musicographie.jpg";
        break;
      case "Livres":
        return "/assets/images/livres.jpg";
        break;
        
      case "Thèses":
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

  sortByPremium(objectItem: any){
    var items = objectItem;
    console.log("Array",items);
    items.sort(function (a, b) {
    return a.numVers - b.numVers;
    });
  }

}