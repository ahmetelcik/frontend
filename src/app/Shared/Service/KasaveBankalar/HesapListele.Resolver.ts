import {Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from "@angular/router";
import { Injectable } from "@angular/core";
import {Observable} from "rxjs";

import { HesapListeleService } from './HesapListele.Service';

@Injectable()
export class HesapListeleResolver implements Resolve<any> {

  constructor(private hesap_listele_service: HesapListeleService) {
    
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
      return this.hesap_listele_service.getHesaplar();
  }
}