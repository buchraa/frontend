import { Component, OnInit } from '@angular/core';
import  { User } from '../../model/user.model';
import {UserService} from './../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guest-register',
  templateUrl: './guest-register.component.html',
  styleUrls: ['./guest-register.component.css']
})
export class GuestRegisterComponent implements OnInit {

  newUser: User = new User();
  loading: boolean = false;
  errors = [];
  isSaved = false;
  role = ["user"];
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.newUser = new User();
  }

  public signUp() {
    this.loading = true;
    this.newUser.role = this.role;
    console.log(this.newUser);
   this.userService.postUser(this.newUser).subscribe(
      (t) => {
       this.isSaved = true;
       this.loading = false;
       this.router.navigate(['/guest-login']);
           },
      (error) => {
       this.loading = false;
       this.handleError(error);

     }
    );
  }

  
  updateEnv(service: any, event) {
    if (event.target.checked) {
      this.newUser.role.push(service);
    }
  }

  private handleError(error){
    this.errors = [];
    if(error.status === 500) {
      this.errors.push("Erreur sur le serveur");
    }
    if(error.status === 400) {
      if(error.error.error.children === undefined){
        this.errors.push(error.error.error);
      }else{
        for (const value in error.error.error.children) {
          if (value === 'password') {
            this.errors.push(value+" : "+error.error.error.children[value].children.first.errors);
          } else {
            this.errors.push(!Array.isArray(error.error.error.children[value]) ? value+" : "+error.error.error.children[value].errors : undefined);
          }

        }
      }
    }
  }
}
