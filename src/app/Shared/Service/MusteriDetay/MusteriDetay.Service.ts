import { Injectable, } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/operator/map';

@Injectable()
export class MusteriDetayService {

  protected _url = "/app/Shared/Service/MusteriDetay/musteri_detay.json";

  public constructor(private http: Http){

  }

  getMusteriDetay(){
    return this.http.get(this._url)
      .map((res:Response) => res.json());
  }

}
