import { Injectable, } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/operator/map';

@Injectable()
export class GiderKategoriListeleService {

  protected _url = "/app/Shared/Service/GiderKategoriListele/gider_kategorileri.json";

  public constructor(private http: Http){

  }

  getGiderKategorileri(){
    return this.http.get(this._url)
      .map((res:Response) => res.json());
  }

}
