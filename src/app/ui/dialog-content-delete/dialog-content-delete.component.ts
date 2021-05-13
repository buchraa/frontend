import { Component, Input, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef , MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dialog-content-delete',
  templateUrl: './dialog-content-delete.component.html',
  styleUrls: ['./dialog-content-delete.component.css']
})
export class DialogContentDeleteComponent implements OnInit {
  itemId: number;
  titre: string;

  constructor(public dialogRef: MatDialogRef<DialogContentDeleteComponent>,
     public api: ApiService,  
     private router: Router,   
    @Inject(MAT_DIALOG_DATA) public sendedData: any) {
      this.itemId = sendedData.itemId;
      this.titre = sendedData.titre;
     }

  ngOnInit(): void {
  }

  deleteFrom(){
  console.log(this.titre + "---" + this.itemId)
   this.api.deleteItem(this.titre, this.itemId).subscribe(
      (t) => {
        this.router.navigate(['/admin']);
        this.dialogRef.close();
        window.location.reload();
      },
      (error) => {        
       console.log(error);
     }

    )      
  }

  // just close the modal
  closeModal() {
    this.dialogRef.close();
  }


}
