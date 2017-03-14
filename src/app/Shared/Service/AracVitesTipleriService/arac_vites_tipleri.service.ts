import { Injectable } from '@angular/core';

@Injectable()
export class AracVitesTipleriListeleService {

  /** Araç Markaları Listele */
  private _aracVitesTipleri = [];

  /** Constructor */
  public constructor(){

    this._aracVitesTipleri = [
      {
        "id" : 1,
        "vites_tipi_adi" : "Manuel",
      },
      {
        "id" : 2,
        "vites_tipi_adi" : "Yarı Otomatik",
      },
      {
        "id" : 3,
        "vites_tipi_adi" : "Otomatik",
      },


    ];
  }

  getAracVitesTipleriListele(){
    return this._aracVitesTipleri;
  }


}
