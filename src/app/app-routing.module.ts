import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from './_core/guards/adminGuard/admin.guard';
import { BuyerGuard } from './_core/guards/buyerGuard/buyer.guard';
import { CheckloginGuard } from './_core/guards/checklogin.guard';
import { SellerGuardGuard } from './_core/guards/sellerGuard/seller-guard.guard';


const routes: Routes = [
  { path: '', loadChildren: './pages/login-page/login-page.module#LoginPageModule'},
  { path: 'vendedor', loadChildren: './pages/seller-page/seller-page.module#SellerPageModule', canActivate: [SellerGuardGuard]},
  { path: 'comprador', loadChildren: './pages/buyer-page/buyer-page.module#BuyerPageModule', canActivate: [BuyerGuard]},
  { path: 'administrador', loadChildren: './pages/admin-page/admin-page.module#AdminPageModule', canActivate: [AdminGuard]},
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
