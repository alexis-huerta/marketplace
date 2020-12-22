import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../../models/product/product.model';
import { ProductApiService } from '../../services/product/product-api.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  @Input() userId$ = new Subject();
  products: Product;
  userId = 0;

  constructor( private _productsApiService: ProductApiService) { }

  ngOnInit() {
    this.getProducts();
    this.userIListener();
  }

  getProducts() {
    this._productsApiService.getProducts()
    .subscribe(response => {
      this.products = response.products;
    }, error => console.log(error))
  }

  userIListener() {
    this.userId$.subscribe((response: {userId: 0, clean:  false}) => {
      console.log(response);
      
      this.userId = response.userId;
      if(!response.clean) {
        this.getProductsBySeller(this.userId);
      } else {
        this.getProducts();
      }
    })
  }

  getProductsBySeller(userId: number) {
    this._productsApiService.getProductsBySeller(userId)
    .subscribe(response => {
     this.products = response.products;
    }, error => {
      console.log(error);
    });
 }

}
