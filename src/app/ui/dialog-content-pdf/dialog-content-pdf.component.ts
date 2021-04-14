import { Component, Input, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef , MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-dialog-content-pdf',
  templateUrl: './dialog-content-pdf.component.html',
  styleUrls: ['./dialog-content-pdf.component.css']
})
export class DialogContentPdfComponent implements OnInit {
  oeuvreId: number;
  oeuvre: any = [];
  pdfUrl: string;
  titre: string;
  @Input() estate_oeuvre: string;
  constructor(public dialogRef: MatDialogRef<DialogContentPdfComponent>,
     public api: ApiService,     
    @Inject(MAT_DIALOG_DATA) public sendedData: any) {
      this.pdfUrl = sendedData.pdfUrl;
      this.titre = sendedData.titre;
     }

  ngOnInit(): void {
  }

  // just close the modal
  closeModal() {
    this.dialogRef.close();
  }


}
