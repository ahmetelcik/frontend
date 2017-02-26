import { Injectable } from '@angular/core';

@Injectable()
export class MusteriNotlariService {

  private _notlar = [];

  get Notlar(){
    return this._notlar;
  }

  set Notlar(allNotlar){
    this._notlar = allNotlar;
  }

  constructor() {
    this.Notlar = [
      {
        "id" : 5,
        "notum" : "bu bir deneme notudur 1",
        "ekleyen_kullanici_id" : 11,
        "ekleyen_kullanici_adi_soyadi" : "Ahmet Elçik",
        "eklenme_tarihi_tr" : "12 Aralık 2016",
        "eklenme_saati" : "12:44"
      },
      {
        "id" : 6,
        "notum" : "bu bir deneme notudur 2",
        "ekleyen_kullanici_id" : 12,
        "ekleyen_kullanici_adi_soyadi" : "Mahmut Elçik",
        "eklenme_tarihi_tr" : "13 Aralık 2016",
        "eklenme_saati" : "12:44"
      },{
        "id" : 7,
        "notum" : "bu bir deneme notudur 3",
        "ekleyen_kullanici_id" : 13,
        "ekleyen_kullanici_adi_soyadi" : "Halil Elçik",
        "eklenme_tarihi_tr" : "14 Aralık 2016",
        "eklenme_saati" : "12:44"
      },
      {
        "id" : 8,
        "notum" : "bu bir deneme notudur 4",
        "ekleyen_kullanici_id" : 14,
        "ekleyen_kullanici_adi_soyadi" : "Recep Elçik",
        "eklenme_tarihi_tr" : "15 Aralık 2016",
        "eklenme_saati" : "12:44"
      },
      {
        "id" : 9,
        "notum" : "bu bir deneme notudur 5",
        "ekleyen_kullanici_id" : 15,
        "ekleyen_kullanici_adi_soyadi" : "Ahmet Elçik",
        "eklenme_tarihi_tr" : "16 Aralık 2016",
        "eklenme_saati" : "12:44"
      },
      {
        "id" : 10,
        "notum" : "bu bir deneme notudur 6",
        "ekleyen_kullanici_id" : 16,
        "ekleyen_kullanici_adi_soyadi" : "Görkem Elçik",
        "eklenme_tarihi_tr" : "17 Aralık 2016",
        "eklenme_saati" : "12:44"
      }
    ]
  }

}
