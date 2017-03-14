import { Injectable } from '@angular/core';

@Injectable()
export class FirmaSubeleriListeleService {

  /** Araç Markaları Listele */
  private _firmaSubeleri = [];

  /** Constructor */
  public constructor(){

    this._firmaSubeleri = [
      {
        "id" : 1,
        "sube_adi" : "Merkez Şube",
      },
      {
        "id" : 2,
        "sube_adi" : "Denizli Çardak Havaalanı",
      },
      {
        "id" : 3,
        "sube_adi" : "İzmir Buca Şube",
      },
      {
        "id" : 4,
        "sube_adi" : "İstanbul Sabiha Gökçen Havaalanı"
      }


    ];
  }

  getFirmaSubeleri(){
    return this._firmaSubeleri;
  }


}
