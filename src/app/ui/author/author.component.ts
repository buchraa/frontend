import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ApiService} from "../../services/api.service";

import { Author } from '../../model/author.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {


  objectId: number;
  newObjectId: number;
  object: Author;
  routingSubscription: any; 


  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit(): void {
    this.object = new Author();
    this.routingSubscription = 
        this.route.params.subscribe(params => {
            console.log(params["id"]);
            if (params["id"]) {
              this.object.authorId = params["id"]
              this.api.getById('Author', params["id"]).subscribe(
                response => {
                this.object = response;
                console.log(this.object);                
              });
            }
        });
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
