import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Diwan } from 'src/app/model/diwan.model';
import { Module } from 'src/app/model/module.model';

@Component({
  selector: 'app-module-manage',
  templateUrl: './module-manage.component.html',
  styleUrls: ['./module-manage.component.css']
})
export class ModuleManageComponent implements OnInit {
  modules = [];
  config: any;
  constructor(private router: Router, private api: ApiService) { }

  ngOnInit(): void {

    this.api.getList('Modules').subscribe(
      (t) => {
        this.modules = t;
        console.log(this.modules);
       
      },
      (error) => {
        
       console.log(error);
     }

    )

    this.config = {
      itemsPerPage: 8,
      currentPage: 1,
      totalItems: this.modules.length
    
    }; 
  }

  pageChanged(event){
    this.config.currentPage = event;
  }
  
  goDetails(object: Module) {
    this.router.navigate(["/edit-module", object.moduleId]);
  }

  editItem(object: Module) {
    this.router.navigate(["/edit-module", object.moduleId]);
  }

  deleteFrom(object: Module){
    this.api.deleteItem('Module', object.moduleId).subscribe(
      (t) => {
        this.router.navigate(['/']);
       
      },
      (error) => {        
       console.log(error);
     }

    )       
  }



}
