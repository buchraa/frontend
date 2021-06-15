import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Vers } from 'src/app/model/vers.model';

@Component({
  selector: 'app-add-ver',
  templateUrl: './add-ver.component.html',
  styleUrls: ['./add-ver.component.css']
})
export class AddVerComponent implements OnInit {
  object: Vers; 
  chapters: [];
  oeuvres: [];
  routingSubscription: any; 

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit(): void {    
    this.object = new Vers();     
    this.routingSubscription = 
        this.route.params.subscribe(params => {
            console.log(params["id"]);
            if (params["id"]) {
              this.object.versId = params["id"]
              this.api.getById('Vers', params["id"]).subscribe(
                response => {
                this.object = response;
                console.log(this.object);                
              });
            }
        });

        // get list chapters
    this.api.getList('Chapters').subscribe(
      (t) => {
        this.chapters = t;
        console.log(this.chapters);       
      },
      (error) => {
        
       console.log(error);
     }

    )

    this.api.getList('manageoeuvres').subscribe(
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
   this.api.saveOrUpdateItem('addOrUpdateVers', this.object).subscribe(
      data => {        
        this.router.navigate(['/ver-manage']);
      },
      error => {
        console.log(error);

      });
  }


}
