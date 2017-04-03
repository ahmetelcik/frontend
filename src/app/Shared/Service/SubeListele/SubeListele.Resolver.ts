import {Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from "@angular/router";
import { Injectable } from "@angular/core";
import {Observable} from "rxjs";

import { SubeListeleService } from './SubeListele.Service';

@Injectable()
export class SubeListeleResolver implements Resolve<any> {

  constructor(private sube_listele_service: SubeListeleService) {
    
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
      return this.sube_listele_service.getSubeler();
  }
}