import {Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";

import {Observable} from "rxjs";

import { AracMarkalariListeleService } from '../AracMarkalariListele/AracMarkalariListele.Service';
import { AracCekisTipleriListeleService } from '../AracCekisTipleriListele/AracCekisTipleriListele.Service';
import { AracKasaTipleriListeleService } from '../AracKasaTipleriListele/AracKasaTipleriListele.Service';
import { AracMotorHacimleriListeleService } from '../AracMotorHacimleriListele/AracMotorHacimleriListele.Service';
import { AracVitesTipleriListeleService } from '../AracVitesTipleriListele/AracVitesTipleri.Service';
import { AracYakitTipleriListeleService } from '../AracYakitTipleriListele/AracYakitTipleriListele.Service';
import { AracDetayService } from '../AracDetay/AracDetay.Service';
import { FolkJoins } from '../FolkJoins/FolkJoins';

@Injectable()
export class AracDetayResolver implements Resolve<any> {
  constructor(
    private _arac_detay_service: AracDetayService,
    private _arac_markalari_service: AracMarkalariListeleService,
    private _arac_cekis_tipleri_service: AracCekisTipleriListeleService,
    private _arac_kasa_tipleri_service:AracKasaTipleriListeleService,
    private _arac_motor_hacimleri_service:AracMotorHacimleriListeleService,
    private _arac_vites_tipleri_service:AracVitesTipleriListeleService,
    private _arac_yakit_tipleri_service:AracYakitTipleriListeleService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {

    let arrayServices = [
      this._arac_markalari_service.getAracMarkalariListele(),
      this._arac_cekis_tipleri_service.getAracCekisTipleriListele(),
      this._arac_kasa_tipleri_service.getAracKasaTipleriListele(),
      this._arac_motor_hacimleri_service.getAracMotorHacimleriListele(),
      this._arac_vites_tipleri_service.getAracVitesTipleriListele(),
      this._arac_yakit_tipleri_service.getAracYakitTipleriListele(),
      this._arac_detay_service.getAracDetay()
    ];

    var arrayFolksJoins = new FolkJoins(arrayServices);
    return arrayFolksJoins.getAll();
  }
}
