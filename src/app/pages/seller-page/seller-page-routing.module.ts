import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SellerPageComponent } from './seller-page.component';


const routes: Routes = [
  { path: "", component: SellerPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerPageRoutingModule { }
