import { Injectable, } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/operator/map';

@Injectable()
export class HesapDetayService {

  protected _url = "/app/Shared/Service/KasaveBankaDetay/hesap_detay.json";

  public constructor(private http: Http){

  }

  getHesapDetay(){
    return this.http.get(this._url)
      .map((res:Response) => res.json());
  }

}
