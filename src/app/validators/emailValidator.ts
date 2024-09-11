import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function emailValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const allowedDomains = [
      'gmail.com', 'yahoo.com', 'aol.com', 'amalitech.com', 'test.com', 'mail.com', 'hotmail.com'
    ];
    const emailPattern = /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})$/;
    const isValidEmail = emailPattern.test(control.value);

    if (!isValidEmail) {
      return { invalidEmail: true };
    }

    const emailDomain = control.value.split('@')[1];
    const isAllowedDomain = allowedDomains.includes(emailDomain);

    return isAllowedDomain ? null : { invalidDomain: true };
  };
}
