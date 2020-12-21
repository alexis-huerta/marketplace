import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserApiService } from '../services/user/user-api.service';

@Injectable({
  providedIn: 'root'
})
export class CheckloginGuard implements CanActivate {

  constructor(private _userApiService: UserApiService, private _router: Router) { 
    this._userApiService.getCurrentSession();
    
  }

  canActivate(): boolean {
      if(this._userApiService.isLogged$) {
        return true;
      } else {
        this._router.navigate(['']);
        return false;
      }
  }
  
}
