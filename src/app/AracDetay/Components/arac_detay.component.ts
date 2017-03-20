import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
/** Service **/
import { AracDetayService } from '../../Shared/Service/AracDetay_Service/AracDetay.Service';

@Component({
    selector: 'app-arac-detay-goster-component',
    template: `
<div class="panel panel-light">
        <!-- Panel Heading -->
        <div class="panel-heading">
          <!-- Panel Left Block -->
          <div class="panel-heading-left-block">
            <span> Araç Detay</span>
          </div>
          <!-- Panel Heading Left Block -->
        </div>
        <!-- Panel Heading -->
        <div class="panel-body">
          <div class="row musteri-detay-list-row-block">
          
            <div class="col-md-3">
              <span>Plaka</span>
            </div>
            <div class="col-md-1">
              <span>:</span>
            </div>
            <div class="col-md-8">
              <span> {{ arac_detay?.arac_plaka }}</span>
            </div>
          </div>

          <div class="row musteri-detay-list-row-block">
            <div class="col-md-3">
              <span>Marka</span>
            </div>
            <div class="col-md-1">
              <span>:</span>
            </div>
            <div class="col-md-8">
              <span>{{ arac_detay.arac_marka?.marka_adi }}</span>
            </div>
          </div>
          <div class="row musteri-detay-list-row-block">
            <div class="col-md-3">
              <span>Model</span>
            </div>
            <div class="col-md-1">
              <span>:</span>
            </div>
            <div class="col-md-8">
              <span>{{ arac_detay.arac_modeli?.model_adi }}</span>
            </div>
          </div>
          <div class="row musteri-detay-list-row-block">
            <div class="col-md-3">
              <span>Yakıt</span>
            </div>
            <div class="col-md-1">
              <span>:</span>
            </div>
            <div class="col-md-8">
              <span>{{ arac_detay.arac_yakit_tipi?.yakit_tipi_adi }}</span>
            </div>
          </div>
          <div class="row musteri-detay-list-row-block">
            <div class="col-md-3">
              <span>Çekiş Türü</span>
            </div>
            <div class="col-md-1">
              <span>:</span>
            </div>
            <div class="col-md-8">
              <span>{{ arac_detay.arac_cekis_tipi?.cekis_tipi_adi }}</span>
            </div>
          </div>
          <div class="row musteri-detay-list-row-block">
            <div class="col-md-3">
              <span>Kasa</span>
            </div>
            <div class="col-md-1">
              <span>:</span>
            </div>
            <div class="col-md-8">
              <span>{{ arac_detay.arac_kasa_tipi?.kasa_tipi_adi }}</span>
            </div>
          </div>
          <div class="row musteri-detay-list-row-block">
            <div class="col-md-3">
              <span>Motor Hacmi</span>
            </div>
            <div class="col-md-1">
              <span>:</span>
            </div>
            <div class="col-md-8">
              <span>{{ arac_detay.arac_motor_hacmi?.motor_hacmi_adi }}</span>
            </div>
          </div>
          <div class="row musteri-detay-list-row-block">
            <div class="col-md-3">
              <span>Vites</span>
            </div>
            <div class="col-md-1">
              <span>:</span>
            </div>
            <div class="col-md-8">
              <span>{{ arac_detay.arac_vites_tipi?.vites_tipi_adi }}</span>
            </div>
          </div>

          <div class="row musteri-detay-list-row-block">
            <div class="col-md-3">
              <span>Kilometresi</span>
            </div>
            <div class="col-md-1">
              <span>:</span>
            </div>
            <div class="col-md-8">
              <span>{{ arac_detay?.arac_kilometresi }}</span>
            </div>
          </div>

        </div>
        <div class="panel-footer">
          <!-- Panel Footer Left Block -->
          <div class="panel-footer-left-block">
            <div class="panel-footer-ekleyen-kullanici-block">
              <span>Ekleyen Kullanıcı : <a href="#" class="link-blue-hover">{{ arac_detay.ekleyen_kullanici?.adi_soyadi }}</a></span>
            </div>
          </div>
          <!-- Panel Footer Left Block -->
          <!-- Panel Footer Right Block -->
          <div class="panel-footer-right-block">
            <div class="panel-footer-olusturulma-tarihi-block">
              <span>Oluşturulma Tarihi : {{ arac_detay?.arac_olusturulma_tarihi }}</span>
            </div>
          </div>
          <!-- Panel Footer Right Block -->
          <div class="clearfix"></div>
        </div>
</div>
`,
})
export class AracDetayGosterComponent implements OnInit {

  arac_detay = {};

  constructor(public arac_detay_service: AracDetayService) {

  }

  ngOnInit() {

    this.arac_detay_service.getAracDetay()
      .then(arac_detay => {
        this.arac_detay = arac_detay.contents.arac_detay;
      });

  }

}
