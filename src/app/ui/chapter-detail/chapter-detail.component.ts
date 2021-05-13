import { Component, OnInit } from '@angular/core';
import { Chapter } from 'src/app/model/chapter.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-chapter-detail',
  templateUrl: './chapter-detail.component.html',
  styleUrls: ['./chapter-detail.component.css'],
})
export class ChapterDetailComponent implements OnInit {

  object: Chapter; 
  oeuvres: [];
  routingSubscription: any; 

  constructor(private router: Router, private route: ActivatedRoute, public api: ApiService) { }

  ngOnInit(): void {    
    this.object = new Chapter();     
    this.routingSubscription = 
        this.route.params.subscribe(params => {
            console.log(params["id"]);
            if (params["id"]) {
              this.object.chapitreId = params["id"]
              this.api.getById('Chapter', params["id"]).subscribe(
                response => {
                this.object = response;
                console.log(this.object);                
              });
            }
        });
   
  }

}
