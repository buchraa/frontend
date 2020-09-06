import { Component, OnInit } from '@angular/core';
import { Chapter } from 'src/app/model/chapter.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-chapter',
  templateUrl: './add-chapter.component.html',
  styleUrls: ['./add-chapter.component.css']
})
export class AddChapterComponent implements OnInit {

  object: Chapter; 
  oeuvres: [];
  routingSubscription: any; 

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) { }

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
    this.api.getList('oeuvres').subscribe(
      (t) => {
        this.oeuvres = t;
        console.log(this.oeuvres);       
      },
      (error) => {
        
       console.log(error);
     }

    )

  }

  uploadSubmit()  {
  console.log(this.object);
   this.api.saveOrUpdateItem('addOrUpdateChapter', this.object).subscribe(
      data => {        
        this.router.navigate(['/chapter-manage']);
      },
      error => {
        console.log(error);

      });
  }


}
