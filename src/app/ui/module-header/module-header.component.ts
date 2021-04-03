import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-module-header',
  templateUrl: './module-header.component.html',
  styleUrls: ['./module-header.component.css']
})
export class ModuleHeaderComponent implements OnInit {

  @Input() estate_module: string;
  moduleId: number;
  module: any = [];


  constructor(public api: ApiService) { }

  ngOnInit(): void {
    //get module

    this.api.getObjectByName('Module', this.estate_module).subscribe(
      (t) => {
        this.module = t; 
        this.moduleId = this.module.moduleId;       
        console.log(this.moduleId);
       
      },
      (error) => {
        
       console.log(error);
     }

    )

  }

}
