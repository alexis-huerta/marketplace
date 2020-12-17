import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignInModalComponent } from './components/sign-in-modal/sign-in-modal.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent implements OnInit {
  
  constructor(public dialog: MatDialog) {
  }


  ngOnInit() {
  }

  openDialog() {
    const dialogRef = this.dialog.open(SignInModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog result', result);
    });
  }



}
