import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import { Router } from '@angular/router';
import { Category } from '../../model/category.model';

@Component({
  selector: 'app-category-manager',
  templateUrl: './category-manager.component.html',
  styleUrls: ['./category-manager.component.css']
})
export class CategoryManagerComponent implements OnInit {
  categories = [];

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit(): void {

    this.api.getList('Categories').subscribe(
      (t) => {
        this.categories = t;
        console.log(this.categories);
       
      },
      (error) => {
        
       console.log(error);
     }

    )
  }
  
  goDetails() {
    this.router.navigate(["/"]);
  }

  editItem() {
    this.router.navigate(["/"]);
  }

  deleteFrom(object: Category){
    this.api.deleteItem('Categorie', object.categoryId).subscribe(
      (t) => {
        this.router.navigate(['/']);
       
      },
      (error) => {        
       console.log(error);
     }

    )       
  }

}
