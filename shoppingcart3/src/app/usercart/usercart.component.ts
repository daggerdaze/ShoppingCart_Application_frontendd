import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AppService} from "../app.service";
import {UsercartService} from "./usercart.service";

@Component({
  selector: 'app-usercart',
  templateUrl: './usercart.component.html',
  styleUrls: ['./usercart.component.scss']
})
export class UsercartComponent implements OnInit {
  cartItems;
  total = 0;
  tax = 100;
  taxtotal = 0;
  constructor(private router: Router, private route: ActivatedRoute, private userCartService: AppService, private usercartservice: UsercartService) { }


  ngOnInit() {
    if(!this.userCartService.checkLogin()){
      this.router.navigate(["/login"]);
    }
    this.userCartService.showcart().subscribe((data) => {
      this.cartItems = data;
      let sum = 0;

      for (let i = 0; i < this.cartItems.length; i++) {
        sum = sum + Number(this.cartItems[i].items.unitPrice) * (this.cartItems[i].quantity);
      }
      this.total = sum;
      this.taxtotal = this.total + this.tax;

    });
  }

  remove(id) {
    this.userCartService.deleteItem(id).subscribe((data) => {
      this.cartItems = data;
      this.ngOnInit();
      console.log(id);
    });
  }
  decrease(id) {
    this.userCartService.decrement(id).subscribe((data) => {
      this.cartItems = data;
      this.ngOnInit();
      let sum = 0;

      for (let i=0; i < this.cartItems.length; i++) {
        sum = sum + Number(this.cartItems[i].items.unitPrice) * (this.cartItems[i].quantity);
      }
      this.total = sum;
      this.taxtotal = this.total + this.tax;
      this.ngOnInit();
    });
  }

  increase(id) {
    this.userCartService.increment(id).subscribe((data) => {
      this.cartItems = data;
      this.ngOnInit();
      let sum = 0;

      for (let i=0; i < this.cartItems.length; i++) {
        sum = sum + Number(this.cartItems[i].items.unitPrice) * (this.cartItems[i].quantity);
      }
      this.total = sum;
      this.taxtotal = this.total + this.tax;
      this.ngOnInit();
    });
  }

  detail(id) {
    // tslint:disable-next-line:no-unused-expression
    this.usercartservice.showProductDetails(id).subscribe((data) => {
      this.router.navigate(['/homepage/' + id]);
    });
  }

  checkout() {
    this.usercartservice.getcheck().subscribe((data) => {
      this.router.navigate(['/placed']);
    });
  }


}
