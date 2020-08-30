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
  }
  
  goDetails() {
    this.router.navigate(["/"]);
  }

  editItem() {
    this.router.navigate(["/"]);
  }

  deleteFrom(object: Chapter){
    this.api.deleteItem('Chapter', object.chapterId).subscribe(
      (t) => {
        this.router.navigate(['/']);
       
      },
      (error) => {        
       console.log(error);
     }

    )       
  }


}
