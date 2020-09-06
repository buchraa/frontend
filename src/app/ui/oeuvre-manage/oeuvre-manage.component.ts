import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import { Router } from '@angular/router';
import { Oeuvre } from '../../model/oeuvre.model';

@Component({
  selector: 'app-oeuvre-manage',
  templateUrl: './oeuvre-manage.component.html',
  styleUrls: ['./oeuvre-manage.component.css']
})
export class OeuvreManageComponent implements OnInit {
  oeuvres = [];
  object: Oeuvre;

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit(): void {

    this.api.getList('oeuvres').subscribe(
      (t) => {
        this.oeuvres = t;
        console.log(this.oeuvres);
       
      },
      (error) => {
        
       console.log(error);
     }

    )
  }
  
  goDetails(object: Oeuvre) {
    this.router.navigate(["/edit-oeuvre", object.oeuvreId]);
  }

  editItem(object: Oeuvre) {
    this.router.navigate(["/edit-oeuvre", object.oeuvreId]);
  }

  deleteFrom(object: Oeuvre){
    this.api.deleteItem('Oeuvre', object.oeuvreId).subscribe(
      (t) => {
        this.router.navigate(['/oeuvre-manage']);
       
      },
      (error) => {        
       console.log(error);
     }

    )       
  }

}
