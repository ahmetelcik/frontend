import {Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from "@angular/router";
import { Injectable } from "@angular/core";
import {Observable} from "rxjs";

import { GiderOdemeDetayService } from './GiderOdemeDetay.Service'

@Injectable()
export class GiderOdemeDetayResolver implements Resolve<any> {

  constructor(private gider_odeme_detay_service: GiderOdemeDetayService) {
    
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {

    return this.gider_odeme_detay_service.getGiderOdemeDetay();
    
  }
}