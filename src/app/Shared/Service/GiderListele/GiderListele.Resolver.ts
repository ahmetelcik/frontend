import {Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from "@angular/router";
import { Injectable } from "@angular/core";
import {Observable} from "rxjs";

import { GiderListeleService } from './GiderListele.Service';

@Injectable()
export class GiderListeleResolver implements Resolve<any> {

  constructor(private gider_listele_service: GiderListeleService) {
    
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {

    return this.gider_listele_service.getGiderListele();
    
  }
}