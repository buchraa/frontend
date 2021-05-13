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
import { ChapterManagerComponent } from './ui/chapter-manager/chapter-manager.component';
import { AddChapterComponent } from './ui/add-chapter/add-chapter.component';
import { AddDiwanComponent } from './ui/add-diwan/add-diwan.component';
import { DiwanManageComponent } from './ui/diwan-manage/diwan-manage.component';
import { ModuleManageComponent } from './ui/module-manage/module-manage.component';
import { AddModuleComponent } from './ui/add-module/add-module.component';
import { AddOeuvreComponent } from './ui/add-oeuvre/add-oeuvre.component';
import { AddVerComponent } from './ui/add-ver/add-ver.component';
import { VersManageComponent } from './ui/vers-manage/vers-manage.component';
import { HomePageComponent } from './ui/home-page/home-page.component';
import { DashboardComponent } from './ui/dashboard/dashboard.component';
import { ModulesComponent } from './ui/modules/modules.component';
import { ViewModuleComponent } from './ui/view-module/view-module.component';
import { ViewOeuvreComponent } from './ui/view-oeuvre/view-oeuvre.component';
import { ViewCategoryComponent } from './ui/view-category/view-category.component';
import { MediathequeMouridismeComponent } from './ui/mediatheque-mouridisme/mediatheque-mouridisme.component';
import { OeuvreMouridismeComponent } from './ui/oeuvre-mouridisme/oeuvre-mouridisme.component';
import { RechercheMouridismeComponent } from './ui/recherche-mouridisme/recherche-mouridisme.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchComponent } from './ui/search/search.component';
import { ViewTraductionComponent } from './ui/view-traduction/view-traduction.component';
import { LesEcritsComponent } from './ui/les-ecrits/les-ecrits.component';
import { AudioComponent } from './ui/audio/audio.component';
import { VideoComponent } from './ui/video/video.component';
import { PhotoComponent } from './ui/photo/photo.component';
import { WebComponent } from './ui/web/web.component';
import { GuestLoginComponent } from './ui/guest-login/guest-login.component';
import { GuestRegisterComponent } from './ui/guest-register/guest-register.component';
import { GuestConnectedGuard } from './guard/guestConnected.guard';
import { SettingComponent } from './ui/setting/setting.component';
import { EditUserComponent } from './ui/edit-user/edit-user.component';
import { AdminComponent } from './ui/admin/admin.component';
import { AddVersTradComponent } from './ui/add-vers-trad/add-vers-trad.component';
import { VersTradManagerComponent } from './ui/vers-trad-manager/vers-trad-manager.component';
import { AuthorDetailComponent } from './ui/author-detail/author-detail.component';
import { ModuleDetailComponent } from './ui/module-detail/module-detail.component';
import { ChapterDetailComponent } from './ui/chapter-detail/chapter-detail.component';
import { CategoryDetailComponent } from './ui/category-detail/category-detail.component';
import { DiwanDetailComponent } from './ui/diwan-detail/diwan-detail.component';



const routes: Routes = [
  { path: '', component:HomePageComponent},
  { path: 'login', component:LoginComponent},
  { path: 'guest-login', component:GuestLoginComponent},
  { path: 'guest-register', component:GuestRegisterComponent},
  { path: 'administration', component:AdminComponent},
  { path: 'oeuvre-manage', component:OeuvreManageComponent},
  { path: 'ver-manage', component:VersManageComponent},
  { path: 'chapter-manage', component:ChapterManagerComponent},
  { path: 'author-manage', component:AuthorManagerComponent},
  { path: 'add-author', component:AddAuthorComponent},
  { path: 'add-category', component:AddCategoryComponent},
  { path: 'category-manage', component:CategoryManagerComponent},
  { path: 'diwan-manage', component:DiwanManageComponent},
  { path: 'module-manage', component:ModuleManageComponent},
  { path: 'edit-category/:id', component:AddCategoryComponent},
  { path: 'edit-chapter/:id', component:AddChapterComponent},
  { path: 'add-chapter', component:AddChapterComponent},
  { path: 'author-detail/:id', component:AuthorDetailComponent},
  { path: 'module-detail/:id', component:ModuleDetailComponent},
  { path: 'chapter-detail/:id', component:ChapterDetailComponent},
  { path: 'category-detail/:id', component:CategoryDetailComponent},
  { path: 'diwan-detail/:id', component:DiwanDetailComponent},
  { path: 'edit-author/:id', component:AuthorComponent},
  { path: 'edit-diwan/:id', component:AddDiwanComponent},
  { path: 'add-diwan', component:AddDiwanComponent},
  { path: 'edit-module/:id', component:AddModuleComponent},
  { path: 'add-module', component:AddModuleComponent},
  { path: 'edit-oeuvre/:id', component:AddOeuvreComponent},
  { path: 'add-oeuvre', component:AddOeuvreComponent},
  { path: 'edit-ver/:id', component:AddVerComponent},
  { path: 'add-ver', component:AddVerComponent},
  { path: 'add-verTrad', component:AddVersTradComponent},
  { path: 'verTrad-manage', component:VersTradManagerComponent},
  { path: 'signup',  component:SignupComponent},
  { path: 'Accueil', component:HomePageComponent},
  { path: 'Modules', canActivate:[GuestConnectedGuard], component:ModulesComponent},
  { path: 'Paramètres', canActivate:[GuestConnectedGuard], component:SettingComponent},
  { path: 'Plus', canActivate:[GuestConnectedGuard], component:HomePageComponent},
  { path: 'view-category/:id', component:ViewCategoryComponent},
  { path: 'admin', canActivate:[ConnectedGuard], component:DashboardComponent},
  { path: 'view-module/:id', component:ViewModuleComponent},
  { path: 'view-oeuvre/:id', component:ViewOeuvreComponent},
  { path: 'view-traduction/:id', component:ViewTraductionComponent},
  { path: 'Recherche', canActivate:[GuestConnectedGuard], component:SearchComponent},
  { path: 'Modules/ecrit-mouridisme', component:LesEcritsComponent},
  { path: 'Modules/oeuvre-mouridisme', component:OeuvreMouridismeComponent},
  { path: 'Modules/recherche-mouridisme', component:RechercheMouridismeComponent},
  { path: 'Modules/mediatheque-mouridisme', component:MediathequeMouridismeComponent},
  { path: 'mediatheque/audio', component:AudioComponent},
  { path: 'mediatheque/video', component:VideoComponent},
  { path: 'mediatheque/photo', component:PhotoComponent},
  { path: 'mediatheque/web', component:WebComponent},
  { path: '404', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
