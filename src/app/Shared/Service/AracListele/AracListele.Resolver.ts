import {Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from "@angular/router";
import { Injectable } from "@angular/core";
import {Observable} from "rxjs";

import { AracListeleService } from './AracListele.Service';


@Injectable()
export class AracListeleResolver implements Resolve<any> {

  constructor(private arac_listele_service: AracListeleService) {
    
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.arac_listele_service.getAracListele();
  }
}
