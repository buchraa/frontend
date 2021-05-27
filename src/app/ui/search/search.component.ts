import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Oeuvre } from 'src/app/model/oeuvre.model';
import { ApiService } from 'src/app/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FilterPipe} from 'src/app/filter.pipe';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ FilterPipe]
})
export class SearchComponent implements OnInit {
  allOeuvres=[];
  searchText: string;
  config: any;
  isAdmin = this.auth.isAdmin();
  length: Boolean;
  constructor( public api: ApiService, private router: Router, public auth: AuthService, public filter: FilterPipe) { }

  ngOnInit(): void {
    
    this.api.getList('oeuvres').subscribe(
      (t) => {
        this.allOeuvres = t;     
        console.log(this.allOeuvres)  
        this.length = this.allOeuvres.length > 10 ?  true : false;
        
      },
      (error) => {
        
       console.log(error);
     }

    )

    this.config = {
      itemsPerPage: 10,
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

  viewTraduc(object: Oeuvre) {
    this.router.navigate(["/view-traduction", object.oeuvreId]);
  }


}

