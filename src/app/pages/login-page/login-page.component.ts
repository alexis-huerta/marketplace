import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SignInModalComponent } from './components/sign-in-modal/sign-in-modal.component';

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
  
  constructor(public dialog: MatDialog,  public formBuilder: FormBuilder) {
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
  }

  openDialog() {
    const dialogRef = this.dialog.open(SignInModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog result', result);
    });
  }

  getErrorMessage(fild: string, error: string): boolean {
    return this.loginForm.get(fild).hasError(error);
 
     
  }

  isValidFild(fild: string): boolean {
    return (this.loginForm.get(fild).touched || this.loginForm.get(fild).dirty)
    && !this.loginForm.get(fild).valid
  }



}
