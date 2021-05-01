import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";

import { Chapter } from '../../model/chapter.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chapter-manager',
  templateUrl: './chapter-manager.component.html',
  styleUrls: ['./chapter-manager.component.css']
})
export class ChapterManagerComponent implements OnInit {
  chapters = [];
  config: any;
  constructor(private router: Router, private api: ApiService) { }

  ngOnInit(): void {

    this.api.getList('Chapters').subscribe(
      (t) => {
        this.chapters = t;
        console.log(this.chapters);
       
      },
      (error) => {
        
       console.log(error);
     }

    )

    
    this.config = {
      itemsPerPage: 8,
      currentPage: 1,
      totalItems: this.chapters.length
    
    };
  }
  

  pageChanged(event){
    this.config.currentPage = event;
  }

  
  goDetails(object: Chapter) {
    this.router.navigate(["/edit-chapter", object.chapitreId]);
  }

  editItem(object: Chapter) {
    this.router.navigate(["/edit-chapter", object.chapitreId]);
  }

  deleteFrom(object: Chapter){
    this.api.deleteItem('Chapter', object.chapitreId).subscribe(
      (t) => {
        this.router.navigate(['/chapter-manage']);
       
      },
      (error) => {        
       console.log(error);
     }

    )       
  }


}
