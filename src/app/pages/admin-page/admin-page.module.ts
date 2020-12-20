import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPageRoutingModule } from './admin-page-routing.module';
import { AdminPageComponent } from './admin-page.component';
import { ProductsListModule } from 'src/app/_core/modules/products-list/products-list.module';
import { TopBarModule } from 'src/app/_core/modules/top-bar/top-bar.module';


@NgModule({
  declarations: [AdminPageComponent],
  imports: [
    CommonModule,
    AdminPageRoutingModule,
    ProductsListModule,
    TopBarModule
  ]
})
export class AdminPageModule { }
