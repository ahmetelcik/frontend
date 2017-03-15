
import { Directive } from '@angular/core';
import { NgModel, NG_VALIDATORS, AbstractControl, ValidatorFn, Validator,FormControl } from '@angular/forms';


// validation function
function validateJuriNameFactory() {
  return (c: AbstractControl) => {


    let isValid = c.value;

    if(isValid === "ahmet") {
      // koşul doğru ise
      return null;
    } else {

      /** Errors */
      return {
        juriName: {
          valid: false
        }
      };

    }

  }
}

@Directive({
  selector: '[validateAhmet][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: validateAhmetValidator,
      multi: true
    }
  ]
})
export class validateAhmetValidator implements Validator {
  validator: ValidatorFn;

  constructor() {
    this.validator = validateJuriNameFactory();
  }

  validate(c: FormControl) {

    return this.validator(c);
  }

}
