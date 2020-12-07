import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  allOeuvres=[];
  searchText: string;


  constructor( public api: ApiService) { }

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
  }

}

