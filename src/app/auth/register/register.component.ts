import { Component } from '@angular/core';

import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule, DatePipe, NgIf } from '@angular/common';
import { SmallFooterComponent } from '../shared/small-footer/small-footer.component';
import { HeaderComponent } from '../shared/header/header.component';
import {
  passwordMatchValidator,
  passwordValidator,
} from '../shared/utility-functions';
import { ICreateNewAuth } from '../../models/auth.model';
import { AuthService } from '../../services/auth/auth.service';
import { RouterLink, RouterOutlet } from '@angular/router';

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
    RouterLink,
    RouterOutlet,
  ],
  providers: [AuthService],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  registerForm: FormGroup;

  showPassword: boolean = false;
  showConfirmPassword: boolean = false;

  constructor(private readonly _authService: AuthService) {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      country: new FormControl('Choose your country', [Validators.required]),
      day: new FormControl('DD', [
        Validators.maxLength(2),
        Validators.min(1),
        Validators.max(31),
        Validators.required,
      ]),
      month: new FormControl('Month', [Validators.required]),
      year: new FormControl('YYYY', [Validators.required]),
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
    if (registerForm.valid) {
      const formValues = registerForm.value;

      // this.datePipe.transform(
      if (formValues.year && formValues.month && formValues.day) {
        const dateOfbirth1 = new Date(
          formValues.year,
          formValues.month - 1, // JavaScript months are zero-based
          formValues.day
        ).toISOString();
        //   'YYYY-MM-DDTHH:MM:SS.SSSZ'
        // );
        // registerForm.controls['dateOfbirth'].setValue(dateOfbirth1);
        if (dateOfbirth1 == null) {
          return;
        }

        const newUser: ICreateNewAuth = {
          name: formValues.name,
          email: formValues.email,
          password: formValues.password,
          country: formValues.country,
          dateofbirth: dateOfbirth1,
        };
        console.log('Date formatted (ISO 8601): ', newUser.dateofbirth);

        // Call the createUser method and subscribe to handle the response
        this._authService.createUser(newUser).subscribe({
          next: (response) => {
            console.log('User created successfully', response);
          },
          error: (error) => {
            console.error('Error creating user', error);
          },
        });
      } else {
        console.log('Date fields are invalid');
      }
    } else {
      console.log('Form is invalid');
    }
  }
}
