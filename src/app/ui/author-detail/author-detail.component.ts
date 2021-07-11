import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";

import { Author } from '../../model/author.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent implements OnInit {


  objectId: number;
  newObjectId: number;
  object: Author;
  routingSubscription: any; 
  imageUrl="/assets/images/biographie.jpg";


  constructor(private router: Router, private route: ActivatedRoute, public api: ApiService) { }

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


}
