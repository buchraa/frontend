import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Vers } from 'src/app/model/vers.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogContentDeleteComponent } from '../dialog-content-delete/dialog-content-delete.component';

@Component({
  selector: 'app-vers-manage',
  templateUrl: './vers-manage.component.html',
  styleUrls: ['./vers-manage.component.css']
})
export class VersManageComponent implements OnInit {
  items= [];
  pageOfItems: Array<any>;
  pageNb= 0;
  limit=8;
  totalPage: number;
  pageNumber: number;
  isdisabled: Boolean;
  constructor(public matDialog: MatDialog, private router: Router, private api: ApiService) { }

  ngOnInit(): void {

    this.getVers();

    }

  public getVers(){
    this.api.getOeuvreList('vers', this.pageNb, this.limit).subscribe(
      (t) => {
        this.items = t.content; 
        this.totalPage = t.totalPages;  
        this.pageNumber = t.pageable.pageNumber;    
        console.log(t)  
     },
      (error) => { console.log(error) }
    )
  }

  
  public next(){   
    this.pageNb += 1;
    this.getVers();
    console.log(this.pageNb)
  }

  public preview(){   
    this.pageNb -= 1;
    this.getVers();
    console.log(this.pageNb)
  }

  public disablePrev(){
    return this.pageNumber == 0 ? true : false
  }
  
  public disable(){
    return this.pageNumber == (this.totalPage - 1) ? true : false
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }
  
  goDetails(object: Vers) {
    this.router.navigate(["/edit-ver", object.versId]);
  }

  editItem(object: Vers) {
    this.router.navigate(["/edit-ver", object.versId]);
  }

   
  openModal(object: Vers) {
    const dialogConfig = new MatDialogConfig();
    // user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "250px";
    dialogConfig.width = "350px";
    
    //passing data to modal component
    dialogConfig.data = { itemId : object.versId, titre: 'Vers' }
    const modalDialog = this.matDialog.open(DialogContentDeleteComponent, dialogConfig);
    
  }
       
  

}
