import { Injectable, } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/operator/map';

@Injectable()
export class AracYakitTipleriListeleService {

  protected _url = "/app/Shared/Service/AracYakitTipleriListele/yakit_tipleri.json";

  constructor(private http :Http) {

  }

  public getAracYakitTipleriListele(){
    return this.http.get(this._url)
      .map((res:Response) => res.json());
  }
}
