import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Oeuvre } from 'src/app/model/oeuvre.model';
import { VersTraduction } from 'src/app/model/verTraduction.model';
import { ApiService } from 'src/app/services/api.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogContentPdfComponent } from '../dialog-content-pdf/dialog-content-pdf.component';
import { AudioService } from "../../services/audio.service";
import { StreamState } from "../../interfaces/stream-state";
import { DomSanitizer } from '@angular/platform-browser';
import { Vers } from 'src/app/model/vers.model';

@Component({
  selector: 'app-view-vers',
  templateUrl: './view-vers.component.html',
  styleUrls: ['./view-vers.component.css']
})
export class ViewVersComponent implements OnInit {

  object: any; 
  ObjetId: string;
  routingSubscription: any; 


 constructor(private router: Router, private route: ActivatedRoute, public api: ApiService) { }

  ngOnInit(): void {
    this.routingSubscription = 
        this.route.params.subscribe(params => {
            console.log(params["id"]);
            if (params["id"]) {   
              this.api.getById('Vers', params["id"]).subscribe(
                response => {
                this.object = response;
                              
              });
            }
        });
  }

}
