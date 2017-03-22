import { Component, OnInit,Output,EventEmitter  } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { ModalDirective } from 'ng2-bootstrap/modal';
import { AracDetayGosterComponent } from './Components/arac_detay.component';
import { AracNotlariListeleComponent } from './Components/Arac_notlari_listele.component';



@Component({
  selector: 'app-arac-detays',
  templateUrl: './arac-detay.component.html',
})
export class AracDetayComponent implements OnInit {


  public arac_detay;



  public data;

  constructor() {

  }



  ngOnInit() {

    // this.multiple_service.getBooksAndMovies().subscribe(
    //   data => {
    //    console.log(data);
    //   }
    // );

    // this.arac_detay_service.getAracDetay()
    //   .then(arac_detay => {
    //
    //     this.arac_detay = arac_detay.contents.arac_detay;
    //
    //   });
  }


}
