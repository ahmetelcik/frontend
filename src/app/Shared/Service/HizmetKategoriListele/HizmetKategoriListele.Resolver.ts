import {Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from "@angular/router";
import { Injectable } from "@angular/core";
import {Observable} from "rxjs";

import { HizmetKategoriListeleService } from './HizmetKategoriListele.Service';

@Injectable()
export class HizmetKategoriListeleResolver implements Resolve<any> {

  constructor(private hizmet_kategori_listele_service: HizmetKategoriListeleService) {
    
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
      return this.hizmet_kategori_listele_service.getHizmetKategoriListele();
  }
}