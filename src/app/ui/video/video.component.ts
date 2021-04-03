import { Component, OnInit } from '@angular/core';
import { StreamState } from "../../interfaces/stream-state";
import { ApiService } from 'src/app/services/api.service';
import { Module } from 'src/app/model/module.model';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  files: Array<any> = [];
  state: StreamState;
  currentFile: any = {};
  module:Module; 
  ObjetId: number;
  panelOpenState = false;
  categorie: any = [];
  videos: any = [];
  categoryId: number;
  allOeuvres=[];

  constructor(public api: ApiService) { }

  ngOnInit(): void {
    this.api.getModule('Médiathèque du Mouridisme').subscribe(
      (t) => {
        this.module = t;
        this.ObjetId = this.module.moduleId;
       
      },
      (error) => {        
       console.log(error);
     })


     //get Category

     this.api.getObjectByName('Categorie','Vidéos').subscribe(
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
                 this.videos.push(this.allOeuvres[i]);          
          }      
      }
      console.log(this.videos);
      },
      (error) => {
        
       console.log(error);
     }

    )

    
  }

}
