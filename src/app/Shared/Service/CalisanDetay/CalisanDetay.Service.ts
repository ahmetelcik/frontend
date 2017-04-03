import { Injectable, } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/operator/map';

@Injectable()
export class CalisanDetayService {

  protected _url = "/app/Shared/Service/CalisanDetay/calisan_detay.json";

  public constructor(private http: Http){

  }

  getCalisanDetay(){
    return this.http.get(this._url)
      .map((res:Response) => res.json());
  }

}
