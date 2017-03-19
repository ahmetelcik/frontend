import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AracModel } from '../Model/arac-ekle.model';

import {AracCekisTipleriListeleService} from "../../Shared/Service/AracCekisTipleri/arac_cekis_tipleri.service";
import {AracKasaTipleriListeleService} from "../../Shared/Service/AracKasaTipleriService/arac_kasa_tipleri.service";
import {AracMotorHacimleriListeleService} from "../../Shared/Service/AracMotorHacimleriService/arac_motor_hacimleri.service";
import {AracVitesTipleriListeleService} from "../../Shared/Service/AracVitesTipleriService/arac_vites_tipleri.service";
import {AracYakitTipleriListeleService} from "../../Shared/Service/AracYakitTipleriService/arac_yakit_tipleri.service";
import {FirmaSubeleriListeleService} from "../../Shared/Service/SubeListeleService/sube_listele.service";

import { AracMarkalariListeleService } from '../../Shared/Service/AracMarkalariListeleService/arac_markalari_listele.service';


@Component({
    moduleId: module.id,
    selector: 'app_arac_ekle_form_component',
    template: `
<!-- Panel -->
<form #aracEkleForm="ngForm" (submit)="submitAracEkleForm(aracEkleForm)" novalidate>
      <div class="panel panel-light">
        <!-- Panel Heading -->
        <div class="panel-heading">
          <!-- Panel Left Block -->
          <div class="panel-heading-left-block">
            <span> Araç Ekle </span>
          </div>
          <!-- Panel Heading Left Block -->
        </div>
        <!-- Panel Heading -->
        <!-- Panel Body -->
        <div class="panel-body">
        <div class="col-md-12" *ngIf="!arac_markalari">
            <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
            <span class="sr-only">Loading...</span>
          </div>
            <!-- Araç Plaka -->
            <div class="form-group">
              <label for="aracPlakaLabel" class="control-label form-style-ozel-label">Araç Plaka</label>
              <input
                type="text"
                class="form-control form-style-ozel"
                id="aracPlakaLabel"
                placeholder="Araç Plaka"
                name="arac_plaka"
                #arac_plaka="ngModel"
                [(ngModel)]="arac_model.arac_plaka"
              >

            </div>
            <!-- Araç Plaka -->


            <!-- Araç Marka -->
            <div class="form-group">
              <label class="control-label form-style-ozel-label">Araç Marka</label>
              <select class="form-control form-style-ozel" name="arac_marka" [(ngModel)]="arac_model.arac_marka">
                <option value="0">Araç Marka Seçiniz</option>
                <option  *ngFor="let arac_marka of arac_markalari" value="{{ arac_marka.id }}">{{ arac_marka.marka_adi }}</option>
              </select>
            </div>
            <!-- Araç Marka -->

            <!-- Araç Modeli -->
            <div class="form-group">
              <label class="control-label form-style-ozel-label">Araç Modeli</label>
              <select class="form-control form-style-ozel" name="arac_modeli" [(ngModel)]="arac_model.arac_modeli" >
                <option value="0">Araç Modeli Seçiniz</option>
                <option value="1">3 Serisi</option>
                <option value="4">4 Serisi</option>
                <option value="5">5 Serisi</option>
                <option value="6">7 Serisi</option>
              </select>
            </div>
            <!-- Araç Modeli -->

            <!-- Araç Çekiş Tipi -->
            <div class="form-group">
              <label class="control-label form-style-ozel-label">Çekiş Tipi</label>
              <select class="form-control form-style-ozel" name="arac_cekis_tipi" [(ngModel)]="arac_model.arac_cekis_tipi" >
                <option value="0">Çekiş Tipi Seçiniz</option>
                <option *ngFor="let arac_cekis of arac_cekis_tipleri" [value]="arac_cekis.id">{{ arac_cekis.cekis_tip_adi }}</option>
              </select>
            </div>
            <!-- Araç Çekiş Tipi -->

            <!-- Araç Kasa Tipi -->
            <div class="form-group">
              <label class="control-label form-style-ozel-label">Kasa Tipi</label>
              <select class="form-control form-style-ozel" name="arac_kasa_tipi" [(ngModel)]="arac_model.arac_kasa_tipi" >
                <option value="0">Kasa Tipi Seçiniz</option>
                <option *ngFor="let arac_kasa of arac_kasa_tipleri" [value]="arac_kasa.id">{{ arac_kasa.kasa_tipi_adi }}</option>
              </select>
            </div>
            <!-- Araç Kasa Tipi -->

            <!-- Araç Motor Hacmi -->
            <div class="form-group">
              <label class="control-label form-style-ozel-label">Motor Hacmi</label>
              <select class="form-control form-style-ozel" name="arac_motor_hacmi" [(ngModel)]="arac_model.arac_motor_hacmi" >
                <option value="0">Motor Hacmi Seçiniz</option>
                <option *ngFor="let arac_motor_hacim of arac_motor_hacimleri" [value]="arac_motor_hacim.id">{{ arac_motor_hacim.motor_hacim_adi }}</option>
              </select>
            </div>
            <!-- Araç Motor Hacmi -->

            <!-- Araç Vites Tipi -->
            <div class="form-group">
              <label class="control-label form-style-ozel-label">Vites Tipi</label>
              <select class="form-control form-style-ozel" name="arac_vites_turu" [(ngModel)]="arac_model.arac_vites_tipi" >
                <option value="0">Vites Tipi Seçiniz</option>
                <option *ngFor="let arac_vites of arac_vites_tipleri" [value]="arac_vites.id">{{ arac_vites.vites_tipi_adi }}</option>
              </select>
            </div>
            <!-- Araç Vites Tipi -->

            <!-- Araç Yakıt Tipi -->
            <div class="form-group">
              <label class="control-label form-style-ozel-label">Yakıt Tipi</label>
              <select class="form-control form-style-ozel" name="arac_yakit_tipi" [(ngModel)]="arac_model.arac_yakit_tipi" >
                <option value="0">Yakit Tipi Seçiniz</option>
                <option *ngFor="let arac_yakit of arac_yakit_turleri" [value]="arac_yakit.id">{{ arac_yakit.yakit_tipi_adi }}</option>
              </select>
            </div>
            <!-- Araç Yakıt Tipi -->

            <!-- Araç Başlangıç Şube -->
            <div class="form-group">
              <label class="control-label form-style-ozel-label">Başlangıç Şube</label>
              <select class="form-control form-style-ozel" name="arac_baslangic_sube" [(ngModel)]="arac_model.arac_baslangic_sube" >
                <option value="0">Başlangıç Şube Seçiniz</option>
                <option *ngFor="let subeler of arac_baslangic_subeleri" [value]="subeler.id">{{ subeler.sube_adi }}</option>
              </select>
            </div>
            <!-- Araç Başlangıç Şube -->

            <!-- Araç Kilometresi -->
            <div class="form-group">
              <label for="arac_kilometresiLabel" class="control-label form-style-ozel-label">Kilometre</label>
              <input
                type="text"
                class="form-control form-style-ozel"
                id="arac_kilometresiLabel"
                placeholder="Araç Kilometresi"
                name="arac_kilometresi"
                [(ngModel)]="arac_model.arac_kilometre">
            </div>
            <!-- Araç Kilometresi -->  
        </div>
        <!-- Panel Body -->
        <!-- Panel Footer -->
        <div class="panel-footer">
          <div class="panel-footer-right-block">
              <button class="btn btn-success-ozel btn-lg"><i class="fa fa-cloud-upload"></i> Kaydet</button>
          </div>
          <div class="clearfix"></div>
        </div>
        <!-- Panel Footer -->
      </div>
      <!-- Panel -->
      </form>
`
})
export class AracEkleFormComponent implements OnInit {

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

