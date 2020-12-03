import { Component } from '@angular/core';
import {Location} from '@angular/common';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  admin: boolean;

  constructor(private location: Location) { }

  title = 'biblioTech-front';

  backClicked() {
    this.location.back();
  }

  
}
