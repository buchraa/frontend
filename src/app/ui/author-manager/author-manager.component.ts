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
  }
  
  goDetails() {
    this.router.navigate(["/"]);
  }

  deleteFrom(object: Author){
    this.api.deleteItem('Author', object.authorId).subscribe(
      (t) => {
        this.router.navigate(['/']);
        window.location.reload();
      },
      (error) => {        
       console.log(error);
     }

    )
   
  }
}
