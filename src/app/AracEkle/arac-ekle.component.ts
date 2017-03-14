import { Component, OnInit } from '@angular/core';
import { AracModel } from './Model/arac-ekle.model';
import {AracMarkaListeleService} from "../Shared/AracMarkalari/Service/arac_marka_listele.service";

@Component({
  selector: 'app-arac-ekle',
  templateUrl: './arac-ekle.component.html',
})
export class AracEkleComponent implements OnInit {

  /** Araç Markalari Listele */
  public arac_markalari;

  /** Araç Modellerini Listele */
  public arac_modelleri;

  /** Araç Çekiş Türleri Listele */
  public arac_cekis_tipleri;

  /** Araç Kasa Tipleri Listele */
  public arac_kasa_tipleri;

  /** Araç Motor Hacimleri Listele */
  public arac_motor_hacimleri;

  /** Araç Vites Tipleri Listlee */
  public arac_vites_tipleri;

  /** Araç Yakıt Türleri Listele */
  public arac_yakit_turleri;

  /** Firma Şubeleri Listele */
  public arac_baslangic_subeleri;


  /** Araç Ekle Model */
  public arac_model:AracModel = new AracModel();


  /** Constructor */
  constructor(private _arac_marka_listele : AracMarkaListeleService) {
    this.arac_markalari = this._arac_marka_listele.getAracMarkaListele();
  }


  ngOnInit() {

  }

}
