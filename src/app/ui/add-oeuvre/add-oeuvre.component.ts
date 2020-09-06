import { Component, OnInit } from '@angular/core';
import { Oeuvre } from 'src/app/model/oeuvre.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Chapter } from 'src/app/model/chapter.model';

@Component({
  selector: 'app-add-oeuvre',
  templateUrl: './add-oeuvre.component.html',
  styleUrls: ['./add-oeuvre.component.css']
})
export class AddOeuvreComponent implements OnInit {

  object: Oeuvre; 
  categories: [];
  themes: [];
  diwans: [];
  authors: [];
  routingSubscription: any; 

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit(): void {    
    this.object = new Oeuvre();     
    this.routingSubscription = 
        this.route.params.subscribe(params => {
            console.log(params["id"]);
            if (params["id"]) {
              this.object.oeuvreId = params["id"]
              this.api.getById('Oeuvre', params["id"]).subscribe(
                response => {
                this.object = response;
                console.log(this.object);                
              });
            }
        });

     // get list categories   
    this.api.getList('Categories').subscribe(
      (t) => {
        this.categories = t;
        console.log(this.categories);       
      },
      (error) => {
        
       console.log(error);
     }

    )
 // get list authors
    this.api.getList('Authors').subscribe(
      (t) => {
        this.authors = t;
        console.log(this.authors);       
      },
      (error) => {
        
       console.log(error);
     }

    )

    // get list themes
    this.api.getList('Themes').subscribe(
      (t) => {
        this.themes = t;
        console.log(this.themes);       
      },
      (error) => {
        
       console.log(error);
     }

    )

    // get list diwans
    this.api.getList('Diwans').subscribe(
      (t) => {
        this.diwans = t;
        console.log(this.diwans);       
      },
      (error) => {
        
       console.log(error);
     }

    )

  }

  

  uploadSubmit()  {
  console.log(this.object);
  /* this.api.saveOrUpdateItem('addOrUpdateOeuvre', this.object).subscribe(
      data => {        
        this.router.navigate(['/oeuvre-manage']);
      },
      error => {
        console.log(error);

      });*/
  }

}
