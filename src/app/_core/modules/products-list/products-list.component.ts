import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../../models/product/product.model';
import { ProductApiService } from '../../services/product/product-api.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  @Input() value$ = new Subject();
  @Input() price$ = new Subject();
  @Output() maxNumber = new EventEmitter();
  products: Product[];
  value: string;
  prices = [];
  maxPrice = 0;

  constructor( private _productsApiService: ProductApiService) { }

  ngOnInit() {
    this.getProducts();
    this.valueIListener();
    this.priceListener();
  }

  getProducts() {
    this._productsApiService.getProducts()
    .subscribe(response => {
      this.products = response.products;
      this.getMaxPrice();
    }, error => console.log(error))
  }

  valueIListener() {
    this.value$.subscribe((response: {value: '', isUserId: false}) => {
      this.value = response.value;
        this.getProductsBySeller(this.value);
    })
  }

  priceListener() {
    this.price$.subscribe((response: {search: string, price: number}) => {
      console.log('sub', response);
      this.getProductsByPrice(response.search, response.price);
    })
  }

  getProductsBySeller(value: string) {
    this._productsApiService.getProductsBySeller(value)
    .subscribe(response => {
     this.products = response.products;
    }, error => {
      console.log(error);
    });
 }

 getMaxPrice() {
  this.prices = this.products.map(product =>{ return product.price});
  this.maxPrice = Math.max(...this.prices);
   this.maxNumber.emit(this.maxPrice);
 }

 getProductsByPrice(search:string , price: number ) {
   this._productsApiService.filterProductsByPrice(price, search)
   .subscribe(response => {
    this.products = response.products;
   }, error => {
     console.log(error);
   })
 }


}
