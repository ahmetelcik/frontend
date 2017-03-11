import { Component, OnInit,ElementRef } from '@angular/core';

@Component({
  selector: 'app-arac-detays',
  templateUrl: './arac-detay.component.html',
})
export class AracDetayComponent implements OnInit {

  constructor(private elRef:ElementRef) {

  }

  ngAfterViewInit() {
    var div = this.elRef.nativeElement.querySelector('#giderEkleBtn');
    console.log(div);
  }

  // for transcluded content
  ngAfterContentInit() {
    var div = this.elRef.nativeElement.querySelector('#giderEkleBtn');
    console.log(div);
  }

  ngOnInit() {
  }

}
