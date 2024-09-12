import { Component } from '@angular/core';
import { SmallFooterComponent } from '../shared/small-footer/small-footer.component';
import { HeaderComponent } from '../shared/header/header.component';
import { CommonModule, NgIf } from '@angular/common';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
  FormGroup,
} from '@angular/forms';
import { passwordValidator } from '../shared/utility-functions';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ILogin } from '../../models/auth.model';
import { AuthService } from '../../services/auth/auth.service';
import { InactivityService } from '../../services/inActive/in-active.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-back',
  standalone: true,
  imports: [
    SmallFooterComponent,
    HeaderComponent,
    NgIf,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgbModule,
  ],
  providers: [AuthService],
  templateUrl: './welcome-back.component.html',
  styleUrl: './welcome-back.component.scss',
})
export class WelcomeBackComponent {
  loginForm: FormGroup;
  showToast = true;
  showPassword: boolean = false;

  constructor(
    private readonly _authService: AuthService,
    public router: Router
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, passwordValidator()]),
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
        },
      });
    } else {
      console.log('Form is invalid');
      alert('Invalid Credentials, please try again!');
    }
  }
}
