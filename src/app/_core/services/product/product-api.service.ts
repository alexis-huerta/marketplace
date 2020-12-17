import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Product } from '../../models/product/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {
  url = "http://localhost:3000/";
  constructor(private _http: HttpClient) { }

  getProducts() {
    return this._http.get(this.url + 'products')
    .pipe(map((response: any) =>{
      return { 
        products: (response).map(product => Product.parse(product) )
      }
      
    }))
  }
}
