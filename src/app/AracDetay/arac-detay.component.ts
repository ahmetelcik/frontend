import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-arac-detays',
  templateUrl: './arac-detay.component.html',
})
export class AracDetayComponent implements OnInit {

  // Arac Detayi
  public arac_detay: any;
  // Arac Notlari
  public arac_notlari: any;
  // Resolve Data 
  public data: any;

  constructor(private route: ActivatedRoute) {

    // Resolve Data
    this.data = this.route.snapshot.data['data'];

    // Araç Detayi
    this.arac_detay = this.data.contents.arac_detay;

    // Araç Notları
    this.arac_notlari = this.data.contents.arac_notlari;
    
  }



  ngOnInit() {
    
  }


}
