import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_core/models/user/user.model';
import { UserApiService } from 'src/app/_core/user/user-api.service';

@Component({
  selector: 'app-sign-in-modal',
  templateUrl: './sign-in-modal.component.html',
  styleUrls: ['./sign-in-modal.component.sass']
})
export class SignInModalComponent implements OnInit {
  user = new User();

  constructor(private _userApiService: UserApiService) { }

  ngOnInit() {
  }

  createUser(user: User) {
    this._userApiService.addUser(user)
    .subscribe(response => {
      console.log("usuario agregado");
    }, error => {
      console.log(error);
    });
  }

}
