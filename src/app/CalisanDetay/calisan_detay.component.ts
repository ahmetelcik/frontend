import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-calisan_detay_component',
  templateUrl: './calisan_detay.component.html'
})
export class CalisanDetayComponent implements OnInit {

  // Resolve Data 
  private data: any;
  
  // Çalışan Detay
  private calisan_detay: any;
  
  // Çalışan Notları
  private calisan_notlari: any;

  constructor(private route: ActivatedRoute) {
    // Resolve Data 
    this.data = this.route.snapshot.data['data'];  

    // Çalışan Detayı
    this.calisan_detay = this.data.contents.calisan_detay;
    
    // Çalışan Notları
    this.calisan_notlari = this.data.contents.calisan_notlari;
    console.log(this.data);
  }

  ngOnInit() {

  }

}
