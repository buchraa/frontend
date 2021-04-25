import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
 user: User;


  constructor(private router: Router, public auth: AuthService, public userServie: UserService) { }

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

  
  logout() {
    this.auth.deleteToken();
    window.location.reload();
  }

}
