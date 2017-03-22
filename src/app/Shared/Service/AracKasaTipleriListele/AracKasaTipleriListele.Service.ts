import { Injectable, } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/operator/map';

@Injectable()
export class AracKasaTipleriListeleService {

  protected _url = "/app/Shared/Service/AracKasaTipleriListeleService/kasa_tipleri.json";

  constructor(private http :Http) {

  }

  public getAracKasaTipleriListele(){
    return this.http.get(this._url)
      .map((res:Response) => res.json());
  }
}
