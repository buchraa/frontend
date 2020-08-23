import { Component, OnInit } from '@angular/core';

import {ApiService} from "../../services/api.service";
import { Router } from '@angular/router';
import { Category } from '../../model/category.model';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  object: Category;

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit(): void {
    this.object = new Category();
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
