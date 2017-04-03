import {Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from "@angular/router";
import { Injectable } from "@angular/core";
import {Observable} from "rxjs";

import { MusteriListeleService } from './MusteriListele.Service';

@Injectable()
export class MusteriListeleResolver implements Resolve<any> {

  constructor(private musteri_listele_service: MusteriListeleService) {
    
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
      return this.musteri_listele_service.getMusteriListele();
  }
}