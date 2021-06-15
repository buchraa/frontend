import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import { Router, ActivatedRoute } from '@angular/router';
import { VersTraduction} from '../../model/verTraduction.model';
import { Vers } from 'src/app/model/vers.model';


@Component({
  selector: 'app-add-vers-trad',
  templateUrl: './add-vers-trad.component.html',
  styleUrls: ['./add-vers-trad.component.css']
})
export class AddVersTradComponent implements OnInit {
  object: VersTraduction;
  vers= [];

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit(): void {
    this.object = new VersTraduction;
    this.api.getList('managevers').subscribe(
      (t) => {
        this.vers = t;
        console.log(this.vers);       
      },
      (error) => {
        
       console.log(error);
     }

    )
  }

  uploadSubmit()  {
    console.log(this.object);
     this.api.saveOrUpdateItem('addOrUpdateVersTraduction', this.object).subscribe(
        data => {        
          this.router.navigate(['/verTrad-manage']);
        },
        error => {
          console.log(error);
  
        });
    }

}
