import{Routes} from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";
import {UsercartComponent} from "./usercart/usercart.component";
import {LoginComponent} from "./login/login.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {SignupComponent} from "./signup/signup.component";
import {OrderhistoryComponent} from "./orderhistory/orderhistory.component";
import {PlacedComponent} from "./placed/placed.component";
import {MyprofileComponent} from "./myprofile/myprofile.component";
import {AddproductComponent} from "./addproduct/addproduct.component";

export const MAIN : Routes=[
  {
    path:'',redirectTo:'/signup',pathMatch:'full',
  },
  {
    path :'homepage' ,
    component : HomepageComponent,
  },
  {
    path :'cart' ,
    component : UsercartComponent,
  },
  {
    path:'login',
    component: LoginComponent,
  },
  {
    path:'product-list',
    component: ProductListComponent,
  },
  {
    path:'homepage/:id',
    component: ProductDetailsComponent,
  },
  {
    path:'signup',
    component:SignupComponent,
  },
  {
    path:'orderhistory',
    component:OrderhistoryComponent,
  },
  {
    path:'placed',
    component:PlacedComponent,
  },
  {
    path:'myprofile',
    component:MyprofileComponent,
  },
  {
    path:'addproduct',
    component:AddproductComponent,
  }
];


