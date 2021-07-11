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
import { UserManagerComponent } from './ui/user-manager/user-manager.component';
import { ViewVersComponent } from './ui/view-vers/view-vers.component';



const routes: Routes = [
  { path: '', component:HomePageComponent},
  { path: 'Accueil', component:HomePageComponent},
  { path: 'login', component:LoginComponent},
  { path: 'guest-login', component:GuestLoginComponent},
  { path: 'register', component:GuestRegisterComponent},
  { path: 'add-user', canActivate:[ConnectedGuard], component:SignupComponent},
  { path: 'edit-user/:id', canActivate:[ConnectedGuard], component:EditUserComponent},
  { path: 'manage-user', canActivate:[ConnectedGuard], component:UserManagerComponent},
  { path: 'administration', canActivate:[ConnectedGuard], component:AdminComponent},
  { path: 'admin', canActivate:[ConnectedGuard], component:DashboardComponent},
  { path: 'oeuvre-manage', canActivate:[ConnectedGuard], component:OeuvreManageComponent},
  { path: 'ver-manage', canActivate:[ConnectedGuard], component:VersManageComponent},
  { path: 'chapter-manage', canActivate:[ConnectedGuard], component:ChapterManagerComponent},
  { path: 'author-manage', canActivate:[ConnectedGuard], component:AuthorManagerComponent},
  { path: 'add-author', canActivate:[ConnectedGuard], component:AddAuthorComponent},
  { path: 'add-category', canActivate:[ConnectedGuard], component:AddCategoryComponent},
  { path: 'category-manage', canActivate:[ConnectedGuard], component:CategoryManagerComponent},
  { path: 'diwan-manage', canActivate:[ConnectedGuard], component:DiwanManageComponent},
  { path: 'module-manage', canActivate:[ConnectedGuard], component:ModuleManageComponent},
  { path: 'edit-category/:id', canActivate:[ConnectedGuard], component:AddCategoryComponent},
  { path: 'edit-chapter/:id', canActivate:[ConnectedGuard], component:AddChapterComponent},
  { path: 'add-chapter', canActivate:[ConnectedGuard], component:AddChapterComponent},
  { path: 'author-detail/:id', canActivate:[ConnectedGuard], component:AuthorDetailComponent},
  { path: 'module-detail/:id', canActivate:[ConnectedGuard], component:ModuleDetailComponent},
  { path: 'chapter-detail/:id', canActivate:[ConnectedGuard], component:ChapterDetailComponent},
  { path: 'category-detail/:id', canActivate:[ConnectedGuard], component:CategoryDetailComponent},
  { path: 'diwan-detail/:id', canActivate:[ConnectedGuard], component:DiwanDetailComponent},
  { path: 'edit-author/:id', canActivate:[ConnectedGuard], component:AuthorComponent},
  { path: 'edit-diwan/:id', canActivate:[ConnectedGuard], component:AddDiwanComponent},
  { path: 'add-diwan', canActivate:[ConnectedGuard], component:AddDiwanComponent},
  { path: 'edit-module/:id', canActivate:[ConnectedGuard], component:AddModuleComponent},
  { path: 'add-module', canActivate:[ConnectedGuard], component:AddModuleComponent},
  { path: 'edit-oeuvre/:id', canActivate:[ConnectedGuard], component:AddOeuvreComponent},
  { path: 'add-oeuvre', canActivate:[ConnectedGuard], component:AddOeuvreComponent},
  { path: 'edit-ver/:id', canActivate:[ConnectedGuard], component:AddVerComponent},
  { path: 'add-ver', canActivate:[ConnectedGuard], component:AddVerComponent},
  { path: 'add-verTrad', canActivate:[ConnectedGuard], component:AddVersTradComponent},
  { path: 'verTrad-manage', canActivate:[ConnectedGuard], component:VersTradManagerComponent},
  { path: 'Modules', canActivate:[GuestConnectedGuard], component:ModulesComponent},
  { path: 'Paramètres', canActivate:[GuestConnectedGuard], component:SettingComponent},
  { path: 'Plus', canActivate:[GuestConnectedGuard], component:HomePageComponent},
  { path: 'view-category/:id', canActivate:[GuestConnectedGuard], component:ViewCategoryComponent},
  { path: 'view-module/:id', canActivate:[GuestConnectedGuard], component:ViewModuleComponent},
  { path: 'view-oeuvre/:id', canActivate:[GuestConnectedGuard], component:ViewOeuvreComponent},
  { path: 'view-vers/:id', canActivate:[GuestConnectedGuard], component:ViewVersComponent},
  { path: 'view-traduction/:id', canActivate:[GuestConnectedGuard], component:ViewTraductionComponent},
  { path: 'Recherche', canActivate:[GuestConnectedGuard], component:SearchComponent},
  { path: 'Modules/ecrit-mouridisme', canActivate:[GuestConnectedGuard],  component:LesEcritsComponent},
  { path: 'Modules/oeuvre-mouridisme', canActivate:[GuestConnectedGuard],  component:OeuvreMouridismeComponent},
  { path: 'Modules/recherche-mouridisme', canActivate:[GuestConnectedGuard], component:RechercheMouridismeComponent},
  { path: 'Modules/mediatheque-mouridisme', canActivate:[GuestConnectedGuard], component:MediathequeMouridismeComponent},
  { path: 'mediatheque/audio', canActivate:[GuestConnectedGuard], component:AudioComponent},
  { path: 'mediatheque/video', canActivate:[GuestConnectedGuard], component:VideoComponent},
  { path: 'mediatheque/photo', canActivate:[GuestConnectedGuard], component:PhotoComponent},
  { path: 'mediatheque/web', canActivate:[GuestConnectedGuard], component:WebComponent},
  { path: '404', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
