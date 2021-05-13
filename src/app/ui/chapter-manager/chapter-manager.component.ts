import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";

import { Chapter } from '../../model/chapter.model';
import { Router, ActivatedRoute } from '@angular/router';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogContentDeleteComponent } from '../dialog-content-delete/dialog-content-delete.component';

@Component({
  selector: 'app-chapter-manager',
  templateUrl: './chapter-manager.component.html',
  styleUrls: ['./chapter-manager.component.css']
})
export class ChapterManagerComponent implements OnInit {
  items = [];
  pageOfItems: Array<any>;
  constructor(public matDialog: MatDialog, private router: Router, private api: ApiService) { }

  ngOnInit(): void {

    this.api.getList('Chapters').subscribe(
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
  
  goDetails(object: Chapter) {
    this.router.navigate(["/chapter-detail", object.chapitreId]);
  }

  editItem(object: Chapter) {
    this.router.navigate(["/edit-chapter", object.chapitreId]);
  }


  openModal(object: Chapter) {
    const dialogConfig = new MatDialogConfig();
    // user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "250px";
    dialogConfig.width = "350px";
    
    //passing data to modal component
    dialogConfig.data = { itemId : object.chapitreId, titre: 'Chapter' }
    const modalDialog = this.matDialog.open(DialogContentDeleteComponent, dialogConfig);
    
  }




}
