import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/app/_core/models/product/product.model';
import { ProductApiService } from 'src/app/_core/services/product/product-api.service';
import { CreateProductModalComponent } from './components/create-product-modal/create-product-modal.component';

@Component({
  selector: 'app-seller-page',
  templateUrl: './seller-page.component.html',
  styleUrls: ['./seller-page.component.scss']
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
     this._productsApiService.getProductsBySeller()
     .subscribe(response => {
      this.products = response.products;
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