    constructor(private _arac_markalari: AracMarkalariListeleService,private _arac_cekis_turleri_listele : AracCekisTipleriListeleService,private _arac_kasa_tipleri_listele : AracKasaTipleriListeleService,private _arac_motor_hacimleri : AracMotorHacimleriListeleService,private _arac_vites_tipleri : AracVitesTipleriListeleService,private _arac_yakit_tipleri : AracYakitTipleriListeleService,private _firma_subeleri : FirmaSubeleriListeleService) {

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

      /**
       * Araç vites tipleri service'den çekiyoruz
       */
      this.arac_vites_tipleri = this._arac_vites_tipleri.getAracVitesTipleriListele();

      /**
       * Araç yakit tiplerini service'den çekiyoruz
       */
      this.arac_yakit_turleri = this._arac_yakit_tipleri.getAracYakitTipleriListele();

      /**
       * Firma şubelerini service'den çekiyoruz
       */
      this.arac_baslangic_subeleri = this._firma_subeleri.getFirmaSubeleri();

    }

    ngOnInit() {

      this._arac_markalari.getPosts().subscribe(posts => {
        this.arac_markalari = posts.content.arac_markalari;
      });

    }


  submitAracEkleForm(aracEkleForm:NgForm){
      console.log(aracEkleForm);
  }
}
