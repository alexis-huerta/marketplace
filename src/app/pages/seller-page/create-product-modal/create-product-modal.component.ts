import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_core/models/product/product.model';
import { ProductApiService } from 'src/app/_core/services/product/product-api.service';

@Component({
  selector: 'app-create-product-modal',
  templateUrl: './create-product-modal.component.html',
  styleUrls: ['./create-product-modal.component.sass']
})
export class CreateProductModalComponent implements OnInit {
  product = new Product();

  constructor( private _productApiService: ProductApiService) { }

  ngOnInit() {
  }

  createProduct() {
    this._productApiService.createProduct(this.product)
    .subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
  }
}
