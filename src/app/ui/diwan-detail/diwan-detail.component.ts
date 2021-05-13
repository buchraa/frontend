import { Component, OnInit } from '@angular/core';
import { Diwan } from 'src/app/model/diwan.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-diwan-detail',
  templateUrl: './diwan-detail.component.html',
  styleUrls: ['./diwan-detail.component.css']
})
export class DiwanDetailComponent implements OnInit {

  object: Diwan; 
  routingSubscription: any; 

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit(): void {    
    this.object = new Diwan();     
    this.routingSubscription = 
        this.route.params.subscribe(params => {
            console.log(params["id"]);
            if (params["id"]) {
              this.object.diwanId = params["id"]
              this.api.getById('Diwan', params["id"]).subscribe(
                response => {
                this.object = response;
                console.log(this.object);                
              });
            }
        });
    

  }

}
