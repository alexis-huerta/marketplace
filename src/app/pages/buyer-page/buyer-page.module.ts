import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyerPageRoutingModule } from './buyer-page-routing.module';
import { BuyerPageComponent } from './buyer-page.component';
import { ProductsListModule } from 'src/app/_core/modules/products-list/products-list.module';


@NgModule({
  declarations: [BuyerPageComponent],
  imports: [
    CommonModule,
    BuyerPageRoutingModule,
    ProductsListModule
  ]
})
export class BuyerPageModule { }
