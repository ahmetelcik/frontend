import { Component, OnInit } from '@angular/core';

import { AracNotlariListeleService } from '../../Shared/Service/AracDetay_Service/AracNotlari/AracNotlariListele.Service'
@Component({
    selector: 'app-arac-detay-arac-notlari-listele',
    template: `
<li *ngFor="let not of arac_notlari">
  <a href="#">
    <!-- İcon -->
    <div class="tab-page-content-icon-block">
      <i class="fa fa-commenting"></i>
    </div>
    <!-- İcon -->
    <!-- Text -->
    <div class="tab-page-content-text">
      <p>{{ not.arac_notu }}</p>
      <span>{{ not.olusturulma_tarihi }} / {{ not.ekleyen_kullanici?.adi_soyadi}}</span>
    </div>
    <!-- Text -->
  </a>
</li>
`
})
export class AracNotlariListeleComponent implements OnInit {

  private arac_notlari = [];

  constructor(private arac_notlari_service : AracNotlariListeleService) { }

  ngOnInit() {

    this.arac_notlari_service.getAracNotlari()
      .then(arac_notlari => {
        this.arac_notlari = arac_notlari.contents.arac_notlari;
      });

  }

}
