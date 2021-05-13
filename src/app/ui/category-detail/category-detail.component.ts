import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";

import { Category } from '../../model/category.model';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {

  objectId: number;
  newObjectId: number;
  object: Category;
  routingSubscription: any; 

  constructor(private router: Router, private route: ActivatedRoute, public api: ApiService) { }

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
  }


}
