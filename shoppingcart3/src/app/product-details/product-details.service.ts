import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  constructor(private http:HttpClient) { }

  showproductdetails(id){
    const token=sessionStorage.getItem('token');
    const url='http://localhost:8080/api/items/'+id;
    return this.http.get(url);
  }
  addToCart(id) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:8080/cart/additem/' + id;
    return this.http.get(url, {headers});
  }

}
