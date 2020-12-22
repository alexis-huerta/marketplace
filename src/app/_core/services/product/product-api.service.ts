import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Product } from '../../models/product/product.model';
import { UserApiService } from '../user/user-api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {
  url = "http://localhost:3000/";
  constructor(private _http: HttpClient, private _userApiservice: UserApiService) { }

  getProducts() {
    return this._http.get(this.url + 'products')
    .pipe(map((response: any) =>{
      return { 
        products: (response).map(product => Product.parse(product) )
      }
      
    }));
  }

  getProductsBySeller(userId: number) {
    return this._http.get(this.url + 'products?user_id=' + userId) 
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
      user_id: this._userApiservice.currentUser.id,
      quantity: product.quantity,
      price: product.price
    }

    return this._http.post(this.url + 'products' , params)
    .pipe(map((response: any) => response.json()));
  }
}
