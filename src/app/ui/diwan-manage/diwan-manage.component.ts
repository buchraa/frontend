import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Diwan } from 'src/app/model/diwan.model';

@Component({
  selector: 'app-diwan-manage',
  templateUrl: './diwan-manage.component.html',
  styleUrls: ['./diwan-manage.component.css']
})
export class DiwanManageComponent implements OnInit {
  diwans = [];

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit(): void {

    this.api.getList('Diwans').subscribe(
      (t) => {
        this.diwans = t;
        console.log(this.diwans);
       
      },
      (error) => {
        
       console.log(error);
     }

    )
  }
  
  goDetails(object: Diwan) {
    this.router.navigate(["/edit-diwan", object.diwanId]);
  }

  editItem(object: Diwan) {
    this.router.navigate(["/edit-diwan", object.diwanId]);
  }

  deleteFrom(object: Diwan){
    this.api.deleteItem('Diwan', object.diwanId).subscribe(
      (t) => {
        this.router.navigate(['/']);
       
      },
      (error) => {        
       console.log(error);
     }

    )       
  }


}
