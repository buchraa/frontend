import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vers } from 'src/app/model/vers.model';
import { VersTraduction } from 'src/app/model/verTraduction.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-vers-trad-manager',
  templateUrl: './vers-trad-manager.component.html',
  styleUrls: ['./vers-trad-manager.component.css']
})
export class VersTradManagerComponent implements OnInit {
  items= [];
  pageOfItems: Array<any>;
  constructor(private router: Router, private api: ApiService) { }

  ngOnInit(): void {

    this.api.getList('versTraduction').subscribe(
      (t) => {
        this.items = t;
        console.log(this.items);
       
      },
      (error) => {
        
       console.log(error);
     }
    )
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }
  
  /*
  goDetails(object: VersTraduction) {
    this.router.navigate(["/edit-ver", object.versTradId]);
  }

  editItem(object: VersTraduction) {
    this.router.navigate(["/edit-ver", object.versTradId]);
  }*/

  deleteFrom(object: VersTraduction){
    this.api.deleteItem('versTrad', object.versTradId).subscribe(
      (t) => {
        this.router.navigate(['/ver-manage']);
       
      },
      (error) => {        
       console.log(error);
     }

    )       
  }

}
