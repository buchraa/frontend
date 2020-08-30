import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorManagerComponent } from './ui/author-manager/author-manager.component';
import { AddAuthorComponent } from './ui/add-author/add-author.component';
import { CategoryManagerComponent } from './ui/category-manager/category-manager.component';
import { CategoryComponent } from './ui/category/category.component';
import { AuthorComponent } from './ui/author/author.component';
import { LoginComponent } from './ui/login/login.component';
import { ConnectedGuard } from './guard/connected.guard';
import { NotConnectedGuard } from './guard/notconnected.guard';

import { SignupComponent } from './ui/signup/signup.component';
import { OeuvreManageComponent } from './ui/oeuvre-manage/oeuvre-manage.component';
import { AddCategoryComponent } from './ui/add-category/add-category.component';


const routes: Routes = [
  { path: 'login', component:LoginComponent},
  { path: 'oeuvre-manage', component:OeuvreManageComponent},
  { path: 'author-manage', component:AuthorManagerComponent},
  { path: 'add-author', component:AddAuthorComponent},
  { path: 'add-category', component:AddCategoryComponent},
  { path: 'category-manage', component:CategoryManagerComponent},
  { path: 'edit-category/:id', component:CategoryComponent},
  { path: 'edit-author/:id', component:AuthorComponent},
  { path: 'signup',  component:SignupComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
