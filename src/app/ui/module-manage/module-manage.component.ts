import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Module } from 'src/app/model/module.model';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogContentDeleteComponent } from '../dialog-content-delete/dialog-content-delete.component';

@Component({
  selector: 'app-module-manage',
  templateUrl: './module-manage.component.html',
  styleUrls: ['./module-manage.component.css']
})
export class ModuleManageComponent implements OnInit {
  items = [];
  pageOfItems: Array<any>;
  constructor(public matDialog: MatDialog, private router: Router, private api: ApiService) { }

  ngOnInit(): void {

    this.api.getList('Modules').subscribe(
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

  goDetails(object: Module) {
    this.router.navigate(["/module-detail", object.moduleId]);
  }

  editItem(object: Module) {
    this.router.navigate(["/edit-module", object.moduleId]);
  }

  
  openModal(object: Module) {
    const dialogConfig = new MatDialogConfig();
    // user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "250px";
    dialogConfig.width = "350px";
    
    //passing data to modal component
    dialogConfig.data = { itemId : object.moduleId, titre: 'Module' }
    const modalDialog = this.matDialog.open(DialogContentDeleteComponent, dialogConfig);
    
  }

  

}
