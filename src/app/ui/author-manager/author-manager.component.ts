import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import { Router } from '@angular/router';
import { Author } from '../../model/author.model';


@Component({
  selector: 'app-author-manager',
  templateUrl: './author-manager.component.html',
  styleUrls: ['./author-manager.component.css']
})
export class AuthorManagerComponent implements OnInit {
  authors = [];
  object: Author;
  config: any;
  constructor(private router: Router, private api: ApiService) { }

  ngOnInit(): void {
    this.api.getList('Authors').subscribe(
      (t) => {
        this.authors = t;
        console.log(this.authors);
       
      },
      (error) => {
        
       console.log(error);
     }

    )

    this.config = {
      itemsPerPage: 8,
      currentPage: 1,
      totalItems: this.authors.length
    
    };
  }

  pageChanged(event){
    this.config.currentPage = event;
  }
  
  goDetails() {
    this.router.navigate(["/"]);
  }

  editItem(object: Author) {
    this.router.navigate(["/edit-author", object.authorId]);
  }


  deleteFrom(object: Author){
    this.api.deleteItem('Author', object.authorId).subscribe(
      (t) => {
        this.router.navigate(['/']);
       
      },
      (error) => {        
       console.log(error);
     }

    )
       
  }
}
