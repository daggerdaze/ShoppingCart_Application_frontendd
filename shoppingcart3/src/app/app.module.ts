import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UsercartComponent } from './usercart/usercart.component';
import {ProductlistService} from "./product-list/productlist.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { SignupComponent } from './signup/signup.component';
import {FormsModule} from "@angular/forms";
import {ProductDetailsService} from "./product-details/product-details.service";
import {AuthenticationService} from "./authentication.service";
import {AppService} from "./app.service";
import { OrderhistoryComponent } from './orderhistory/orderhistory.component';
import { PlacedComponent } from './placed/placed.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { AddproductComponent } from './addproduct/addproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    LoginComponent,
    ProductDetailsComponent,
    ProductListComponent,
    UsercartComponent,
    SignupComponent,
    OrderhistoryComponent,
    PlacedComponent,
    MyprofileComponent,
    AddproductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ProductlistService,
    ProductDetailsService,
    AuthenticationService,
    AppService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
