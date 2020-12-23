import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/_core/models/user/user.model';
import { UserApiService } from 'src/app/_core/services/user/user-api.service';

@Component({
  selector: 'app-sign-in-modal',
  templateUrl: './sign-in-modal.component.html',
  styleUrls: ['./sign-in-modal.component.scss']
})
export class SignInModalComponent implements OnInit {
  private _isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  user = new User();
  singinForm: FormGroup;
  setTimeout: any;
  isTaken = false;

  errorMessage = {
    'email': [
      { type: 'required', message: 'El correo es requerido' },
      { type: 'maxlength', message: 'El correo no debe ser mayor a 30 caracteres' },
      { type: 'pattern', message: 'Porfavor ingrese un correo valido' }
    ],
    'password': [
      { type: 'required', message: 'Confirme la contraseña' },
      { type: 'minlength', message: 'La contraseña debe ser mayor a 5 caracteres' },
    ],
    'name': [
      { type: 'required', message: 'El nombre es requerido' }
    ],
  }

  constructor(
    private _userApiService: UserApiService,
    public formBuilder: FormBuilder
    ) { 
      this.singinForm = this.formBuilder.group({
        email: ['', [
          Validators.required,
          Validators.maxLength(30),
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
        ]],
        password: ['', [
          Validators.required,
          Validators.minLength(5)
        ]],
        confirmedPassword: ['', [
          Validators.required,
          Validators.minLength(5)
        ]],
        type: ['', [
          Validators.required
        ]],
        name: ['', [
          Validators.required
        ]],

      },  {
        validator: [this.mustMatch('password', 'confirmedPassword'), this.checkisEmailTaken()]
      });
    }


  ngOnInit() {
  }

  createUser() {
    this.user.email = this.singinForm.value.email;
    this.user.password = this.singinForm.value.password;
    this.user.type = this.singinForm.value.type;
    this.user.name = this.singinForm.value.name;
    
    this._userApiService.addUser(this.user)
    .subscribe(response => {
      console.log("usuario agregado");
    }, error => {
      console.log(error);
    });
    
  }

  checkisEmailTaken() {
    return (formGroup: FormGroup) => {
      if (formGroup.controls['email'].errors && !formGroup.controls['email'].errors.isTaken) {
        return;
      }
      this.checkEmailExist(formGroup.controls['email']);
    }
  }
  
  mustMatch(password: string, confirmPassword: string) {
    
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[password];
      const matchingControl = formGroup.controls[confirmPassword];
      
      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }   
    }
  }


  getErrorMessage(fild: string, error: string): boolean {
    return this.singinForm.get(fild).hasError(error);
  }

  isValidFild(fild: string): boolean {
    return (this.singinForm.get(fild).touched || this.singinForm.get(fild).dirty)
    && !this.singinForm.get(fild).valid
  }


  checkEmailExist(control) {
    this._userApiService.checkEmail(control.value)
    .subscribe(response => {
      console.log(response.users.length );
      
      if (response.users.length === 0) {
       control.setErrors(null);
      } else {
       control.setErrors({isTaken: true});
      }
    });
  }

}
