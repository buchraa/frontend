import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() estate_category: string;
  categoryId: number;
  categorie: any = [];


  constructor(public api: ApiService) { }

  ngOnInit(): void {
    //get Category

    this.api.getObjectByName('Categorie', this.estate_category).subscribe(
      (t) => {
        this.categorie = t; 
        this.categoryId = this.categorie.categoryId;       
        console.log(this.categoryId);
       
      },
      (error) => {
        
       console.log(error);
     }

    )

  }

}
