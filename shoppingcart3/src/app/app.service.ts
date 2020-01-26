import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) { }

  isLoggedIn(bool: boolean) {
    sessionStorage.setItem('auth', String(bool));
    return bool;
  }
  checkLogin() {
    const auth = sessionStorage.getItem('auth');
    return JSON.parse(auth);
  }
  AdminLog(){
    const admin = sessionStorage.getItem('Admin');
    return JSON.parse(admin);
  }
  IsAdmin(bool:boolean){
    sessionStorage.setItem('Admin',String(bool));
    return bool;
  }


  showcart() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:8080/cart/showcart';
    return this.httpClient.get(url, {headers});
  }

  deleteItem(id) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:8080/cart/deleteitem/' + id;
    return this.httpClient.get(url, {headers});
  }

  increment(id) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:8080/cart/increment/1/' + id;
    return this.httpClient.get(url, {headers});
  }

  decrement(id) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:8080/cart/decrement/1/' + id;
    return this.httpClient.get(url, {headers});
  }
  getUsers() {
    const token = sessionStorage.getItem('token');
    // const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:8080/Users/getUsers';
    return this.httpClient.get(url);
  }

  getOrderHistory() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:8080/cart/orderhist';
    return this.httpClient.get(url, {headers});
  }


}


