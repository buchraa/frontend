import { Component } from '@angular/core';
import {Location} from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  

  constructor(public location: Location, public router: Router, private authenticationService: AuthService) { }

  title = 'biblioTech-front';
  url = this.router.url;
  viewBack = this.router.url.includes("Accueil");
  routes = ["/", "/Accueil", "/Admin"];
  logged = this.authenticationService.hasToken();
  //isAdmin = this.authenticationService.isAdmin();
  public backClicked(): void {
    console.log("ok")
    this.location.back()
  }

  public getRoute(){
    if(this.routes.indexOf(this.router.url) == -1 ) {
      return true;
  }

    return false
  }
  
}
