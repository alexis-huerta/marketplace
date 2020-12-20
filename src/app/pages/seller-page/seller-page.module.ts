import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerPageRoutingModule } from './seller-page-routing.module';
import { SellerPageComponent } from './seller-page.component';
import { CreateProductModalComponent } from './create-product-modal/create-product-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { TopBarModule } from 'src/app/_core/modules/top-bar/top-bar.module';


@NgModule({
  declarations: [SellerPageComponent, CreateProductModalComponent],
  imports: [
    CommonModule,
    SellerPageRoutingModule,
    MatDialogModule,
    FormsModule,
    TopBarModule
  ],
  entryComponents: [ CreateProductModalComponent ]
})
export class SellerPageModule { }
