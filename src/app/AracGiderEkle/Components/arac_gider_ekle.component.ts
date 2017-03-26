import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AracGiderEkleModel } from '../Modal/arac_gider_ekle.model';
@Component({
  moduleId: module.id,
  selector: 'app_arac_gider_ekle_form_component',
  template: `
    <!-- Form -->
    <form>
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
          <!-- Fatura Açıklama -->
          <div class="form-group">
            <label for="FaturaAciklama" class="control-label form-style-ozel-label">Açıklama</label>
            <textarea class="form-control form-style-ozel" id="FaturaAciklama" placeholder="Açıklama" name="fatura_aciklama"  [(ngModel)]="arac_gider_ekle_model.aciklama"></textarea>
          </div>
          <!-- Fatura Açıklama -->

          <!-- Fatura Tarihi -->
          <div class="form-group">
            <label for="FaturaTarihi" class="control-label form-style-ozel-label">Fiş & Fatura Tarihi</label>
            <input type="text" class="form-control form-style-ozel" id="FaturaTarihi" name="fatura_tarihi"  [(ngModel)]="arac_gider_ekle_model.fatura_tarihi">
          </div>
          <!-- Fatura Tarihi -->

          <!-- Toplam Tutar -->
          <div class="form-group">
            <label for="FaturaToplamTutar" class="control-label form-style-ozel-label">Toplam Tutar <small>(Vergiler Dahil)</small></label>
            <input type="text" class="form-control form-style-ozel" id="FaturaToplamTutar" name="fatura_toplam_tutar" [(ngModel)]="arac_gider_ekle_model.fatura_toplam_tutar">
          </div>
          <!-- Toplam Tutar -->

          <!-- Toplam KDV -->
          <div class="form-group">
            <label for="FaturaToplamKDV" class="control-label form-style-ozel-label">Toplam KDV</label>
            <input type="text" class="form-control form-style-ozel" id="FaturaToplamKDV" name="fatura_toplam_kdv" [(ngModel)]="arac_gider_ekle_model.fatura_kdv">
          </div>
          <!-- Toplam KDV -->

          <!-- Gider Şube -->
          <div class="form-group">
            <label for="FaturaGiderSube" class="control-label form-style-ozel-label">Gider Şube</label>
            <select class="form-control form-style-ozel" name="fatura_gider_sube" id="FaturaGiderSube" [(ngModel)]="arac_gider_ekle_model.gider_sube">
              <option value="0">Şube Seçiniz</option> 
              <option value="1">Merkez Şube</option>
              <option value="2">İstanbul Havaalnı</option>
            </select>
          </div>
          <!-- Gider Şube -->

          <!-- Gider Şube -->
          <div class="form-group">
            <label for="FaturaGiderKategori" class="control-label form-style-ozel-label">Gider Kategori</label>
            <select class="form-control form-style-ozel" name="fatura_gider_kategori" id="FaturaGiderKategori" [(ngModel)]="arac_gider_ekle_model.gider_kategori">
              <option value="0">Gider Kategori Seçiniz</option>
              <option value="1">Temizlik</option>
              <option value="2">Ofis Gideri</option>
            </select>
          </div>
          <!-- Gider Şube -->

          <!-- Ödeme Durumu -->
          <div class="form-group">
            <div class="btn-group" role="group">
              <button type="button" class="btn btn-default" [class.active]="arac_gider_ekle_model.odeme_durumu == 'Odenecek'"  (click)="OdemeDurumuChange('Odenecek')">ÖDENECEK</button>
              <button type="button" class="btn btn-default" [class.active]="arac_gider_ekle_model.odeme_durumu == 'Odendi'" (click)="OdemeDurumuChange('Odendi')">ÖDENDİ</button>
            </div>
          </div>
          <!-- Ödeme Durumu -->
          
          <!-- Fatura Ödeme Tarihi -->
          <div class="form-group">
            <label for="FaturaOdemeTarihi" class="control-label form-style-ozel-label">Ödeme Tarihi</label>
            <input type="text" class="form-control form-style-ozel" id="FaturaOdemeTarihi" name="fatura_odeme_tarihi" [(ngModel)]="arac_gider_ekle_model.odeme_tarihi">
          </div>
          <!-- Fatura Ödeme Tarihi -->
          
          <!-- Fatura Ödeme Hesap -->
          <div class="form-group" *ngIf="arac_gider_ekle_model.odeme_durumu == 'Odendi'">
            <label for="FaturaOdemeHesap" class="control-label form-style-ozel-label">Ödendiği Hesap</label>
            <select class="form-control form-style-ozel" name="fatura_gider_kategori" id="FaturaOdemeHesap" [(ngModel)]="arac_gider_ekle_model.odendigi_hesap">
              <option value="0">Hesap Seçiniz</option>
              <option value="1">Merkez KAsa</option>
              <option value="2">Denizli Merkez Kasa</option>
            </select>
          </div>
          <!-- Fatura Ödeme Hesap -->

          <!-- Ödenen Tutar -->
          <div class="form-group" *ngIf="arac_gider_ekle_model.odeme_durumu == 'Odendi'">
            <label for="FaturaOdenenTutar" class="control-label form-style-ozel-label">Ödenen Tutar</label>
            <input type="text" class="form-control form-style-ozel" id="FaturaOdenenTutar" name="fatura_odenen_tutar" #odenen_tutar="ngModel" [(ngModel)]="arac_gider_ekle_model.odenen_tutar"> 
          </div>
          <!-- Ödenen Tutar -->
          
          <pre>
            {{ arac_gider_ekle_model | json }}
          </pre>
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
    <!-- Form -->
  `
})
export class AracGiderEkleFormComponent implements OnInit {


  public arac_gider_ekle_model = new AracGiderEkleModel();
  constructor() {
  }

  ngOnInit() {
  }


  OdemeDurumuChange(odeme_durumu:string){
    if(odeme_durumu == 'Odenecek'){
      this.arac_gider_ekle_model['odendigi_hesap'] = 0;
      this.arac_gider_ekle_model['odenen_tutar'] = "0,00";
    }
    this.arac_gider_ekle_model["odeme_durumu"] = odeme_durumu;
  }
}
