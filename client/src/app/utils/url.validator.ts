import { AbstractControl, ValidatorFn } from '@angular/forms';

export function urlValidate(urlControlName: string): ValidatorFn {
  return (control: AbstractControl): Promise<{ [key: string]: any } | null> => {
      const regEx = new RegExp('^(https?://)');
    
    return new Promise((resolve) => {
      const validUrl = control.value === '' || regEx.test(control.value);

      if (validUrl) {
        resolve(null);
      } else {
        resolve({ urlValidate: true });
      }
    });
  };
}
