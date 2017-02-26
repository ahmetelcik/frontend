import { Directive,Input,Output,EventEmitter,ElementRef,OnInit } from '@angular/core';

@Directive({
  selector: '[salak]'
})
export class MusteriNotSilDirective {




  constructor() {



  }

  ngOnInit() {
    console.log(this.personData);

  }


}
