import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HelloComponent } from './admin/Product/hello/hello.component';
import { ProductItemComponent } from './admin/Product/product-item/product-item.component';
import { ProductAddComponent } from './admin/Product/product-add/product-add.component';
import { ProductService } from './product.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './admin/home/home.component';
import { ProductEditComponent } from './admin/Product/product-edit/product-edit.component';
import { NotFoundComponent } from './admin/not-found/not-found.component';
import { HeaderComponent } from './admin/header/header.component';
import { NavComponent } from './admin/nav/nav.component';
import { AdminComponent } from './admin/admin.component';

import { AdminRoutingModule } from './admin/admin.routing.component';
import { ContactComponent } from './website/contact/contact.component';
import { WebsiteComponent } from './website/website.component';
import { WebsiteRoutingModule } from './website/website.routing.component';
import { ListCategoryComponent } from './admin/Category/list-category/list-category.component';
import { CategoryAddComponent } from './admin/Category/category-add/category-add.component';
import { CategoryUpdateComponent } from './admin/Category/category-update/category-update.component';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './website/home-page/home-page.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire'

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ProductItemComponent,
    ProductAddComponent,
    HomeComponent,
    ProductEditComponent,
    NotFoundComponent,
    HeaderComponent,
    NavComponent,
    AdminComponent,
    ContactComponent,
    WebsiteComponent,
    ListCategoryComponent,
    CategoryAddComponent,
    CategoryUpdateComponent,
    HomeComponent,
    HomePageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AdminRoutingModule,
    CommonModule,
    WebsiteRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyC9S3qUEm2ngcvYKOYzLSeR8wh5Yalqvh4",
      authDomain: "upload-image-e7390.firebaseapp.com",
      projectId: "upload-image-e7390",
      storageBucket: "upload-image-e7390.appspot.com",
      messagingSenderId: "190553713154",
      appId: "1:190553713154:web:7f7efaefa07fca8a71551b",
      measurementId: "G-G9H63Q3GVY"
    }),
    AngularFirestoreModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
