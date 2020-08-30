import { Component, OnInit } from '@angular/core';

import {ApiService} from "../../services/api.service";
import { Router, ActivatedRoute } from '@angular/router';
import { Category } from '../../model/category.model';
import { Module } from 'src/app/model/module.model';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  object: Category; 
  modules: [];
  routingSubscription: any; 

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit(): void {    
    this.object = new Category();     
    this.routingSubscription = 
        this.route.params.subscribe(params => {
            console.log(params["id"]);
            if (params["id"]) {
              this.object.categoryId = params["id"]
              this.api.getById('Categorie', params["id"]).subscribe(
                response => {
                this.object = response;
                console.log(this.object);                
              });
            }
        });
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

  uploadSubmit()  {
  console.log(this.object);
   this.api.saveOrUpdateItem('addOrUpdateCategory', this.object).subscribe(
      data => {        
        this.router.navigate(['/category-manage']);
      },
      error => {
        console.log(error);

      });
  }

}
