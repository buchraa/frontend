import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import { Router } from '@angular/router';
import { Author } from '../../model/author.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogContentDeleteComponent } from '../dialog-content-delete/dialog-content-delete.component';


@Component({
  selector: 'app-author-manager',
  templateUrl: './author-manager.component.html',
  styleUrls: ['./author-manager.component.css']
})
export class AuthorManagerComponent implements OnInit {
  items = [];
  object: Author;
  pageOfItems: Array<any>;
  constructor(public matDialog: MatDialog, private router: Router, private api: ApiService) { }

  ngOnInit(): void {
    this.api.getList('Authors').subscribe(
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

  goDetails(object: Author) {
    this.router.navigate(["/author-detail", object.authorId]);
  }

  editItem(object: Author) {
    this.router.navigate(["/edit-author", object.authorId]);
  }

  openModal(object: Author) {
    const dialogConfig = new MatDialogConfig();
    // user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "250px";
    dialogConfig.width = "350px";
    
    //passing data to modal component
    dialogConfig.data = { itemId : object.authorId, titre: 'Author' }
    const modalDialog = this.matDialog.open(DialogContentDeleteComponent, dialogConfig);
    
  }

  deleteFrom(object: Author){
    this.api.deleteItem('Author', object.authorId).subscribe(
      (t) => {
        this.router.navigate(['/']);
       
      },
      (error) => {        
       console.log(error);
     }

    )
       
  }
}
