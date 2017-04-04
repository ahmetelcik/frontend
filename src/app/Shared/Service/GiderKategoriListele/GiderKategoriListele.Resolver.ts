import {Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from "@angular/router";
import { Injectable } from "@angular/core";
import {Observable} from "rxjs";

import { GiderKategoriListeleService } from './GiderKategoriListele.Service';

@Injectable()
export class GiderKategoriListeleResolver implements Resolve<any> {

  constructor(private gider_kategori_listele_service: GiderKategoriListeleService) {
    
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
      return this.gider_kategori_listele_service.getGiderKategorileri();
  }
}