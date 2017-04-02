import {Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";

import {Observable} from "rxjs";
import { AracDetayService } from './AracDetay.Service';
@Injectable()
export class AracDetayResolver1 implements Resolve<any> {
  constructor(private arac_detay_service: AracDetayService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.arac_detay_service.getAracDetay();
  }
}
