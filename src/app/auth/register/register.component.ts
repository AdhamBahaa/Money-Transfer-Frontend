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
import {
  passwordMatchValidator,
  passwordValidator,
} from '../shared/utility-functions';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    SmallFooterComponent,
    HeaderComponent,
    NgIf,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  registerForm: FormGroup;

  showPassword: boolean = false;
  showConfirmPassword: boolean = false;

  constructor() {
    this.registerForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      country: new FormControl('Choose your country'),
      day: new FormControl('', [
        Validators.maxLength(2),
        Validators.min(1),
        Validators.max(31),
      ]),
      month: new FormControl('Month'),
      year: new FormControl('YYYY'),
      password: new FormControl('', [Validators.required, passwordValidator()]),
      confirmPassword: new FormControl('', [Validators.required]),
    });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  onSubmit(registerForm: FormGroup) {
    if (this.registerForm.valid) {
      console.log('Form Submitted', this.registerForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
