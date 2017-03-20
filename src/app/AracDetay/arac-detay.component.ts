import { Component, OnInit,ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal';
import { AracDetayGosterComponent } from './Components/arac_detay.component';
@Component({
  selector: 'app-arac-detays',
  templateUrl: './arac-detay.component.html',
})
export class AracDetayComponent implements OnInit {

  constructor() {

  }

  @ViewChild('childModal') public childModal:ModalDirective;

  public showChildModal():void {
    this.childModal.show();
  }

  public hideChildModal():void {
    this.childModal.hide();
  }

  /* Araç Sil Click Event */
  aracSilEvent(id:number){
    console.log("araç siliniyor " + id);
  }


  ngOnInit() {
  }

}
