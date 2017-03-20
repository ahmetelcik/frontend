import { NgModule } from '@angular/core';

import { EmailValidator } from './EmailValidator/'
import { IbanValidator} from './IbanValidator';
import { NotBlankValidator } from './NotBlank/';
import { IpValidator } from './IpValidator';
import { NotZeroValidator } from './NotZeroValidator';
@NgModule({
  declarations: [
    EmailValidator,
    IbanValidator,
    NotBlankValidator,
    IpValidator,
    NotZeroValidator,
  ],
  exports: [
    EmailValidator,
    IbanValidator,
    NotBlankValidator,
    IpValidator,
    NotZeroValidator,
  ]
})
export class Ng2Validator {
}
