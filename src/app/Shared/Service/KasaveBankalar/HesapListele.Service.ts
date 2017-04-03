import { Injectable, } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/operator/map';

@Injectable()
export class HesapListeleService {

  protected _url = "/app/Shared/Service/KasaveBankalar/hesaplar.json";

  public constructor(private http: Http){

  }

  getHesaplar(){
    return this.http.get(this._url)
      .map((res:Response) => res.json());
  }

}
