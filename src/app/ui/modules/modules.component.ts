import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Module } from 'src/app/model/module.model';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent implements OnInit {
  modules = [];
 


  constructor(private router: Router, public api: ApiService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
   
    this.api.getList('Modules').subscribe(
      (t) => {
        this.modules = t;
        console.log(this.modules);
       
      },
      (error) => {
        
       console.log(error);
     }

    )
  }
  
  goDetails(object: Module) {
    this.router.navigate(["/view-module", object.moduleId]);
  }

  goToPage(object: Module) {
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
      case "Médiathèque du Mouridisme":
        this.router.navigate(["/Modules/mediatheque-mouridisme"]);
        break;
      default:
        this.router.navigate(["/"]);  
    }
  }

}
