import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { ApiService } from 'src/app/services/api.service';
import { Router, ActivatedRoute  } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: User;
  
  newUser: User = new User();
  loading: boolean = false;
  errors = [];
  isSaved = false;
  role = ["ROLE_USER", "ROLE_TRANSLATOR", "ROLE_ADMIN"];
  routingSubscription: any; 

  constructor(private userService: UserService, public api: ApiService, private route: ActivatedRoute, private router: Router) { }

  
  ngOnInit(): void {
    this.user = new User();     
    this.routingSubscription = 
        this.route.params.subscribe(params => {
            console.log(params["id"]);
            if (params["id"]) {
              this.user.id = params["id"]
              this.api.getById('api/auth/user', params["id"]).subscribe(
                response => {
                this.user = response;
              });
            }
        });
  }

  public signUp() {
    this.loading = true;
    console.log(this.user);
   this.userService.patchUserSpecific(this.user).subscribe(
      (t) => {
       this.isSaved = true;
       this.loading = false;
       this.router.navigate(['/manage-user']);
           },
      (error) => {
       this.loading = false;
       this.handleError(error);

     }
    );
  }

   
  updateEnv(service: any, event) {
    if (event.target.checked) {
      this.user.role.push(service);
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
