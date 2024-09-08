import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.value;

    if (!password) {
      return null;
    }

    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasSpecialChar = /[!@#\$%\^\&*\)\(+=._-]+/.test(password);
    const isValidLength = password.length >= 6;

    const passwordValid =
      hasUpperCase && hasLowerCase && hasSpecialChar && isValidLength;

    return !passwordValid ? { passwordStrength: true } : null;
  };
}
