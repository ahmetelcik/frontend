import {Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from "@angular/router";
import { Injectable } from "@angular/core";
import {Observable} from "rxjs";

import { GiderDetayService } from './GiderDetay.Service';

@Injectable()
export class GiderDetayResolver implements Resolve<any> {

  constructor(private gider_detay_service: GiderDetayService) {
    
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {

    return this.gider_detay_service.getGiderDetay();
    
  }
}