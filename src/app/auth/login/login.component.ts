import { Component } from '@angular/core';

import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { SmallFooterComponent } from '../shared/small-footer/small-footer.component';
import { HeaderComponent } from '../shared/header/header.component';
import { passwordValidator } from '../shared/utility-functions';
import { AuthService } from '../../services/auth/auth.service';
import { ILogin } from '../../models/auth.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    SmallFooterComponent,
    HeaderComponent,
    NgIf,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [AuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup;

  showPassword: boolean = false;

  constructor(private readonly _authService: AuthService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, passwordValidator()]),
    });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit(loginForm: FormGroup) {
    // if (this.loginForm.valid) {
    //   console.log('Form Submitted', loginForm.value);
    // } else {
    //   console.log('Form is invalid');
    // }
    if (this.loginForm.valid) {
      // Extract form values
      const loginData: ILogin = {
        email: this.loginForm.get('email')?.value,
        password: this.loginForm.get('password')?.value,
      };

      // Call the login method with the extracted data
      this._authService.login(loginData).subscribe({
        next: (response) => {
          // Handle successful login
          console.log('Login successful', response);
        },
        error: (error) => {
          // Handle error
          console.error('Login failed', error);
        },
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
