import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserApiService } from '../services/user/user-api.service';

@Injectable({
  providedIn: 'root'
})
export class CheckloginGuard implements CanActivate {

  constructor(private _userApiService: UserApiService, private _router: Router) { 
    this._userApiService.getCurrentSession();
    
  }

  canActivate(): boolean {
      if(!this._userApiService.isLogged) {
        return true;
      } else {
        if(this._userApiService.isLogged && this._userApiService.currentUser.type === 'seller') {
          this._router.navigate(['/vendedor']);
        } else if(this._userApiService.isLogged && this._userApiService.currentUser.type === 'buyer') {
          this._router.navigate(['/comprador']);
        } else if(this._userApiService.isLogged && this._userApiService.currentUser.type === 'admin') {
          this._router.navigate(['/administrador']);
        }
      }
  }
  
}
