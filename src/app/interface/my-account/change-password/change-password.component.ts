import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../../../services/user/user.service';
import { Router } from '@angular/router';
import { passwordValidator } from '../../../auth/shared/utility-functions';
import { CommonModule } from '@angular/common';
import { IPassword } from '../../../models/user.model';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss',
})
export class ChangePasswordComponent {
  passwordForm: FormGroup;

  showPassword: boolean = false;
  showNewPassword: boolean = false;

  constructor(
    private readonly _userService: UserService,
    public router: Router
  ) {
    this.passwordForm = new FormGroup({
      oldPassword: new FormControl('', [Validators.required]),
      newPassword: new FormControl('', [
        Validators.required,
        passwordValidator(),
      ]),
    });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  toggleNewPasswordVisibility() {
    this.showNewPassword = !this.showNewPassword;
  }

  onSubmit(passwordForm: FormGroup) {
    if (passwordForm.valid) {
      const passData: IPassword = {
        oldPassword: passwordForm.get('oldPassword')?.value,
        newPassword: passwordForm.get('newPassword')?.value,
      };

      this._userService.updatePassword(passData).subscribe({
        next: (response: string) => {
          console.log('Updated Password Successfully ', response);
          this.router.navigate(['/my-account/profile']);
        },
        error: (error) => {
          console.error('Update password failed', error);
        },
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
