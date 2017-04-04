import {Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from "@angular/router";
import { Injectable } from "@angular/core";
import {Observable} from "rxjs";


import { HizmetDetayService } from './HizmetDetay.Service';

@Injectable()
export class HizmetDetayResolver implements Resolve<any> {

  constructor(private hizmet_detay_service: HizmetDetayService) {
    
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
      return this.hizmet_detay_service.getHizmetDetay();
  }
}