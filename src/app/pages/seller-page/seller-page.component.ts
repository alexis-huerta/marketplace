import { Component, OnInit } from '@angular/core';
import { ProductApiService } from 'src/app/_core/services/product/product-api.service';

@Component({
  selector: 'app-seller-page',
  templateUrl: './seller-page.component.html',
  styleUrls: ['./seller-page.component.sass']
})
export class SellerPageComponent implements OnInit {

  constructor(private _productsApiService: ProductApiService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
     this._productsApiService.getProducts()
     .subscribe(response => {
       console.log(response.products);
     }, error => {
       console.log(error);
     });
  }

}
