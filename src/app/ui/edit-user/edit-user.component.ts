import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

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
  role = ["user"];
  
  constructor(private userService: UserService, public userServie: UserService, private router: Router) { }

  
  ngOnInit(): void {
    this.user = new User();
    this.userServie.getUserCurrent().subscribe(
      t => {
        this.user = t;
        console.log(this.user)
      },
      (error) => {
        
       console.log(error);
     }

    )
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
