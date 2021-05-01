import { NgModule, CUSTOM_ELEMENTS_SCHEMA, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FilterPipe} from './filter.pipe';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { PwaService } from './services/pwa.service';
import * as $ from "jquery";
import { NgxPaginationModule } from 'ngx-pagination';


import { AuthorManagerComponent } from './ui/author-manager/author-manager.component';
import { AddAuthorComponent } from './ui/add-author/add-author.component';

import { AddCategoryComponent } from './ui/add-category/add-category.component';
import { CategoryManagerComponent } from './ui/category-manager/category-manager.component';
import { CategoryComponent } from './ui/category/category.component';
import { AuthorComponent } from './ui/author/author.component';
import { AuthTokenInterceptor }  from './token.interceptor';
import { LoginComponent } from './ui/login/login.component';
import { SignupComponent } from './ui/signup/signup.component';
import { OeuvreManageComponent } from './ui/oeuvre-manage/oeuvre-manage.component';
import { ChapterManagerComponent } from './ui/chapter-manager/chapter-manager.component';
import { AddChapterComponent } from './ui/add-chapter/add-chapter.component';
import { AddDiwanComponent } from './ui/add-diwan/add-diwan.component';
import { DiwanManageComponent } from './ui/diwan-manage/diwan-manage.component';
import { AddModuleComponent } from './ui/add-module/add-module.component';
import { ModuleManageComponent } from './ui/module-manage/module-manage.component';
import { AddOeuvreComponent } from './ui/add-oeuvre/add-oeuvre.component';
import { AddVerComponent } from './ui/add-ver/add-ver.component';
import { VersManageComponent } from './ui/vers-manage/vers-manage.component';
import { MenuComponent } from './ui/menu/menu.component';
import { HomePageComponent } from './ui/home-page/home-page.component';
import { ServiceWorkerModule, SwRegistrationOptions } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MainMenuComponent } from './ui/main-menu/main-menu.component';

import { DashboardComponent } from './ui/dashboard/dashboard.component';
import { ModulesComponent } from './ui/modules/modules.component';
import { ViewModuleComponent } from './ui/view-module/view-module.component';
import { OeuvreMouridismeComponent } from './ui/oeuvre-mouridisme/oeuvre-mouridisme.component';
import { RechercheMouridismeComponent } from './ui/recherche-mouridisme/recherche-mouridisme.component';
import { MediathequeMouridismeComponent } from './ui/mediatheque-mouridisme/mediatheque-mouridisme.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchComponent } from './ui/search/search.component';
import { ViewOeuvreComponent } from './ui/view-oeuvre/view-oeuvre.component';
import { ViewCategoryComponent } from './ui/view-category/view-category.component';
import { ViewTraductionComponent } from './ui/view-traduction/view-traduction.component';
import { LesEcritsComponent } from './ui/les-ecrits/les-ecrits.component';
import { AudioComponent } from './ui/audio/audio.component';
import { VideoComponent } from './ui/video/video.component';
import { MaterialModule } from './material.module';
import { PhotoComponent } from './ui/photo/photo.component';
import { WebComponent } from './ui/web/web.component';
import { HeaderComponent } from './ui/header/header.component';
import { ModuleHeaderComponent } from './ui/module-header/module-header.component';
import { LoaderComponent } from './ui/loader/loader.component';
import { LoaderInterceptor } from './loader.interceptor';
import { DialogContentPdfComponent } from './ui/dialog-content-pdf/dialog-content-pdf.component';
import { AddToScreenComponentComponent } from './ui/add-to-screen-component/add-to-screen-component.component';
import { GuestRegisterComponent } from './ui/guest-register/guest-register.component';
import { GuestLoginComponent } from './ui/guest-login/guest-login.component';
import { SettingComponent } from './ui/setting/setting.component';
import { EditUserComponent } from './ui/edit-user/edit-user.component';
import { AdminComponent } from './ui/admin/admin.component';


const initializer = (pwaService: PwaService) => () => pwaService.initPwaPrompt();


@NgModule({
  declarations: [
    AppComponent,
    AuthorManagerComponent,
    AddAuthorComponent,
    AddCategoryComponent,
    CategoryManagerComponent,
    CategoryComponent,
    AuthorComponent,
    LoginComponent,
    SignupComponent,
    OeuvreManageComponent,
    ChapterManagerComponent,
    AddChapterComponent,
    AddDiwanComponent,
    DiwanManageComponent,
    AddModuleComponent,
    ModuleManageComponent,
    AddOeuvreComponent,
    AddVerComponent,
    VersManageComponent,
    MenuComponent,
    HomePageComponent,
    MainMenuComponent,
    DashboardComponent,
    ModulesComponent,
    ViewModuleComponent,
    ViewCategoryComponent,
    OeuvreMouridismeComponent,
    RechercheMouridismeComponent,
    MediathequeMouridismeComponent,
    NotFoundComponent,
    FilterPipe,
    SearchComponent,
    ViewOeuvreComponent,
    ViewTraductionComponent,
    LesEcritsComponent,
    AudioComponent,
    VideoComponent,
    PhotoComponent,
    WebComponent,
    HeaderComponent,
    ModuleHeaderComponent,
    LoaderComponent,
    DialogContentPdfComponent,
    AddToScreenComponentComponent,
    GuestRegisterComponent,
    GuestLoginComponent,
    SettingComponent,
    EditUserComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule, 
    ReactiveFormsModule,  
    MaterialModule,
    NgxSpinnerModule,
    NgxExtendedPdfViewerModule,
    NgxPaginationModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production, registrationStrategy: 'registerImmediately' }),   
  ],

  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    {provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true},
    {provide: APP_INITIALIZER, useFactory: initializer, deps: [PwaService], multi: true}
   ],
  bootstrap: [AppComponent],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
