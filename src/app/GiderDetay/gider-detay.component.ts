import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gider-detay',
  templateUrl: './gider_detay.component.html',
})
export class GiderDetayComponent implements OnInit {
  
  // Resolve Data
  private data: any;
  
  // Gider Detayı
  private gider_detay: any;

  // Gider Notları
  private gider_notlari: any;

  // Gider Ödemeleri 
  private gider_odemeleri: any;

  constructor(private route: ActivatedRoute) {

    // Resolve Data
    this.data = this.route.snapshot.data['data'];
    this.gider_detay = this.data.contents.gider_detay;
    this.gider_notlari = this.data.contents.notlar;
    this.gider_odemeleri = this.data.contents.odemeler;

    

  }

  ngOnInit() {
  }

}
