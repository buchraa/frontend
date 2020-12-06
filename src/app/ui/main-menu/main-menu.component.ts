import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Module } from 'src/app/model/module.model';
import { AuthService } from 'src/app/services/auth.service';
import {Location} from '@angular/common';



@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  links = ['Accueil', 'Recherche', 'Modules', 'Paramètres', 'Plus'];
  activeLink = this.links[0];
  modules = [];
  admin: boolean;

  constructor(private router: Router, private api: ApiService, private auth: AuthService, private location: Location) { }

  ngOnInit(): void {


    this.api.getList('Modules').subscribe(
      (t) => {
        this.modules = t;
        console.log(this.modules);
       
      },
      (error) => {
        
       console.log(error);
     }

    )
  }
  backClicked() {
    this.location.back();
  }


}
