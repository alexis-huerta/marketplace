import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerPageRoutingModule } from './seller-page-routing.module';
import { SellerPageComponent } from './seller-page.component';
import { CreateProductModalComponent } from './create-product-modal/create-product-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [SellerPageComponent, CreateProductModalComponent],
  imports: [
    CommonModule,
    SellerPageRoutingModule,
    MatDialogModule,
    FormsModule
  ],
  entryComponents: [ CreateProductModalComponent ]
})
export class SellerPageModule { }
