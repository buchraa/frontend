import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import { Router } from '@angular/router';
import { Oeuvre } from '../../model/oeuvre.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogContentDeleteComponent } from '../dialog-content-delete/dialog-content-delete.component';

@Component({
  selector: 'app-oeuvre-manage',
  templateUrl: './oeuvre-manage.component.html',
  styleUrls: ['./oeuvre-manage.component.css']
})
export class OeuvreManageComponent implements OnInit {
  items= [];
  object: Oeuvre;
  pageOfItems: Array<any>;
  constructor(public matDialog: MatDialog, private router: Router, private api: ApiService) { }

  ngOnInit(): void {

    this.api.getList('oeuvres').subscribe(
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

   
  goDetails(object: Oeuvre) {
    this.router.navigate(["/edit-oeuvre", object.oeuvreId]);
  }

  editItem(object: Oeuvre) {
    this.router.navigate(["/edit-oeuvre", object.oeuvreId]);
  }

   
  openModal(object: Oeuvre) {
    const dialogConfig = new MatDialogConfig();
    // user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "250px";
    dialogConfig.width = "350px";
    
    //passing data to modal component
    dialogConfig.data = { itemId : object.oeuvreId, titre: 'Oeuvre' }
    const modalDialog = this.matDialog.open(DialogContentDeleteComponent, dialogConfig);
    
  }

 

}
