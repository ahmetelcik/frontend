import {Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from "@angular/router";
import { Injectable } from "@angular/core";
import {Observable} from "rxjs";

import { AracGiderKategoriListeleService } from './AracGiderKategoriListele.Service';

@Injectable()
export class AracGiderKategoriListeleResolver implements Resolve<any> {

  constructor(private arac_gider_kategori_listele_service: AracGiderKategoriListeleService) {
    
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
      return this.arac_gider_kategori_listele_service.getAracGiderKategorileri();
  }
}