import { Component, OnInit } from '@angular/core';
import { Module } from 'src/app/model/module.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Diwan } from 'src/app/model/diwan.model';

@Component({
  selector: 'app-add-module',
  templateUrl: './add-module.component.html',
  styleUrls: ['./add-module.component.css']
})
export class AddModuleComponent implements OnInit {

  object:Module; 
  routingSubscription: any; 

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) { }

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

  uploadSubmit()  {
  console.log(this.object);
   this.api.saveOrUpdateItem('addOrUpdateModule', this.object).subscribe(
      data => {        
        this.router.navigate(['/module-manage']);
      },
      error => {
        console.log(error);

      });
  }

}
