import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { User } from '../../models/user/user.model';
import { map } from "rxjs/operators"; 
import { isPlatformBrowser } from '@angular/common';


@Injectable({
  providedIn: 'root'
})

export class UserApiService {
  //url = "http://localhost:3000/";
  url = " https://my-json-server.typicode.com/alexis-huerta/marketplace/";
  currentUser;
  isLogged = false;

  constructor(private _http: HttpClient,
    @Inject(PLATFORM_ID) private _platformId) { }

  addUser(user: User) {
    const params = {
      email: user.email,
      password: user.password,
      type: user.type,
      name: user.name
    }
    return this._http.post(this.url + 'users' , params)
    .pipe(map((response: any) => response.json()));
  }

  login(email: string, password: string) {
    return this._http.get(this.url + `users?email=${email}&password=${password}`)
    .pipe(map((response: any) =>{
      return { 
        user: (response).map(user => User.parse(user) )
      } 
    }));
  }

  session(user: User) {
    const params = {
      email: user.email,
      password: user.password,
      type: user.type,
      id: user.id
    }
    return this._http.post(this.url + 'session' , params)
    .pipe(map((response: any) => response));
  }

  getCurrentSession() {
    if(isPlatformBrowser(this._platformId)) {
      if(localStorage.getItem('session')) {
        this.isLogged = true;
          this.currentUser = JSON.parse(localStorage.getItem('session'));
      }

    }

    
  }

  getUsers() {
    return this._http.get(this.url + 'users')
    .pipe(map((response: any) =>{
      return { 
        users: (response).map(user => User.parse(user) )
      } 
    }));
  }

  checkEmail(email: string) {
    return this._http.get(this.url + 'users?email=' + email)
    .pipe(map((response: any) =>{
      return { 
        users: (response).map(user => User.parse(user) )
      } 
    }));
  }
  
}
