import { Component, OnInit } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal';
import { AracDetayGosterComponent } from './Components/arac_detay.component';
import { AracNotlariListeleComponent } from './Components/Arac_notlari_listele.component';
@Component({
  selector: 'app-arac-detays',
  templateUrl: './arac-detay.component.html',
})
export class AracDetayComponent implements OnInit {

  constructor() {

  }



  /* Araç Sil Click Event */
  aracSilEvent(id:number){
    console.log("araç siliniyor " + id);
  }


  ngOnInit() {
  }

}
