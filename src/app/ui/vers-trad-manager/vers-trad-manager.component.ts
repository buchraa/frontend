import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vers } from 'src/app/model/vers.model';
import { VersTraduction } from 'src/app/model/verTraduction.model';
import { ApiService } from 'src/app/services/api.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogContentDeleteComponent } from '../dialog-content-delete/dialog-content-delete.component';

@Component({
  selector: 'app-vers-trad-manager',
  templateUrl: './vers-trad-manager.component.html',
  styleUrls: ['./vers-trad-manager.component.css']
})
export class VersTradManagerComponent implements OnInit {
  items= [];
  pageOfItems: Array<any>;
  constructor(public matDialog: MatDialog, private router: Router, private api: ApiService) { }

  ngOnInit(): void {

    this.api.getList('versTraduction').subscribe(
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
  
  /*
  goDetails(object: VersTraduction) {
    this.router.navigate(["/edit-ver", object.versTradId]);
  }

  editItem(object: VersTraduction) {
    this.router.navigate(["/edit-ver", object.versTradId]);
  }*/


  
   
  openModal(object: VersTraduction) {
    const dialogConfig = new MatDialogConfig();
    // user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "250px";
    dialogConfig.width = "350px";
    
    //passing data to modal component
    dialogConfig.data = { itemId : object.versTradId, titre: 'versTrad' }
    const modalDialog = this.matDialog.open(DialogContentDeleteComponent, dialogConfig);
    
  }

}
