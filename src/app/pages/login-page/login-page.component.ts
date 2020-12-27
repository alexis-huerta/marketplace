import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserApiService } from 'src/app/_core/services/user/user-api.service';
import { SignInModalComponent } from './components/sign-in-modal/sign-in-modal.component';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  errorMessage = {
    'email': [
      { type: 'required', message: 'Ingrese el correo' },
      { type: 'maxlength', message: 'El correo no debe ser mayor a 30 caracteres' },
      { type: 'pattern', message: 'Porfavor ingrese un correo valido' }
    ],
    'password': [
      { type: 'required', message: 'Ingrese la contraseña' },
      { type: 'minlength', message: 'La contraseña debe ser mayor a 5 caracteres' },
    ]
  }
  loginForm: FormGroup;
  
  constructor(
    public dialog: MatDialog,  
    public formBuilder: FormBuilder,
    private _userApiService: UserApiService,
    private _router: Router,
    private _snackBar: MatSnackBar) {
    this.loginForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.maxLength(30),
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(5)
      ]]
    });
  }


  ngOnInit() {
    this.getCurrentSession()
  }

  openDialog() {
    const dialogRef = this.dialog.open(SignInModalComponent, {
      width: '320px',
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

 

  getErrorMessage(fild: string, error: string): boolean {
    return this.loginForm.get(fild).hasError(error);
  }

  isValidFild(fild: string): boolean {
    return (this.loginForm.get(fild).touched || this.loginForm.get(fild).dirty)
    && !this.loginForm.get(fild).valid
  }

  login() {
      this._userApiService.login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe(response => {
        if(response.user[0]) {
          
          localStorage.setItem('session',JSON.stringify(response.user[0]));
          this.goTo(response.user[0].type);
        } else {
          this._snackBar.open('Verifique su usuario y/o contraseña', '', {
            duration: 3000
          });
        }
      }, error => {
        
      })
  }

  getCurrentSession() {
    this._userApiService.getCurrentSession();
  }

  goTo(type: string) {
    
    switch(type) {
      case 'seller': 
      this._router.navigateByUrl('/vendedor')
      break
      case 'buyer': 
      this._router.navigateByUrl('/comprador')
      break
      case 'admin': 
      this._router.navigateByUrl('/administrador')
      break
    }
  }

  


}
