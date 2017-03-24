import { Component, OnInit } from '@angular/core';

/** Services **/
import { AracMarkalariListeleService } from '../Shared/Service/AracMarkalariListele/AracMarkalariListele.Service';
import { AracCekisTipleriListeleService } from '../Shared/Service/AracCekisTipleriListele/AracCekisTipleriListele.Service';
import { AracKasaTipleriListeleService } from '../Shared/Service/AracKasaTipleriListele/AracKasaTipleriListele.Service';
import { AracMotorHacimleriListeleService } from '../Shared/Service/AracMotorHacimleriListele/AracMotorHacimleriListele.Service';
import { AracVitesTipleriListeleService } from '../Shared/Service/AracVitesTipleriListele/AracVitesTipleri.Service';
import { AracYakitTipleriListeleService } from '../Shared/Service/AracYakitTipleriListele/AracYakitTipleriListele.Service';
import { AracDetayService } from '../Shared/Service/AracDetay/AracDetay.Service';
import { FolkJoins } from '../Shared/Service/FolkJoins/FolkJoins';
/** Services **/

@Component({
  selector: 'app-arac-duzenle',
  templateUrl: './arac-duzenle.component.html',
})
export class AracDuzenleComponent implements OnInit {

  arac_markalari:any;
  arac_cekis_tipleri:any;
  arac_kasa_tipleri:any;
  arac_motor_hacimleri: any;
  arac_vites_tipleri: any;
  arac_yakit_tipleri: any;
  arac_detay;
  fulldata;
  constructor(
    private _arac_detay_service: AracDetayService,
    private _arac_markalari_service: AracMarkalariListeleService,
    private _arac_cekis_tipleri_service: AracCekisTipleriListeleService,
    private _arac_kasa_tipleri_service:AracKasaTipleriListeleService,
    private _arac_motor_hacimleri_service:AracMotorHacimleriListeleService,
    private _arac_vites_tipleri_service:AracVitesTipleriListeleService,
    private _arac_yakit_tipleri_service:AracYakitTipleriListeleService
  ) {

    let arrayServices = [
      this._arac_markalari_service.getAracMarkalariListele(),
      this._arac_cekis_tipleri_service.getAracCekisTipleriListele(),
      this._arac_kasa_tipleri_service.getAracKasaTipleriListele(),
      this._arac_motor_hacimleri_service.getAracMotorHacimleriListele(),
      this._arac_vites_tipleri_service.getAracVitesTipleriListele(),
      this._arac_yakit_tipleri_service.getAracYakitTipleriListele(),
      this._arac_detay_service.getAracDetay()
    ];

    var arrayFolksJoins = new FolkJoins(arrayServices);

    arrayFolksJoins.getAll().subscribe(
      data => {
        this.fulldata = data;
        this.arac_markalari = data["0"].contents.arac_markalari;
        this.arac_cekis_tipleri = data["1"].contents.arac_cekis_tipleri;
        this.arac_kasa_tipleri = data["2"].contents.arac_kasa_tipleri;
        this.arac_motor_hacimleri = data["3"].contents.arac_motor_hacimleri;
        this.arac_vites_tipleri = data["4"].contents.arac_vites_tipleri;
        this.arac_yakit_tipleri = data["5"].contents.arac_yakit_tipleri;
        this.arac_detay = data["6"].contents.arac_detay;
      },
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => {
        console.log("veriler çekildi");
      }

    );
  }

  ngOnInit() {

  }

}
