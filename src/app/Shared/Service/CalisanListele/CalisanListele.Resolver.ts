import {Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from "@angular/router";
import { Injectable } from "@angular/core";
import {Observable} from "rxjs";

import { CalisanListeleService } from './CalisanListele.Service';

@Injectable()
export class CalisanListeleResolver implements Resolve<any> {

  constructor(private calisan_listele_service: CalisanListeleService) {
    
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {

    return this.calisan_listele_service.getCalisanListele();
    
  }
}