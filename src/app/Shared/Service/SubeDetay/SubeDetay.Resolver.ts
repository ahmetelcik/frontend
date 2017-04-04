import {Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from "@angular/router";
import { Injectable } from "@angular/core";
import {Observable} from "rxjs";

import { SubeDetayService } from './SubeDetay.Service';

@Injectable()
export class SubeDetayResolver implements Resolve<any> {

  constructor(private sube_detay_service: SubeDetayService) {
    
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {

    return this.sube_detay_service.getSubeDetay();
    
  }
}