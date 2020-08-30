import { Component, OnInit } from '@angular/core';

import {ApiService} from "../../services/api.service";
import { Router } from '@angular/router';
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

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit(): void {    
    this.object = new Category();
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
