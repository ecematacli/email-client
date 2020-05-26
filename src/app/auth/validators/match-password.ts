import { Injectable } from '@angular/core';
import { Validator, FormGroup } from '@angular/forms';

// By writing injectable decorator here
// we can now use this class with the dependency injection system
@Injectable({ providedIn: 'root' })
export class MatchPassword implements Validator {
  // 1- If you are not sure which one from FormGroup // or FormControl will be validated, you can pass
  // control: AbstractControl instead;

  // 2- Whatever you return here will appear
  // on the errors object of either form group
  // or form control you are passing
  validate(formGroup: FormGroup) {
    const { password, passwordConfirmation } = formGroup.value;

    if (password === passwordConfirmation) {
      return null;
    } else {
      return { passwordsDontMatch: true };
    }
  }
}
