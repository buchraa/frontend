import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Vers } from 'src/app/model/vers.model';

@Component({
  selector: 'app-vers-manage',
  templateUrl: './vers-manage.component.html',
  styleUrls: ['./vers-manage.component.css']
})
export class VersManageComponent implements OnInit {
  vers = [];
  config: any;
  constructor(private router: Router, private api: ApiService) { }

  ngOnInit(): void {

    this.api.getList('vers').subscribe(
      (t) => {
        this.vers = t;
        console.log(this.vers);
       
      },
      (error) => {
        
       console.log(error);
     }

    )

     
    this.config = {
      itemsPerPage: 8,
      currentPage: 1,
      totalItems: this.vers.length
    
    }; 

  }

  pageChanged(event){
    this.config.currentPage = event;
  }
  
  goDetails(object: Vers) {
    this.router.navigate(["/edit-ver", object.versId]);
  }

  editItem(object: Vers) {
    this.router.navigate(["/edit-ver", object.versId]);
  }

  deleteFrom(object: Vers){
    this.api.deleteItem('Vers', object.versId).subscribe(
      (t) => {
        this.router.navigate(['/ver-manage']);
       
      },
      (error) => {        
       console.log(error);
     }

    )       
  }

}
