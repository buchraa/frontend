import { Component, OnInit } from '@angular/core';
import { Module } from 'src/app/model/module.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-module-detail',
  templateUrl: './module-detail.component.html',
  styleUrls: ['./module-detail.component.css']
})
export class ModuleDetailComponent implements OnInit {

  object:Module; 
  routingSubscription: any; 

  constructor(private router: Router, private route: ActivatedRoute, public api: ApiService) { }

  ngOnInit(): void {    
    this.object = new Module();     
    this.routingSubscription = 
        this.route.params.subscribe(params => {
            console.log(params["id"]);
            if (params["id"]) {
              this.object.moduleId = params["id"]
              this.api.getById('Module', params["id"]).subscribe(
                response => {
                this.object = response;
                console.log(this.object);                
              });
            }
        });
    

  }

}
