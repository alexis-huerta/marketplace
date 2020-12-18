import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_core/models/product/product.model';
import { ProductApiService } from 'src/app/_core/services/product/product-api.service';

@Component({
  selector: 'app-buyer-page',
  templateUrl: './buyer-page.component.html',
  styleUrls: ['./buyer-page.component.scss']
})
export class BuyerPageComponent implements OnInit {
  products: Product;
  constructor( private _productsApiService: ProductApiService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this._productsApiService.getProducts()
    .subscribe(response => {
      this.products = response.products;
    }, error => console.log(error))
  }

}
