import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/model/category.model';
import { Module } from 'src/app/model/module.model';
import { ApiService } from 'src/app/services/api.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-oeuvre-mouridisme',
  templateUrl: './oeuvre-mouridisme.component.html',
  styleUrls: ['./oeuvre-mouridisme.component.css']
})
export class OeuvreMouridismeComponent implements OnInit {
  module: Module;
  allCategories = [];
  categories = [];

  object:Module; 
  ObjetId: number;

  constructor(private router: Router, private route: ActivatedRoute, public api: ApiService, private spinner: NgxSpinnerService) { }

  
  ngOnInit(): void {
    this.spinner.show();
    this.api.getModule('Oeuvres du Mouridisme').subscribe(
      (t) => {
        this.module = t;
        this.ObjetId = this.module.moduleId;
        console.log(this.module.moduleId);
        this.spinner.hide();
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
            if(this.allCategories[i].module.moduleId == this.ObjetId){
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
