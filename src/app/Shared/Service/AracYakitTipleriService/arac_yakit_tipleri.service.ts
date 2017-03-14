import { Injectable } from '@angular/core';

@Injectable()
export class AracYakitTipleriListeleService {

  /** Araç Markaları Listele */
  private _aracYakitTipleri = [];

  /** Constructor */
  public constructor(){

    this._aracYakitTipleri = [
      {
        "id" : 1,
        "yakit_tipi_adi" : "Benzin",
      },
      {
        "id" : 2,
        "yakit_tipi_adi" : "Benzin & LPG",
      },
      {
        "id" : 3,
        "yakit_tipi_adi" : "Dizel",
      },
      {
        "id" : 4,
        "yakit_tipi_adi" : "Hybrid"
      }


    ];
  }

  getAracYakitTipleriListele(){
    return this._aracYakitTipleri;
  }


}
