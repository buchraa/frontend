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
  items = [];
  pageOfItems: Array<any>;
  constructor(private router: Router, private api: ApiService) { }

  ngOnInit(): void {

    this.api.getList('Categories').subscribe(
      (t) => {
        this.items = t;
        console.log(this.items);
       
      },
      (error) => {
        
       console.log(error);
     }

    )

  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

  goDetails() {
    this.router.navigate(["/"]);
  }

  editItem(object: Category) {
    this.router.navigate(["/edit-category", object.categoryId]);
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
