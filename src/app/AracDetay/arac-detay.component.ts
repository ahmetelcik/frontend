import { Component, OnInit,Output,EventEmitter  } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal';
import { AracDetayGosterComponent } from './Components/arac_detay.component';
import { AracNotlariListeleComponent } from './Components/Arac_notlari_listele.component';

import 'rxjs/add/operator/map';
/** Service **/
import { AracDetayService } from '../Shared/Service/AracDetay_Service/AracDetay.Service';

@Component({
  selector: 'app-arac-detays',
  templateUrl: './arac-detay.component.html',
})
export class AracDetayComponent implements OnInit {


  public arac_detay;



  public ahmet = {
    "id" : 5,
    "adi" : "ahmet elçik"
  };

  constructor(private arac_detay_service: AracDetayService) {

  }



  ngOnInit() {

    this.arac_detay_service.getAracDetay()
      .then(arac_detay => {
        this.arac_detay = arac_detay.contents.arac_detay;
      });
  }


}
