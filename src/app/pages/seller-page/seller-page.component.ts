import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/app/_core/models/product/product.model';
import { ProductApiService } from 'src/app/_core/services/product/product-api.service';
import { CreateProductModalComponent } from './create-product-modal/create-product-modal.component';

@Component({
  selector: 'app-seller-page',
  templateUrl: './seller-page.component.html',
  styleUrls: ['./seller-page.component.sass']
})
export class SellerPageComponent implements OnInit {
  products: Product;

  constructor(private _productsApiService: ProductApiService,
    public dialog: MatDialog
    ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
     this._productsApiService.getProducts()
     .subscribe(response => {
      this.products = response.products;
      console.log(this.products);
      
     }, error => {
       console.log(error);
     });
  }

  openDialog() {
    const dialogRef = this.dialog.open(CreateProductModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog result', result);
    });
  }

}