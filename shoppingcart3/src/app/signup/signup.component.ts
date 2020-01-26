import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AppService} from "../app.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  name;
  password;
  address;
  mobile;
  email;
  gender;
  users;
  x = 0;

  url = 'http://localhost:8080/Users/addusers';

  constructor(private http: HttpClient, private appservice: AppService, private router: Router) {
  }

  ngOnInit() {
    this.appservice.getUsers().subscribe(data => {
      this.users = data;
      console.log(data);
    });
  }

  userdata() {
    this.x = 0;
    const ar = {
      name: this.name,
      password: this.password,
      address: this.address,
      mobile: this.mobile,
      email: this.email,
      gender: this.gender
    };
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].email === ar.email) {
        alert('Invalid Please Fill Credentials');
        this.x = 1;
        break;
      }
      if (this.users[i].name === ar.name) {
        alert('User Already Exist');
        this.x = 1;
        break;
      }
      if (this.users[i].mobile === ar.mobile) {
        alert('Email Already Exist');
        this.x = 1;
        break;
      }
    }

    if (this.x === 0) {
      this.http.post(this.url, ar).subscribe(data => {
        this.router.navigate(['/login']);
      });
    }
  }
}
