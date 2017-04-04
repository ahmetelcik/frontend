import {Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";

import {Observable} from "rxjs";


import { GiderKategoriListeleService } from '../../Shared/Service/GiderKategoriListele/GiderKategoriListele.Service';
import { AracGiderKategoriListeleService } from '../../Shared/Service/AracGiderKategoriListele/AracGiderKategoriListele.Service';
import { HizmetKategoriListeleService } from '../../Shared/Service/HizmetKategoriListele/HizmetKategoriListele.Service';
import { FolkJoins } from '../../Shared/Service/FolkJoins/FolkJoins';


@Injectable()
export class KategorileriListeleResolveServiceAll implements Resolve<any> {

    constructor(private gider_kategori_listele_service: GiderKategoriListeleService, private arac_gider_kategori_listele_service: AracGiderKategoriListeleService, private hizmet_kategori_listele_service: HizmetKategoriListeleService) {
    
    }

  resolve(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<any>|Promise<any>|any {

    let arrayServices = [
      this.gider_kategori_listele_service.getGiderKategorileri(),
      this.arac_gider_kategori_listele_service.getAracGiderKategorileri(),
      this.hizmet_kategori_listele_service.getHizmetKategoriListele(),
    ];

    var arrayFolksJoins = new FolkJoins(arrayServices);
    return arrayFolksJoins.getAll();

  }
}
