import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerPageRoutingModule } from './seller-page-routing.module';
import { SellerPageComponent } from './seller-page.component';


@NgModule({
  declarations: [SellerPageComponent],
  imports: [
    CommonModule,
    SellerPageRoutingModule
  ]
})
export class SellerPageModule { }
