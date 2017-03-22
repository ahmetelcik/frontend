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

  loading = true;
  arac_markalari:any;
  arac_cekis_tipleri:any;
  arac_kasa_tipleri:any;
  arac_motor_hacimleri: any;
  arac_vites_tipleri: any;
  arac_yakit_tipleri: any;
  firma_subeleri: any;

  constructor(
    private _arac_markalari_service: AracMarkalariListeleService,
    private _arac_cekis_tipleri_service: AracCekisTipleriListeleService,
    private _arac_kasa_tipleri_service:AracKasaTipleriListeleService,
    private _arac_motor_hacimleri_service:AracMotorHacimleriListeleService,
    private _arac_vites_tipleri_service:AracVitesTipleriListeleService,
    private _arac_yakit_tipleri_service:AracYakitTipleriListeleService,
    private _firma_subeleri_service:FirmaSubeleriListeleService,
  ){

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

    var arrayFolksJoins = new FolkJoins(arrayServices);

    arrayFolksJoins.getAll().subscribe(
      data => {
        this.arac_markalari = data["0"].contents.arac_markalari;
        this.arac_cekis_tipleri = data["1"].contents.arac_cekis_tipleri;
        this.arac_kasa_tipleri = data["2"].contents.arac_kasa_tipleri;
        this.arac_motor_hacimleri = data["3"].contents.arac_motor_hacimleri;
        this.arac_vites_tipleri = data["4"].contents.arac_vites_tipleri;
        this.arac_yakit_tipleri = data["5"].contents.arac_yakit_tipleri;
        this.firma_subeleri = data["6"].contents.firma_subeleri;
        this.loading = false;
      },
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading foods')

    );






  }
}
