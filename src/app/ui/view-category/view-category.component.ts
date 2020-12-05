import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/model/category.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {
  panelOpenState = false;
  object:Category; 
  ObjetId: string;
  routingSubscription: any; 
  allOeuvres=[];
  oeuvres=[];

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit(): void {

    this.api.getList('oeuvres').subscribe(
      (t) => {
        this.allOeuvres = t;     
        console.log(this.allOeuvres)  
        for (var i = 0; i < this.allOeuvres.length; i++) {
                  if(this.allOeuvres[i].category.categoryId == this.ObjetId){
                 this.oeuvres.push(this.allOeuvres[i]);          
          }      
      }
      console.log(this.oeuvres);
      },
      (error) => {
        
       console.log(error);
     }

    )


    this.object = new Category();     
    this.routingSubscription = 
        this.route.params.subscribe(params => {
            console.log(params["id"]);
            if (params["id"]) {           
       
              this.ObjetId = params["id"]
              this.object.moduleId = params["id"]
              

           
              this.api.getById('Categorie', params["id"]).subscribe(
                response => {
                this.object = response;
                console.log(this.object);                
              });
            }
        });
    
  }

}
