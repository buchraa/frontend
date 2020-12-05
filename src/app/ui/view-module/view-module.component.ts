import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Module } from 'src/app/model/module.model';
import { Category } from 'src/app/model/category.model';

@Component({
  selector: 'app-view-module',
  templateUrl: './view-module.component.html',
  styleUrls: ['./view-module.component.css']
})
export class ViewModuleComponent implements OnInit {
  @Input() module: string;

  allCategories = [];
  categories = [];

  object:Module; 
  ObjetId: string;
  routingSubscription: any; 

  constructor(private router: Router, private route: ActivatedRoute, public api: ApiService) { }

  ngOnInit(): void {
    this.api.getList('Categories').subscribe(
      (t) => {
        this.allCategories = t;       
        for (var i = 0; i < this.allCategories.length; i++) {
                  if(this.allCategories[i].module.moduleId == this.ObjetId){
                 this.categories.push(this.allCategories[i]);          
          }      
      }
      console.log(this.categories);
      },
      (error) => {
        
       console.log(error);
     }

    )


    this.object = new Module();     
    this.routingSubscription = 
        this.route.params.subscribe(params => {
            console.log(params["id"]);
            if (params["id"]) {           
       
              this.ObjetId = params["id"]
              this.object.moduleId = params["id"]
              

            console.log(this.categories);
              this.api.getById('Module', params["id"]).subscribe(
                response => {
                this.object = response;
                console.log(this.object);                
              });
            }
        });
    
  }

  goDetails(object: Category) {
    this.router.navigate(["/view-category", object.categoryId]);
  }

}
