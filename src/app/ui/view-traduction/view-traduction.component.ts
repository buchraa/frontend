import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Oeuvre } from 'src/app/model/oeuvre.model';
import { VersTraduction } from 'src/app/model/verTraduction.model';
import { ApiService } from 'src/app/services/api.service';
import * as $ from "jquery";

@Component({
  selector: 'app-view-traduction',
  templateUrl: './view-traduction.component.html',
  styleUrls: ['./view-traduction.component.css']
})
export class ViewTraductionComponent implements OnInit {

  viezText: boolean;
  object:Oeuvre; 
  ObjetId: string;
  routingSubscription: any; 
  allVers=[];
  vers=[];
  items = [];
  pageOfItems: Array<any>;
  length: number;
  disabled: boolean;
  versIntro=[];
 typeVer=[];
  constructor(private router: Router, private route: ActivatedRoute, public api: ApiService) { }


  ngOnInit(): void {    
    this.object = new Oeuvre();     
    this.routingSubscription = 
        this.route.params.subscribe(params => {
            console.log(params["id"]);
            if (params["id"]) {  
              this.ObjetId = params["id"]
              this.object.oeuvreId = params["id"]   
              this.api.getById('Oeuvre', params["id"]).subscribe(
                response => {
                this.object = response;
                this.getVers(this.ObjetId);
                console.log(this.object);                
              });
            }
        });
    
  }

  public getVers(uuid: any) {
    this.api.findItems(uuid).subscribe(
      (t) => {
        this.vers = t;   
        console.log(this.vers)  
        for (var i = 0; i < this.vers.length; i++) {
          if(this.vers[i].typeVers == "Prose"){
         this.versIntro.push(this.vers[i]);          
        }
        else this.typeVer.push(this.vers[i]);
  }
      },
      (error) => {
        console.log(error);
     }

    )
  }

 


  public getTraduc(object: VersTraduction){
    if(object.codeLangue == "FR") {
      this.viezText = true;
      return object.texte;
    }

    else return null;

  }

 
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }
 
  

}
