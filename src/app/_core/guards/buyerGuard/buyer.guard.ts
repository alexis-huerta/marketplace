import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserApiService } from '../../services/user/user-api.service';

@Injectable({
  providedIn: 'root'
})
export class BuyerGuard implements CanActivate {
  constructor(private _userApiService: UserApiService, private _router: Router) { 
    this._userApiService.getCurrentSession();
  }

  canActivate(): boolean {
    if(this._userApiService.isLogged && this._userApiService.currentUser.type === 'buyer') {
      return true;
    } else if(this._userApiService.isLogged && this._userApiService.currentUser.type === 'seller') {
      this._router.navigate(['/vendedor']);
      return false;
    } else if(this._userApiService.isLogged && this._userApiService.currentUser.type === 'admin') {
      this._router.navigate(['/administrador']);
      return false;
    } else {
      this._router.navigate(['']);
      return false;

    }
  }
  
}
