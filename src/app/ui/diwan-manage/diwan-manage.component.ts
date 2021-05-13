import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Diwan } from 'src/app/model/diwan.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogContentDeleteComponent } from '../dialog-content-delete/dialog-content-delete.component';

@Component({
  selector: 'app-diwan-manage',
  templateUrl: './diwan-manage.component.html',
  styleUrls: ['./diwan-manage.component.css']
})
export class DiwanManageComponent implements OnInit {
  items = [];
  itemId: number;
  pageOfItems: Array<any>;
  constructor(public matDialog: MatDialog, private router: Router, private api: ApiService) { }

  ngOnInit(): void {

    this.api.getList('Diwans').subscribe(
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
  
  goDetails(object: Diwan) {
    this.router.navigate(["/diwan-detail", object.diwanId]);
  }

  editItem(object: Diwan) {
    this.router.navigate(["/edit-diwan", object.diwanId]);
  }


  openModal(object: Diwan) {
    const dialogConfig = new MatDialogConfig();
    // user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "250px";
    dialogConfig.width = "350px";
    
    //passing data to modal component
    dialogConfig.data = { itemId : object.diwanId, titre: 'Diwan' }
    const modalDialog = this.matDialog.open(DialogContentDeleteComponent, dialogConfig);
    
  }

 


}
