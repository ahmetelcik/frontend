import { Injectable, } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/operator/map';

@Injectable()
export class AracGiderKategoriListeleService {

  protected _url = "/app/Shared/Service/AracGiderKategoriListele/arac_gider_kategorileri.json";

  public constructor(private http: Http){

  }

  getAracGiderKategorileri(){
    return this.http.get(this._url)
      .map((res:Response) => res.json());
  }

}
