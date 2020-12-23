import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ProductApiService } from 'src/app/_core/services/product/product-api.service';

@Component({
  selector: 'app-buyer-page',
  templateUrl: './buyer-page.component.html',
  styleUrls: ['./buyer-page.component.scss']
})
export class BuyerPageComponent implements OnInit {
  timeout: any;
  search$ = new Subject();
  filterPrice$ = new Subject();
  maxPrice = 0;
  value = '';
  filterNumber = 0;
  showCleanButton = false;
  
  constructor( private _productApiService: ProductApiService ) { }

  ngOnInit() {
   
  }

  search(e) {
    let currentFilter = this.filterNumber === 0 ? this.maxPrice: this.filterNumber;
    this.value = e.target.value;
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.showCleanButton = true;
      this.filterPrice$.next({search: this.value, price: currentFilter});
      }, 500);
  }

  getMaxPriceListener(e) {
    this.maxPrice = e;
  }

  onChangeRange(e) {
    this.showCleanButton = true;
    this.filterNumber = e.target.value;
    this.filterPrice$.next({search: this.value, price: this.filterNumber});
  }

  cleanFilters(e) {
    this.showCleanButton = false;
    e.value = ''
    this.filterPrice$.next({search: '', price: this.maxPrice});
  }
  
 
 

}
