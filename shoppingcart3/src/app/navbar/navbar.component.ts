import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductlistService} from "../product-list/productlist.service";
import {AppService} from "../app.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
p

  constructor(private router: Router,private route:ActivatedRoute,private appservice:AppService) { }

  ngOnInit() {
    if (this.appservice.checkLogin()){
      this.router.navigate(['homepage']);
    }
  }
logout() {
  if (this.appservice.checkLogin()) {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('admin');
    this.appservice.isLoggedIn(false);
    this.router.navigate(['signup']);
  }
}
}
