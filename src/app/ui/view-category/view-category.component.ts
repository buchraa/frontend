import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/model/category.model';
import { Oeuvre } from 'src/app/model/oeuvre.model';
import { ApiService } from 'src/app/services/api.service';
import {MatDialog} from '@angular/material/dialog';

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
  searchText: string;
  pageNb= 0;
  limit=10;
 totalPage: number;
 pageNumber: number;
 isdisabled: Boolean;

  constructor(public dialog: MatDialog, private router: Router, private route: ActivatedRoute, public api: ApiService) { }

  ngOnInit(): void {
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
                this.getOeuvres(this.ObjetId);
                console.log(this.object);                
              });
            }
        });
    
  }


  public next(){   
    this.pageNb += 1;
    this.getOeuvres(this.ObjetId);
    console.log(this.pageNb)
  }

  public preview(){   
    this.pageNb -= 1;
    this.getOeuvres(this.ObjetId);
    console.log(this.pageNb)
  }


  
  public disablePrev(){
    return this.pageNumber == 0 ? true : false
  }
  public disable(){
    return this.pageNumber == (this.totalPage - 1) ? true : false
  }

  
   public getOeuvres(uiid: any){
    this.api.findOeuvresForCategories(uiid, this.pageNb, this.limit).subscribe(
      (t) => {
        this.oeuvres = t.content;   
        this.totalPage = t.totalPages;  
        this.pageNumber = t.pageable.pageNumber;
        console.log(this.oeuvres)  
        
      },
      (error) => {
        
       console.log(error);
     }

    )
  }
  
  
  
/*
  public getOeuvres(uiid: any){
    this.api.getList('oeuvres').subscribe(
      (t) => {
        this.allOeuvres = t;     
        console.log(this.allOeuvres)  
        for (var i = 0; i < this.allOeuvres.length; i++) {
                  if(this.allOeuvres[i].category.categoryId == uiid){
                 this.oeuvres.push(this.allOeuvres[i]);          
          }      
      }
      console.log(this.oeuvres);
      },
      (error) => {
        
       console.log(error);
     }

    )
  }*/
  
  goDetails(object: Oeuvre) {
    this.router.navigate(["/view-oeuvre", object.oeuvreId]);
  }

  viewTraduc(object: Oeuvre) {
    this.router.navigate(["/view-traduction", object.oeuvreId]);
  }

  getStatus(i: number) {
    if(i % 2 == 1)
    {
      return true;
    }
    else return false 
  }



}


