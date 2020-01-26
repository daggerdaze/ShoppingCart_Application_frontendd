import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Token} from "@angular/compiler";

@Injectable({
  providedIn: 'root'
})
export class ProductlistService {

  constructor(private http: HttpClient) { }

  getproducts(){
    const token=sessionStorage.getItem('token');
    const url='http://localhost:8080/api/products';
    return this.http.get(url);
  }
  getbycat(cat){
    const token=sessionStorage.getItem('token');
    const url='http://localhost:8080/api/category/' +cat;
    return this.http.get(url);
  }
  // getbycod(cod){
  //   const token=sessionStorage.getItem('token');
  //   const url='http://localhost:8080/api/category/' +cat;
  //   return this.http.get(url);
  // }
getWithCategoryandprice(category,c1,c2) {
    const token=sessionStorage.getItem('token');
    const url='http://localhost:8080/api/'+category+'/'+c1+'/'+c2;
    return this.http.get(url);
}
getWithPrice(c1,c2){
    const token=sessionStorage.getItem('token');
    const url='http://localhost:8080/api/'+c1+'/'+c2;
    return this.http.get(url);
}
getByCode(code){
    const token=sessionStorage.getItem('token');
    const url='http://localhost:8080/api/search/'+code;
    return this.http.get(url);
}
  // getWithBrand(b){
  //   const token=sessionStorage.getItem('token');
  //   const url='http://localhost:8080/api/' +b;
  //   return this.http.get(url);
  // }
  // getWithBrandAndCategory(category,b) {
  //   const token = sessionStorage.getItem('token');
  //   const url = 'http://localhost:8080/api/' + category + '/' + b ;
  //   return this.http.get(url);
  // }
// getWithCode(cod){
//     const token=sessionStorage.getItem('token');
//     const url='http://localhost:8080/api/search/'+cod;
//     return this.http.get(url);
// }
}
