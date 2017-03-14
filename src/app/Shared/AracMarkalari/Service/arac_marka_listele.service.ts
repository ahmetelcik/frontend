import { Injectable } from '@angular/core';

@Injectable()
export class AracMarkaListeleService {

  /** Araç Markaları Listele */
  private _aracMarkalari = [];

  /** Constructor */
  public constructor(){

    this._aracMarkalari = [
      {
        "id" : 1,
        "marka_adi" : "Alfa Romeo",
      },
      {
        "id" : 2,
        "marka_adi" : "Aston Martin",
      },

      {
        "id" : 3,
        "marka_adi" : "Audi",
      },
      {
        "id" : 4,
        "marka_adi" : "Fiat",
      },
      {
        "id" : 5,
        "marka_adi" : "Ford",
      },
      {
        "id" : 6,
        "marka_adi" : "Honda",
      },
    ];
  }

  getAracMarkaListele(){
    return this._aracMarkalari;
  }


}
