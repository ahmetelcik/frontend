import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { NotZeroValidatorClass } from './NotZeroValidator.class';


@Directive({
  selector: '[notZeroValidate]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => NotZeroValidator),
      multi: true
    }
  ]
})
export class NotZeroValidator implements Validator {


  public validate(control: AbstractControl): { [key: string]: any }{

    let value = control.value;


    var invalidNotZero = new NotZeroValidatorClass(value).invalidNotZero();

    if(invalidNotZero == true){
      return {
        invalidNotZero : true
      }
    }else{
      return null;
    }







  }

}
