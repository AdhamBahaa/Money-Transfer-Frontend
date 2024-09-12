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
import { Router, RouterLink } from '@angular/router';

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
    RouterLink,
  ],
  providers: [AuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup;

  showPassword: boolean = false;

  constructor(
    private readonly _authService: AuthService,
    public router: Router
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit(loginForm: FormGroup) {
    if (this.loginForm.valid) {
      const loginData: ILogin = {
        email: loginForm.get('email')?.value,
        password: loginForm.get('password')?.value,
      };

      this._authService.login(loginData).subscribe({
        next: (response) => {
          console.log('Login successful', response);
          this.router.navigate(['/home']);
        },
        error: (error) => {
          console.error('Login failed', error);
          alert('Invalid Credentials, please try again!');
        },
      });
    } else {
      console.log('Form is invalid');
      alert('Please enter data in the empty input field(s)');
    }
  }
}
