import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorManagerComponent } from './ui/author-manager/author-manager.component';
import { AddAuthorComponent } from './ui/add-author/add-author.component';

const routes: Routes = [
  { path: 'author-manage', component:AuthorManagerComponent},
  { path: 'add-author', component:AddAuthorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
