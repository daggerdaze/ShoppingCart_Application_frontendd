import { Component, OnInit } from '@angular/core';
import {AppService} from "../app.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
 // ngfalse=false;
  constructor(private route:Router,private Ap:AppService,private rs:ActivatedRoute) { }

  ngOnInit() {
    // if(this.ngfalse=)
  }

}
