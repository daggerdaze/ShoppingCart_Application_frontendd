import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../authentication.service";
import {AppService} from "../app.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
username;
password;
invalid=false;
  constructor(private router: Router, private loginservice:AuthenticationService,private service:AppService) { }

  ngOnInit() {

  }
checklogin(){
    this.loginservice.authenticate(this.username,this.password).subscribe(data=> {
      if(this.username==='Shivam Singal' && this.password==='admin'){
        this.service.IsAdmin(true);
        alert("Logged In as Admin");
      }
      else{
        this.service.IsAdmin(false);
        alert("Logged In as Customer");
      }
      this.service.isLoggedIn(true);
      this.router.navigate(['homepage']);
      // this.service.isLoggedIn(false);
      // alert("Enter a valid username");
    },error => {
      this.invalid=true;
      }
    );
}
logout(){
    this.service.isLoggedIn(false);
}
}
