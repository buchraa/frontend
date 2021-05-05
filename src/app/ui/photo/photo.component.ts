import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Module } from 'src/app/model/module.model';
import { Category } from 'src/app/model/category.model';
import { DomSanitizer } from '@angular/platform-browser';



@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
 
  categorie: Category;
  oeuvres: any = [];
  categoryId: number;
  photos: any = [];


  constructor(public api: ApiService, private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {

    //get category
    this.api.getObjectByName('Categorie','Photos').subscribe(
      (t) => {
        this.categorie = t; 
        this.categoryId = this.categorie.categoryId;       
        console.log(this.categoryId);
       
      },
      (error) => {
        
       console.log(error);
     }

    )

    //get videos

    this.api.getList('oeuvres').subscribe(
      (t) => {
        this.oeuvres = t;     
        console.log(this.oeuvres)  
        console.log(this.categoryId);
        for (var i = 0; i < this.oeuvres.length; i++) {
                  if(this.oeuvres[i].category.categoryId == this.categoryId){
                 this.photos.push(this.oeuvres[i]);          
          }      
      }
      console.log(this.photos);
      },
      (error) => {
        
       console.log(error);
     }

    )


  }

  public getMediaPath(url) {
    return (this._sanitizer.bypassSecurityTrustResourceUrl(url) as any);
 }
}
