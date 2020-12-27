import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { UserApiService } from '../../services/user/user-api.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  constructor( 
    private _router: Router, 
    public userApiservice: UserApiService,
    @Inject(PLATFORM_ID) private _platformId
    ) { }

  ngOnInit() {
  }

  logout() {
    if(isPlatformBrowser(this._platformId)) {
      localStorage.removeItem('session');
      this.userApiservice.isLogged = false;
      this._router.navigate(['']);
    }
  }
}
