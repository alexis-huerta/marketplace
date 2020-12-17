import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPageRoutingModule } from './login-page-routing.module';
import { LoginPageComponent } from './login-page.component';
import { SignInModalComponent } from './components/sign-in-modal/sign-in-modal.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [LoginPageComponent, SignInModalComponent],
  imports: [
    CommonModule,
    LoginPageRoutingModule,
    MatDialogModule
  ],
  entryComponents: [SignInModalComponent]
})
export class LoginPageModule { }
