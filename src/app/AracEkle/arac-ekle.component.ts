import { Component, OnInit } from '@angular/core';

import { AracEkleFormComponent } from './Components/arac_ekle_form.component';


/** Services **/
import { AracMarkalariListeleService } from '../Shared/Service/AracMarkalariListele/AracMarkalariListele.Service';
import { AracCekisTipleriListeleService } from '../Shared/Service/AracCekisTipleriListele/AracCekisTipleriListele.Service';
import { AracKasaTipleriListeleService } from '../Shared/Service/AracKasaTipleriListele/AracKasaTipleriListele.Service';
import { AracMotorHacimleriListeleService } from '../Shared/Service/AracMotorHacimleriListele/AracMotorHacimleriListele.Service';
import { AracVitesTipleriListeleService } from '../Shared/Service/AracVitesTipleriListele/AracVitesTipleri.Service';
import { AracYakitTipleriListeleService } from '../Shared/Service/AracYakitTipleriListele/AracYakitTipleriListele.Service';
import { FirmaSubeleriListeleService } from '../Shared/Service/FirmaSubeleriListele/FirmaSubeleriListele.Service';
import { FolkJoins } from '../Shared/Service/FolkJoins/FolkJoins';
/** Services **/

@Component({
  selector: 'app-arac-ekle',
  templateUrl: './arac-ekle.component.html',
})
export class AracEkleComponent implements OnInit {

  private data;
  constructor(
    private _arac_markalari_service: AracMarkalariListeleService,
    private _arac_cekis_tipleri_service: AracCekisTipleriListeleService,
    private _arac_kasa_tipleri_service:AracKasaTipleriListeleService,
    private _arac_motor_hacimleri_service:AracMotorHacimleriListeleService,
    private _arac_vites_tipleri_service:AracVitesTipleriListeleService,
    private _arac_yakit_tipleri_service:AracYakitTipleriListeleService,
    private _firma_subeleri_service:FirmaSubeleriListeleService,
  ){
    console.log("cost");
  }

  ngOnInit() {

    let arrayServices = [
      this._arac_markalari_service.getAracMarkalariListele(),
      this._arac_cekis_tipleri_service.getAracCekisTipleriListele(),
      this._arac_kasa_tipleri_service.getAracKasaTipleriListele(),
      this._arac_motor_hacimleri_service.getAracMotorHacimleriListele(),
      this._arac_vites_tipleri_service.getAracVitesTipleriListele(),
      this._arac_yakit_tipleri_service.getAracYakitTipleriListele(),
      this._firma_subeleri_service.getFirmaSubeleriListele(),
    ];

    this.data = new FolkJoins(arrayServices);
    this.data.getAll().subscribe(
      data => {
       console.log(data);
      }
    );


    //
    // console.log("deneme");

    //
    // this._demoService.getBooksAndMovies().subscribe(
    //   data => {
    //     this.books = data[0]
    //     this.movies = data[1]
    //   }
    //   // No error or completion callbacks here. They are optional, but
    //   // you will get console errors if the Observable is in an error state.
    // );

  }
}
