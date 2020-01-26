import { Component, OnInit } from '@angular/core';
import {OrderhistoryService} from "./orderhistory.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AppService} from "../app.service";

@Component({
  selector: 'app-orderhistory',
  templateUrl: './orderhistory.component.html',
  styleUrls: ['./orderhistory.component.scss']
})
export class OrderhistoryComponent implements OnInit {
  oh;
  constructor(private ohservice: AppService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    if(!this.ohservice.checkLogin()){
      this.router.navigate(['/login']);
    }
    this.ohservice.getOrderHistory().subscribe((data) => {
      this.oh = data;
    });
  }



}
