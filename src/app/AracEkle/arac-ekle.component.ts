import { Component, OnInit } from '@angular/core';
import { AracModel } from './Model/arac-ekle.model';
import {AracMarkaListeleService} from "../Shared/AracMarkalari/Service/arac_marka_listele.service";
import {AracCekisTipleriListeleService} from "../Shared/Service/AracCekisTipleri/arac_cekis_tipleri.service";
import {AracKasaTipleriListeleService} from "../Shared/Service/AracKasaTipleriService/arac_kasa_tipleri.service";
import {AracMotorHacimleriListeleService} from "../Shared/Service/AracMotorHacimleriService/arac_motor_hacimleri.service";

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
  constructor(private _arac_marka_listele : AracMarkaListeleService,private _arac_cekis_turleri_listele : AracCekisTipleriListeleService,private _arac_kasa_tipleri_listele : AracKasaTipleriListeleService,private _arac_motor_hacimleri : AracMotorHacimleriListeleService) {
    /**
     * Araç markalarını serviceden çekiyoruz
     */
    this.arac_markalari = this._arac_marka_listele.getAracMarkaListele();
    /**
     * Araç çekiş tiplerini serviceden çekiyoruz
     */
    this.arac_cekis_tipleri = this._arac_cekis_turleri_listele.getAracCekisTipleriListele();

    /**
     * Araç kasa tiplerini service'den çekiyoruz
     */
    this.arac_kasa_tipleri = this._arac_kasa_tipleri_listele.getAracKasaTipleriListele();

    /**
     * Araç motor hacimlerini service'den çekiyoruz
     */
    this.arac_motor_hacimleri = this._arac_motor_hacimleri.getAracMotorHacimleriListele();
  }


  ngOnInit() {

  }

}
