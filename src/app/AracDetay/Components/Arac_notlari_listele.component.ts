import { Component, OnInit, Input} from '@angular/core';


@Component({
    selector: 'app-arac-detay-arac-notlari-listele',
    template: `      
<li *ngFor="let not of AracNotlari">
  
  <a href="#">
    <!-- İcon -->
    <div class="tab-page-content-icon-block">
      <i class="fa fa-commenting"></i>
    </div>
    <!-- İcon -->
    <!-- Text -->
    <div class="tab-page-content-text">
      <p> {{ not.arac_notu }} </p>
      <span> {{ not.olusturulma_tarihi }} / {{ not.ekleyen_kullanici?.adi_soyadi}}</span>
    </div>
    <!-- Text -->
  </a>
</li>
`
})
export class AracNotlariListeleComponent implements OnInit {


  @Input('AracNotlari') AracNotlari;
  constructor() { }

  ngOnInit() {
  }

}
