import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import { Router } from '@angular/router';
import { Author } from '../../model/author.model';
import { JwPaginationModule } from 'jw-angular-pagination';


@Component({
  selector: 'app-author-manager',
  templateUrl: './author-manager.component.html',
  styleUrls: ['./author-manager.component.css']
})
export class AuthorManagerComponent implements OnInit {
  items = [];
  object: Author;
  pageOfItems: Array<any>;
  constructor(private router: Router, private api: ApiService) { }

  ngOnInit(): void {
    this.api.getList('Authors').subscribe(
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
