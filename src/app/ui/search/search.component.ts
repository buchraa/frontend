import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Oeuvre } from 'src/app/model/oeuvre.model';
import { ApiService } from 'src/app/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  allOeuvres=[];
  searchText: string;
  config: any;
  isAdmin = this.auth.isAdmin();
  constructor( public api: ApiService, private router: Router, public auth: AuthService) { }

  ngOnInit(): void {
    
    this.api.getList('oeuvres').subscribe(
      (t) => {
        this.allOeuvres = t;     
        console.log(this.allOeuvres)  
        
      },
      (error) => {
        
       console.log(error);
     }

    )

    this.config = {
      itemsPerPage: 8,
      currentPage: 1,
      totalItems: this.allOeuvres.length
    
    };
  }

  pageChanged(event){
    this.config.currentPage = event;
  }

  goDetails(object: Oeuvre) {
    this.router.navigate(["/view-oeuvre", object.oeuvreId]);
  }

  editItem(object: Oeuvre) {
    this.router.navigate(["/edit-oeuvre", object.oeuvreId]);
  }


}

