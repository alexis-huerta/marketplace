import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from 'src/app/_core/models/product/product.model';
import { User } from 'src/app/_core/models/user/user.model';
import { ProductApiService } from 'src/app/_core/services/product/product-api.service';
import { UserApiService } from 'src/app/_core/services/user/user-api.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  users: User;
  userId$ = new Subject();
  showCleanButton = false;

  constructor(private _productsApiService: ProductApiService, 
    private _userApiService: UserApiService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this._userApiService.getUsers()
    .subscribe(response => {
      this.users = response.users;
    })
  }

  onChange(value) {
    this.userId$.next({value: value, isUserId: true});
    this.showCleanButton = true;
  }

  cleanFilter() {
    this.userId$.next({userId: 0, clean: true});
  }
}
