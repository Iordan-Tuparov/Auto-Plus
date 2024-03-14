import { ValidatorFn, AbstractControl } from '@angular/forms';

export function emailValidator(domains: string[]): ValidatorFn {
  const domainString = domains.join('|');
  const regExp = new RegExp(`^[A-Za-z0-9]+@(abv|gmail)\.(${domainString})$`);

  return (control: AbstractControl) => {
    return new Promise((resolve) => {
      const isEmailInvalid = control.value === '' || regExp.test(control.value);

      if (isEmailInvalid) {
        resolve(null); 
      } else {
        resolve({ emailValidator: true }); 
      }
    });
  };
}
