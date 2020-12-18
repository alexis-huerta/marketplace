import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyerPageComponent } from './buyer-page.component';


const routes: Routes = [
{ path: '', component: BuyerPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyerPageRoutingModule { }
