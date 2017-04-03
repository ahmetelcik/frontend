import {Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { HesapDetayService } from './HesapDetay.Service';

@Injectable()
export class HesapDetayResolver implements Resolve<any> {

  constructor(private hesap_detay_service: HesapDetayService) {
    
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {

    return this.hesap_detay_service.getHesapDetay();
    
  }
}