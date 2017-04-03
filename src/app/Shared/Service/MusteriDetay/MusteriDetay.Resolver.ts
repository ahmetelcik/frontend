import {Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from "@angular/router";
import { Injectable } from "@angular/core";
import {Observable} from "rxjs";

import { MusteriDetayService } from './MusteriDetay.Service';

@Injectable()
export class MusteriDetayResolver implements Resolve<any> {

  constructor(private musteri_detay: MusteriDetayService) {
    
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {

    return this.musteri_detay.getMusteriDetay();
    
  }
}