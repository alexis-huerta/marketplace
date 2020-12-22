import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  constructor( private _router: Router) { }

  ngOnInit() {
  }

  logout() {
    localStorage.removeItem('session');
    this._router.navigate(['']);
  }
}
