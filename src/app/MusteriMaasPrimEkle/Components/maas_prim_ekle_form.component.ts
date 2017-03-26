import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app_musteri_maas_prim_ekle_form_component',
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
        
          <!-- Hakediş Tarihi -->
          <div class="form-group">
            <label for="MaasHakedisTarihi" class="control-label form-style-ozel-label">Hakediş Tarihi</label>
            <input type="text" id="MaasHakedisTarihi" class="form-control form-style-ozel" value="26/03/2017">
          </div>
          <!-- Hakediş Tarihi -->  

          <!-- Tutar -->
          <div class="form-group">
              <label for="MaasTutari" class="control-label form-style-ozel-label">Tutar</label>       
              <input type="text" id="MaasTutari" class="form-control form-style-ozel" value="0,00">
          </div>
          <!-- Tutar -->       
          
          <!-- Açıklama -->
          <div class="form-group">
              <label for="MaasAciklama" class="control-label form-style-ozel-label">Açıklama</label>
              <textarea class="form-control form-style-ozel" id="MaasAciklama" placeholder="Açıklama"></textarea>
          </div>
          <!-- Açıklama -->

          <!-- Ödeme Durumu -->
          <div class="form-group">
            <div class="btn-group" role="group">
              <button type="button" class="btn btn-default" [class.active]="odeme_durumu == 'Odenecek'" (click)="OdemeDurumuChange('Odenecek')">ÖDENECEK</button>
              <button type="button" class="btn btn-default" [class.active]="odeme_durumu == 'Odendi'" (click)="OdemeDurumuChange('Odendi')">ÖDENDİ</button>
            </div>
          </div>
          <!-- Ödeme Durumu -->

           <!-- Ödeme Tarihi -->
          <div class="form-group">
            <label for="FaturaOdemeTarihi" class="control-label form-style-ozel-label">Ödeme Tarihi</label>
            <input type="text" class="form-control form-style-ozel" id="FaturaOdemeTarihi" name="fatura_odeme_tarihi" value="26/03/2017">
          </div>
          <!-- Ödeme Tarihi -->
          
          <!-- Fatura Ödeme Hesap -->
          <div class="form-group" *ngIf="odeme_durumu == 'Odendi'">
            <label for="FaturaOdemeHesap" class="control-label form-style-ozel-label">Ödendiği Hesap</label>
            <select class="form-control form-style-ozel" name="fatura_gider_kategori" id="FaturaOdemeHesap">
              <option value="0">Hesap Seçiniz</option>
              <option value="1">Merkez KAsa</option>
              <option value="2">Denizli Merkez Kasa</option>
            </select>
          </div>
          <!-- Fatura Ödeme Hesap -->

          <!-- Ödenen Tutar -->
          <div class="form-group" *ngIf="odeme_durumu == 'Odendi'">
            <label for="FaturaOdenenTutar" class="control-label form-style-ozel-label">Ödenen Tutar</label>
            <input type="text" class="form-control form-style-ozel" id="FaturaOdenenTutar" name="fatura_odenen_tutar" value="0,00"> 
          </div>
          <!-- Ödenen Tutar -->
          
        </div>
        <!-- Panel Body -->
        <!-- Panel Footer -->
        <div class="panel-footer">
          <div class="panel-footer-right-block">
            <button class="btn btn-success-ozel btn-lg"><i class="fa fa-cloud-upload"></i> Kaydet </button>
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
export class MusteriMaasPrimEkleFormComponent implements OnInit {
    
    public odeme_durumu = "Odenecek";
    constructor() { }

    ngOnInit() { }

    OdemeDurumuChange(odeme_durumu: string){
        this.odeme_durumu = odeme_durumu;

        console.log(this.odeme_durumu);
    }
}
