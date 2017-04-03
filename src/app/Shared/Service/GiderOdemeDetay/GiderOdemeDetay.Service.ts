import { Injectable, } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/operator/map';

@Injectable()
export class GiderOdemeDetayService {

  protected _url = "/app/Shared/Service/GiderOdemeDetay/gider_odeme_detay.json";

  public constructor(private http: Http){

  }

  getGiderOdemeDetay(){
    return this.http.get(this._url)
      .map((res:Response) => res.json());
  }

}
