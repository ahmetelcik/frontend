import {Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from "@angular/router";
import { Injectable } from "@angular/core";
import {Observable} from "rxjs";

import { CalisanDetayService } from './CalisanDetay.Service';

@Injectable()
export class CalisanDetayResolver implements Resolve<any> {

  constructor(private calisan_detay_service: CalisanDetayService) {
    
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {

    return this.calisan_detay_service.getCalisanDetay();
    
  }
}