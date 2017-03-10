import { Component, OnInit,Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import { musteriNotEkleModel } from '../musteri-detay/Model/musteriNotEkleModel'
import { MusteriNotlariService } from './Service/musteri-notlari.service';

import { NotlisteleComponent } from './Components/notlistele/notlistele.component';

@Component({
  selector: 'app-musteri-detay',
  templateUrl: './musteri-detay.component.html',
})

export class MusteriDetayComponent implements OnInit {

  // başlangıç tabı
  private tab = "notlar";

  // Müşteri not ekle model
  model = new musteriNotEkleModel(null);

  // Notlarim
  notlarim = [];

  constructor(MusteriNotlariService : MusteriNotlariService){
    this.notlarim = MusteriNotlariService.Notlar;

  }

  public sayData($event){
    console.log($event);
  }

  musteriNotEkleForm(form:NgForm){
    console.log(this.model);
  }



  ngOnInit() {


  }

}
