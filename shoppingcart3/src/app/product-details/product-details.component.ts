import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {ProductDetailsService} from "./product-details.service";
import {AppService} from "../app.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
pid;
pdetails:Object=[];
  constructor(private router:Router,private productDetailsService:ProductDetailsService,private route:ActivatedRoute,private app:AppService) {
  }


  ngOnInit() {
this.route.paramMap.subscribe((params:ParamMap)=>{
  const id=parseInt(params.get('id'));
  this.pid=id;
}),
this.productDetailsService.showproductdetails(this.pid).subscribe((data)=> {
  this.pdetails=data;
    });
  }
  addItemsinCart() {
    if(!this.app.checkLogin()){
      this.router.navigate(["/login"]);
    }
    this.productDetailsService.addToCart(this.pid).subscribe((data) => {
      this.pdetails = data;
      this.router.navigate(['/cart']);
      console.log(data);
    });
  }


}
