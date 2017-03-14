import { Injectable } from '@angular/core';

@Injectable()
export class AracKasaTipleriListeleService {

  /** Araç Markaları Listele */
  private _aracKasaTipleri = [];

  /** Constructor */
  public constructor(){

    this._aracKasaTipleri = [
      {
        "id" : 1,
        "kasa_tipi_adi" : "Cabrio",
      },
      {
        "id" : 2,
        "kasa_tipi_adi" : "Coupe",
      },
      {
        "id" : 3,
        "kasa_tipi_adi" : "Hatchback 3 kapı",
      },
      {
        "id" : 4,
        "kasa_tipi_adi" : "Hatchback 5 kapı",
      },
      {
        "id" : 5,
        "kasa_tipi_adi" : "Sedan",
      },
      {
        "id" : 6,
        "kasa_tipi_adi" : "Station Vagon",
      },
      {
        "id" : 7,
        "kasa_tipi_adi" : "Crossover",
      },
      {
        "id" : 8,
        "kasa_tipi_adi" : "Roadster",
      },

    ];
  }

  getAracKasaTipleriListele(){
    return this._aracKasaTipleri;
  }


}
