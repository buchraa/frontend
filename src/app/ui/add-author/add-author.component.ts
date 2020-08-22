import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import { Router } from '@angular/router';
import { Author } from '../../model/author.model';


@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {
  object: Author;
 

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit(): void {
    this.object = new Author();
  }

  
  uploadSubmit()  {
    console.log(this.object);
   this.api.saveOrUpdateItem('addOrUpdateAuthor', this.object).subscribe(
      data => {        
        this.router.navigate(['/author-manage']);
      },
      error => {
        console.log(error);

      });
  }

}
