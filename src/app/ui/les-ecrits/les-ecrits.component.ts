import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/model/category.model';
import { Module } from 'src/app/model/module.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-les-ecrits',
  templateUrl: './les-ecrits.component.html',
  styleUrls: ['./les-ecrits.component.css']
})
export class LesEcritsComponent implements OnInit {
  module: Module;
  allCategories = [];
  categories = [];

  object:Module; 
  ObjetId: number;

  constructor(private router: Router, private route: ActivatedRoute, public api: ApiService) { }

  ngOnInit(): void {
    this.api.getModule('Ecrits de Cheikh A. Bamba').subscribe(
      (t) => {
        this.module = t;
        this.ObjetId = this.module.moduleId;
        console.log(this.module.moduleId);
       
      },
      (error) => {
        
       console.log(error);
     }

    )

    this.api.getList('Categories').subscribe(
      (t) => {
        this.allCategories = t; 
        setTimeout(() => {
          for (var i = 0; i < this.allCategories.length; i++) {
            if(this.allCategories[i].module.moduleId = this.ObjetId){
           this.categories.push(this.allCategories[i]);          
    }      
}
        }, 2000);      
        
      console.log(this.categories);
      },
      (error) => {
        
       console.log(error);
     }

    )
  }
  goDetails(object: Category) {
    this.router.navigate(["/view-category", object.categoryId]);
  }

}
