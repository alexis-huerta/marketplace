import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/user/user.model';
import { map } from "rxjs/operators"; 

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  url = "http://localhost:3000/";

  constructor(private _http: HttpClient) { }

  addUser(user: User) {
    const params = {
      email: user.email,
      password: user.password,
      type: "seller"
    }

    return this._http.post(this.url + 'users' , params)
    .pipe(map((response: any) => response.json()));
  }
}
