import { Component, OnInit, ElementRef, AfterViewInit, ViewChild  } from '@angular/core';
import {fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, tap } from 'rxjs/operators';
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
  @ViewChild('input') input: ElementRef;
  allOeuvres=[Oeuvre];
  filtredOeuvres=[Oeuvre];
  searchText = '';
  config: any;
  isAdmin = this.auth.isAdmin();
  length: Boolean;
  pageNb= 0;
  limit=4;
  totalPage = 0;
  pageNumber = 0;
  isdisabled: Boolean;
  filtred = false;
  constructor( public api: ApiService, private router: Router, public auth: AuthService) { }


  ngOnInit(): void {    
    //this.getOeuvres();
    //this.getList();
    this.searchText= '';
  }

ngAfterViewInit() {
    // server-side search
fromEvent(this.input.nativeElement,'keyup')
    .pipe(     
        filter(Boolean),   
        debounceTime(150),
        distinctUntilChanged(),
        tap((text) => {
          console.log(this.input.nativeElement.value)
          this.searchText = this.input.nativeElement.value
          this.getList();
        })
    )
    .subscribe();
}

 

  public getList(){
    this.api.getFiltredList('generalsearch', this.searchText, this.pageNb, this.limit).subscribe(
      (t) => {
        this.filtredOeuvres = t.content;  
        this.totalPage = t.totalPages;  
        this.pageNumber = t.pageable.pageNumber;  
        this.filtred = true;   
        console.log(this.filtredOeuvres)  
        
      },
      (error) => {
        
       console.log(error);
     }
  
    )
  }
 
  public clear() {
    this.filtred = false;
    this.searchText = '';
    this.totalPage = 0;
    this.pageNumber = 0;

  }

  public next(){   
    this.pageNb += 1;
    this.getList();
    console.log(this.pageNb)
  }

  public preview(){   
    this.pageNb -= 1;
    this.getList();
    console.log(this.pageNb)
  }

 

  onUploadChange(searchValue: string): void{
    console.log(searchValue);
    this.searchText = searchValue;
    if(this.searchText.length > 2) {
      this.getList();
    }
    
  }
  
  public disablePrev(){
    return this.pageNumber == 0 ? true : false
  }
  
  public disable(){
    return this.pageNumber >= (this.totalPage - 1) ? true : false
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

  viewVers(id: number) {
    this.router.navigate(["/view-vers", id]);
  }





}

