import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Oeuvre } from 'src/app/model/oeuvre.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-view-oeuvre',
  templateUrl: './view-oeuvre.component.html',
  styleUrls: ['./view-oeuvre.component.css']
})
export class ViewOeuvreComponent implements OnInit {

  panelOpenState = false;
  object:Oeuvre; 
  ObjetId: string;
  routingSubscription: any; 
  allVers=[];
  vers=[];
  searchText: string;

  constructor(private router: Router, private route: ActivatedRoute, public api: ApiService) { }


  ngOnInit(): void {

    this.api.getList('vers').subscribe(
      (t) => {
        this.allVers = t;     
        console.log(this.allVers)  
        for (var i = 0; i < this.allVers.length; i++) {
                  if(this.allVers[i].oeuvre.oeuvreId == this.ObjetId){
                 this.vers.push(this.allVers[i]);          
          }      
      }
      console.log(this.vers);
      },
      (error) => {
        
       console.log(error);
     }

    )


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
                console.log(this.object);                
              });
            }
        });
    
  }

}
