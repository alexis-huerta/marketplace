import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product/product.model';
import { ProductApiService } from '../../services/product/product-api.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
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
