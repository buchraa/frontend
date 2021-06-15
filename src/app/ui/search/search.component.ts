import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Oeuvre } from 'src/app/model/oeuvre.model';
import { ApiService } from 'src/app/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']  
})
export class SearchComponent implements OnInit {
  allOeuvres=[Oeuvre];
  filtredOeuvres=[Oeuvre];
  searchText: string;
  config: any;
  isAdmin = this.auth.isAdmin();
  length: Boolean;
  pageNb= 0;
  limit=10;
  totalPage: number;
  pageNumber: number;
  isdisabled: Boolean;
  filtred = false;
  constructor( public api: ApiService, private router: Router, public auth: AuthService) { }


  ngOnInit(): void {    
    this.getOeuvres();
    this.getList();
  }

  public getOeuvres(){
    this.api.getOeuvreList('oeuvres', this.pageNb, this.limit).subscribe(
      (t) => {
        this.allOeuvres = t.content; 
        this.totalPage = t.totalPages;  
        this.pageNumber = t.pageable.pageNumber;    
        console.log(t)  
     },
      (error) => { console.log(error) }
    )
  }

  public getList(){
    this.api.getList('manageoeuvres').subscribe(
      (t) => {
        this.filtredOeuvres = t;  
        this.filtred = true;   
        console.log(this.filtredOeuvres)  
        
      },
      (error) => {
        
       console.log(error);
     }
  
    )
  }
 

  public next(){   
    this.pageNb += 1;
    this.getOeuvres();
    console.log(this.pageNb)
  }

  public preview(){   
    this.pageNb -= 1;
    this.getOeuvres();
    console.log(this.pageNb)
  }

  public SearchOeuvre(){
    this.api.SearchOeuvre(this.searchText).subscribe(
      (t) => {
        this.allOeuvres = t; 
        console.log(t)  
     },
      (error) => { console.log(error) }
    )

  }


  onUploadChange(evt: any) {
    const target = evt.target.value; 
    this.searchText = target;
    this.SearchOeuvre();
    console.log(target)
   
  }
  
  public disablePrev(){
    return this.pageNumber == 0 ? true : false
  }
  
  public disable(){
    return this.pageNumber == (this.totalPage - 1) ? true : false
  }

  pageChanged(event){
    this.config.currentPage = event;
  }

  goDetails(object: Oeuvre) {
    this.router.navigate(["/view-oeuvre", object.oeuvreId]);
  }

  editItem(object: Oeuvre) {
    this.router.navigate(["/edit-oeuvre", object.oeuvreId]);
  }

  viewTraduc(object: Oeuvre) {
    this.router.navigate(["/view-traduction", object.oeuvreId]);
  }




}

