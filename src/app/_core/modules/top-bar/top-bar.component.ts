import { Component, OnInit } from '@angular/core';
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
    public userApiservice: UserApiService
    ) { }

  ngOnInit() {
  }

  logout() {
    localStorage.removeItem('session');
    this._router.navigate(['']);
  }
}
