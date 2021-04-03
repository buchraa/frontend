import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Module } from 'src/app/model/module.model';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css']
})
export class WebComponent implements OnInit {

  module:Module; 
  ObjetId: number;
  categorie: any = [];
  webFiles: any = [];
  categoryId: number;
  allOeuvres=[];

  constructor(public api: ApiService) { }

  ngOnInit(): void {

     //get Category

     this.api.getObjectByName('Categorie','Web').subscribe(
      (t) => {
        this.categorie = t; 
        this.categoryId = this.categorie.categoryId;       
        console.log(this.categoryId);
       
      },
      (error) => {
        
       console.log(error);
     }

    )

       //get list of webFiles

    this.api.getList('oeuvres').subscribe(
      (t) => {
        this.allOeuvres = t;     
        console.log(this.allOeuvres)  
        console.log(this.categoryId);
        for (var i = 0; i < this.allOeuvres.length; i++) {
                  if(this.allOeuvres[i].category.categoryId == this.categoryId){
                 this.webFiles.push(this.allOeuvres[i]);          
          }      
      }
      console.log(this.webFiles);
      },
      (error) => {
        
       console.log(error);
     }

    )


  }

}
