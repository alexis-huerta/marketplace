import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyerPageRoutingModule } from './buyer-page-routing.module';
import { BuyerPageComponent } from './buyer-page.component';


@NgModule({
  declarations: [BuyerPageComponent],
  imports: [
    CommonModule,
    BuyerPageRoutingModule
  ]
})
export class BuyerPageModule { }
