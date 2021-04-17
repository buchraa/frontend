import { Component } from '@angular/core';
import {Location} from '@angular/common';
import { Router } from '@angular/router';
declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  

  constructor(public location: Location, public router: Router) { }

  title = 'biblioTech-front';
  url = this.router.url;
  viewBack = this.router.url.includes("Accueil");
  routes = ["/", "/Accueil", "/Admin"]

  public backClicked(): void {
    this.location.back()
  }
  
  public getRoute(){
    if(this.routes.indexOf(this.router.url) == -1 ) {
      return true;
  }

    return false
  }
  
}
