import {Component, OnInit} from '@angular/core';

import {ActivatedRoute, Router} from "@angular/router";
import {ProductlistService} from "./productlist.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  category;
  products;
  code;
filter;

  constructor(private ProductlistService: ProductlistService, private router: Router, private route: ActivatedRoute) {
  }

  lisst: Object = [];

  ngOnInit() {
    this.ProductlistService.getproducts().subscribe((data) => {
      this.lisst = data;
    });
  }

  getbycategory(cat) {
    this.category = cat;
    this.ProductlistService.getbycat(cat).subscribe((data) => {
      this.lisst = data;
    });
  }

  getbycode(cod) {
    this.code = cod;
    this.ProductlistService.getByCode(cod).subscribe((data) => {
      this.lisst = data;
    });
  }

  getbysearch() {
    this.ProductlistService.getByCode(this.code).subscribe((data) => {
      this.lisst = data;
    });
  }

  // getbycode(cod) {
  //   this.category = cod;
  //   this.ProductlistService.getbycod(cod).subscribe((data) => {
  //     this.lisst = data;
  //   });
  // }

  show(products) {
    this.router.navigate(['/homepage', products.id]);
  }

  getWithprice(c1, c2) {
    if (!this.category) {
      this.ProductlistService.getWithPrice(c1, c2).subscribe((data) => {
        this.lisst = data;
      });
    } else {
      this.ProductlistService.getWithCategoryandprice(this.category, c1, c2).subscribe((data) => {
        this.lisst = data;
      });
    }
  }

  // getWithCategoryAndBrand(b) {
  //   if (!this.category) {
  //     this.ProductlistService.getWithBrand(b).subscribe((data) => {
  //       this.lisst = data;
  //     });
  //   } else {
  //     this.ProductlistService.getWithBrandAndCategory(this.category, b).subscribe((data) => {
  //       this.lisst = data;
  //     });
  //   }
  //
  // }

}
