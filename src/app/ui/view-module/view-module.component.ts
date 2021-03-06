import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
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

  constructor(private router: Router, private route: ActivatedRoute, public api: ApiService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
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
                this.getCategories(this.ObjetId);
                console.log(this.object);                
              });
            }
        });
    
  }

  public getCategories(uuid: any){
    this.api.getList('Categories').subscribe(
      (t) => {
        console.log(t);
        this.allCategories = t;       
        for (var i = 0; i < this.allCategories.length; i++) {
                  if(this.allCategories[i].module.moduleId == uuid){
                 this.categories.push(this.allCategories[i]);          
          }      
      }
      this.spinner.hide();
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
