import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";

import { Category } from '../../model/category.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  
  objectId: number;
  newObjectId: number;
  object: Category;
  routingSubscription: any; 

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit(): void {
    this.object = new Category();
    this.routingSubscription = 
        this.route.params.subscribe(params => {
            console.log(params["id"]);
            if (params["id"]) {
              this.object.categoryId = params["id"]
              this.api.getById('Category', params["id"]).subscribe(
                response => {
                this.object = response;
                console.log(this.object);                
              });
            }
        });
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
