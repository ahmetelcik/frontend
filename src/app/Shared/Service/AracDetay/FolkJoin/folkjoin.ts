import { Injectable, } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/operator/map';
import { AracDetayService } from '../AracDetay.Service';
import { AracNotListeleService } from '../../AracNotlari/AracNotlariListele.Service';
@Injectable()
export class FolkJoin {


  public constructor(private http: Http,private _arac_detay_service: AracDetayService,private _arac_notlari_listele_service: AracNotListeleService){

  }

  getAll() {
    return Observable.forkJoin(
      this._arac_detay_service.getAracDetay(),
      this._arac_notlari_listele_service.getNotListele()
    );
  }




}
