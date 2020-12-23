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

  getProductsBySeller(value: string) {
    let search = 'user_id';
    return this._http.get(this.url + 'products?' + search + '=' + value) 
    .pipe(map((response: any) =>{
      return { 
        products: (response).map(product => Product.parse(product) )
      }
    }));
  }

  filterProductsByPrice(filter?: number, search?: string){
    if (search === undefined) {
      search = '';
    }
    return this._http.get(this.url + 'products?q=' + search +'&price_gte=0&price_lte=' + filter) 
    .pipe(map((response: any) =>{
      return { 
        products: (response).map(product => Product.parse(product) )
      }
    }));
  }

  getProductsByNameOrSku(search: string) {
    return this._http.get(this.url + 'products?user_id=' + search) 
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
