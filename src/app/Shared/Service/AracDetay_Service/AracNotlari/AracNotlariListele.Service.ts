import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AracNotlariListeleService {

  private arac_detay;

  private _url = "/app/Shared/Service/AracDetay_Service/AracNotlari/notlar.json";

  public constructor(private http: Http){

  }


  getAracDetay(): Promise<any> {
    return this.http.get(this._url)
      .map(res => res.json())
      .toPromise();
  }

}
