import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import { Router } from '@angular/router';
import { Category } from '../../model/category.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogContentDeleteComponent } from '../dialog-content-delete/dialog-content-delete.component';

@Component({
  selector: 'app-category-manager',
  templateUrl: './category-manager.component.html',
  styleUrls: ['./category-manager.component.css']
})
export class CategoryManagerComponent implements OnInit {
  items = [];
  pageOfItems: Array<any>;
  constructor(public matDialog: MatDialog, private router: Router, private api: ApiService) { }

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

  goDetails(object: Category) {
    this.router.navigate(["/category-detail", object.categoryId]);
  }

  editItem(object: Category) {
    this.router.navigate(["/edit-category", object.categoryId]);
  }

  openModal(object: Category) {
    const dialogConfig = new MatDialogConfig();
    // user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "250px";
    dialogConfig.width = "350px";
    
    //passing data to modal component
    dialogConfig.data = { itemId : object.categoryId, titre: 'Categorie' }
    const modalDialog = this.matDialog.open(DialogContentDeleteComponent, dialogConfig);
    
  }


}
