import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export const phoneValidator =(): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const phoneNumber = control.value;
    const validPrefixes = ['020', '050', '054', '059', '053', '027', '057'];

    if (!/^\d{10}$/.test(phoneNumber)) {
      return { invalidLength: 'must have 10 digits' };
    }

    const startsWith = validPrefixes.some(prefix => phoneNumber.startsWith(prefix))
    if(!startsWith) {
      return {
        invalidPrefix:  `must start with: ${validPrefixes.join(', ')}`
      };
    }
    return null;
  }
}
