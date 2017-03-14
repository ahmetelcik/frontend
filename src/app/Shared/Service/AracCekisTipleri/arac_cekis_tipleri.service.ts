import { Injectable } from '@angular/core';

@Injectable()
export class AracCekisTipleriService {

  /** Araç Markaları Listele */
  private _aracCekisTipleri = [];

  /** Constructor */
  public constructor(){

    this._aracCekisTipleri = [
      {
        "id" : 1,
        "cekis_tip_adi" : "4WD (Sürekli)",
      },
      {
        "id" : 2,
        "cekis_tip_adi" : "Arkadan İtiş",
      },
      {
        "id" : 3,
        "cekis_tip_adi" : "Önden Çekiş"
      }
    ];
  }

  getAracCekisTipleri(){
    return this._aracCekisTipleri;
  }


}
