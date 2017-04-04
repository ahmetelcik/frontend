import {Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from "@angular/router";
import { Injectable } from "@angular/core";
import {Observable} from "rxjs";

import { HizmetListeleService } from './HizmetListele.Service';

@Injectable()
export class HizmetListeleResolver implements Resolve<any> {

  constructor(private hizmet_listele_service: HizmetListeleService) {
    
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
      return this.hizmet_listele_service.getHizmetler();
  }
}