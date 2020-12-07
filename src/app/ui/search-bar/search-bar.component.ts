import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  allOeuvres=[];
  @Input() estate_category: string;


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
