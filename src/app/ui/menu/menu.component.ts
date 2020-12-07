import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public isConnected:boolean;
  admin: boolean;

  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit(): void {

    //this.admin= this.auth.getToken().includes('ROLE_ADMIN');
    this.isConnected = this.auth.hasToken();
    const profileItem = document.getElementById('profile-item');
    const profileMenu = document.getElementById('profile-links');

    function toggleProfileMenu() {
      profileMenu.classList.toggle('profile-links-visible');
      profileMenu.classList.toggle('profile-links-hidden');
  }

  //profileItem.onclick = toggleProfileMenu;
  
  }

  toggleProfileMenu() {
    const profileItem = document.getElementById('profile-item');
    const profileMenu = document.getElementById('profile-links')
    profileMenu.classList.toggle('profile-links-visible');
    profileMenu.classList.toggle('profile-links-hidden');
}

  logout() {
    this.auth.deleteToken();
    window.location.reload();
  }


}
