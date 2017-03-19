import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AracModel } from '../Model/arac-ekle.model';


import { AracEkleFormGetBilgilerService } from '../../Shared/Service/AracEkleForm/AracEkleForm_getBilgiler.service';
import { AracModelListeleService } from '../../Shared/Service/AracEkleForm/Arac_model_listele.service';
@Component({
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
              <select class="form-control form-style-ozel" name="arac_marka" [(ngModel)]="arac_model.arac_marka" (ngModelChange)="aracMarkaChangeEvent($event)">
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
                <option *ngFor="let arac_model of arac_modelleri" value="{{ arac_model.id }}">{{ arac_model.model_adi }}</option>
              </select>
            </div>
            <!-- Araç Modeli -->

            <!-- Araç Çekiş Tipi -->
            <div class="form-group">
              <label class="control-label form-style-ozel-label">Çekiş Tipi</label>
              <select class="form-control form-style-ozel" name="arac_cekis_tipi" [(ngModel)]="arac_model.arac_cekis_tipi" >
                <option value="0">Çekiş Tipi Seçiniz</option>
                <option  *ngFor="let arac_cekis of arac_cekis_tipleri" value="{{ arac_cekis.id }}">{{ arac_cekis.cekis_adi }}</option>
              </select>
            </div>
            <!-- Araç Çekiş Tipi -->

            <!-- Araç Kasa Tipi -->
            <div class="form-group">
              <label class="control-label form-style-ozel-label">Kasa Tipi</label>
              <select class="form-control form-style-ozel" name="arac_kasa_tipi" [(ngModel)]="arac_model.arac_kasa_tipi" >
                <option value="0">Kasa Tipi Seçiniz</option>
                <option  *ngFor="let arac_kasa of arac_kasa_tipleri" value="{{ arac_kasa.id }}">{{ arac_kasa.kasa_tipi_adi }}</option>
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
                <option *ngFor="let arac_yakit of arac_yakit_tipleri" [value]="arac_yakit.id">{{ arac_yakit.yakit_tipi_adi }}</option>
              </select>
            </div>
            <!-- Araç Yakıt Tipi -->

            <!-- Araç Başlangıç Şube -->
            <div class="form-group">
              <label class="control-label form-style-ozel-label">Başlangıç Şube</label>
              <select class="form-control form-style-ozel" name="arac_baslangic_sube" [(ngModel)]="arac_model.arac_baslangic_sube" >
                <option value="0">Başlangıç Şube Seçiniz</option>
                <option *ngFor="let sube of firma_subeleri" [value]="sube.id">{{ sube.sube_adi }}</option>
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
      
      <pre>
      {{ arac_model | json }}
</pre>
`
})
export class AracEkleFormComponent implements OnInit {


  /** Araç Ekle Model */
  public arac_model:AracModel = new AracModel();

  private arac_markalari;
  private arac_modelleri;
  private arac_cekis_tipleri;
  private arac_kasa_tipleri;
  private arac_motor_hacimleri;
  private arac_vites_tipleri;
  private arac_yakit_tipleri;
  private firma_subeleri;

  constructor(private aracEkleFormBilgileri: AracEkleFormGetBilgilerService,private aracModelleriGetir: AracModelListeleService) {

  }


  ngOnInit() {
    this.aracEkleFormBilgileri.getAracEklegetBilgiler().subscribe(aracbilgileri => {

      this.arac_markalari = aracbilgileri.contents.arac_markalari;
      this.arac_cekis_tipleri = aracbilgileri.contents.arac_cekis_tipleri;
      this.arac_kasa_tipleri = aracbilgileri.contents.arac_kasa_tipleri;
      this.arac_motor_hacimleri = aracbilgileri.contents.arac_motor_hacimleri;
      this.arac_vites_tipleri = aracbilgileri.contents.arac_vites_tipleri;
      this.arac_yakit_tipleri = aracbilgileri.contents.arac_yakit_tipleri;
      this.firma_subeleri = aracbilgileri.contents.firma_subeleri;




    });
  }


  /** Araç Markasının ngModeli Değişirse Burası Tetikleniyor **/
  aracMarkaChangeEvent(marka_id){
    if(marka_id > 0){


      this.aracModelleriGetir.getAracModelListele(marka_id).subscribe(arac_modelleri => {
        this.arac_modelleri = arac_modelleri.contents.arac_modelleri;

        // Araç modelinin içinden arac_modeli'ni değiştiriyoruz
        this.arac_model.arac_modeli = this.arac_modelleri[0].id;
      });


    }

  }


  submitAracEkleForm(aracEkleForm:NgForm){
      console.log(aracEkleForm);
  }
}
