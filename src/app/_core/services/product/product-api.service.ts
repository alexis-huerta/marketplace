import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Product } from '../../models/product/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {
  url = "http://localhost:3000/";
  userId = 1;
  constructor(private _http: HttpClient) { }

  getProducts() {
    return this._http.get(this.url + 'products')
    .pipe(map((response: any) =>{
      return { 
        products: (response).map(product => Product.parse(product) )
      }
      
    }));
  }

  getProductsBySeller() {
    return this._http.get(this.url + 'products?user_id=' + + this.userId) 
    .pipe(map((response: any) =>{
      return { 
        products: (response).map(product => Product.parse(product) )
      }
      
    }));
  }

  createProduct(product: Product) {
    const params = {
      name: product.name,
      sku: product.sku,
      user_id: 1,
      quantity: product.quantity,
      price: product.price
    }

    return this._http.post(this.url + 'products' , params)
    .pipe(map((response: any) => response.json()));
  }
}
