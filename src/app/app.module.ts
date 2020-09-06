import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AuthorManagerComponent } from './ui/author-manager/author-manager.component';
import { AddAuthorComponent } from './ui/add-author/add-author.component';

import { MatCardModule } from "@angular/material/card";
import { MatSelectModule } from "@angular/material/select";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from "@angular/material/radio";
import { MatFormFieldModule } from '@angular/material/form-field';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule, 
   
  ],
  providers: [ {provide: HTTP_INTERCEPTORS,
    useClass: AuthTokenInterceptor, multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
