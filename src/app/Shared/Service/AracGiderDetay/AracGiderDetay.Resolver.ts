import {Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";

import {Observable} from "rxjs";
import { AracGiderDetayService } from './AracGiderDetay.Service';

@Injectable()
export class AracGiderDetayResolver implements Resolve<any> {
  constructor(private arac_gider_detay_service : AracGiderDetayService) {}

  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    
    return this.arac_gider_detay_service.getAracGiderDetay();
    
  }
}
