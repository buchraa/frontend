import { Component, OnInit } from '@angular/core';

import {UserService} from "../../services/user.service";
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../model/user.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogContentDeleteComponent } from '../dialog-content-delete/dialog-content-delete.component';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.css']
})
export class UserManagerComponent implements OnInit {
  items: any;
  object: User;
  length: Boolean;
  pageNb= 0;
  limit=8;
  totalPage: number;
  pageNumber: number;
  isdisabled: Boolean;
  constructor(public matDialog: MatDialog, private router: Router, private route: ActivatedRoute, private api: UserService) { }

  ngOnInit(): void {
    this.getUser()
     
  }

 getUser() {
  this.api.getUserList(this.pageNb, this.limit).subscribe(
    (t) => {
      this.items = t.content;
      this.totalPage = t.totalPages;  
      this.pageNumber = t.pageable.pageNumber;   
      console.log(this.items);
     
    },
    (error) => {
      
     console.log(error);
   }

  )  

 }

  editItem(object: User) {
    this.router.navigate(["/edit-user", object.id]);
  }

  deleteFrom(object: User){
    this.api.deleteUser(object.id).subscribe(
      (t) => {
        this.router.navigate(['/manage-user']);
       
      },
      (error) => {        
       console.log(error);
     }

    )
       
  }

  
  openModal(object: User) {
    const dialogConfig = new MatDialogConfig();
    // user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "250px";
    dialogConfig.width = "350px";
    
    //passing data to modal component
    dialogConfig.data = { itemId : object.id, titre: 'api/auth/user' }
    const modalDialog = this.matDialog.open(DialogContentDeleteComponent, dialogConfig);
    
  }

   
  public next(){   
    this.pageNb += 1;
    this.getUser();
    console.log(this.pageNb)
  }

  public preview(){   
    this.pageNb -= 1;
    this.getUser();
    console.log(this.pageNb)
  }

  public disablePrev(){
    return this.pageNumber == 0 ? true : false
  }
  
  public disable(){
    return this.pageNumber == (this.totalPage - 1) ? true : false
  }


}
