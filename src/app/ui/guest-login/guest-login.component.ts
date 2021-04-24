import { Component, OnInit } from '@angular/core';
import { Credentials } from 'src/app/model/credentials.model';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { JwtResponse } from 'src/app/model/jwtResponse.model';

@Component({
  selector: 'app-guest-login',
  templateUrl: './guest-login.component.html',
  styleUrls: ['./guest-login.component.css']
})
export class GuestLoginComponent implements OnInit {

  credentials: Credentials;
  response: JwtResponse;
  loading: boolean = false;
  errors = [];

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.credentials = new Credentials();
    this.response = new JwtResponse();
  }

  

  public login() {
    this.loading = true;   
    this.auth.postToken(this.credentials).subscribe(
      (t) => {
        this.response = t;

        if(this.auth.handleToken(t.token))
        {
            this.auth.setToken(t.token);
            this.auth.setRole(t.roles);
        }  
        window.location.assign('/Accueil')
       /* if(t.roles.includes('ROLE_ADMIN')){
          window.location.assign('/admin');

        }      
        else {window.location.assign('/');}*/

      },
      (error) => {
        this.loading = false;
        this.handleError(error);
      }
    );
  }

  public register() {
    this.router.navigate(['/guest-register']);

  }

  private handleError(error){
    this.errors = [];
    if(error.status === 500) {
      this.errors.push("Erreur sur le serveur");
    }
    if(error.status === 401) {
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
