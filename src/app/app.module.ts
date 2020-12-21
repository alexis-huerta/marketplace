import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CheckloginGuard } from './_core/guards/checklogin.guard';
import { SellerGuardGuard } from './_core/guards/sellerGuard/seller-guard.guard';
import { BuyerGuard } from './_core/guards/buyerGuard/buyer.guard';
import { AdminGuard } from './_core/guards/adminGuard/admin.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [CheckloginGuard, SellerGuardGuard, BuyerGuard, AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
