import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/app/_core/models/product/product.model';
import { ProductApiService } from 'src/app/_core/services/product/product-api.service';
import { UserApiService } from 'src/app/_core/services/user/user-api.service';
import { CreateProductModalComponent } from './components/create-product-modal/create-product-modal.component';

@Component({
  selector: 'app-seller-page',
  templateUrl: './seller-page.component.html',
  styleUrls: ['./seller-page.component.scss']
})
export class SellerPageComponent implements OnInit {
  products: Product;
  showMenu = false;

  constructor(private _productsApiService: ProductApiService, 
    private _userApiService: UserApiService,
    public dialog: MatDialog
    ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
     this._productsApiService.getProductsBySeller(this._userApiService.currentUser.id)
     .subscribe(response => {
      this.products = response.products;
     }, error => {
       
     });
  }

  openDialog() {
    const dialogRef = this.dialog.open(CreateProductModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

  activeMenu() {
    this.showMenu = !this.showMenu;
  }

}
