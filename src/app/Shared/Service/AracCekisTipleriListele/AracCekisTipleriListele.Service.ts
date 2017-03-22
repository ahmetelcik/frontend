import { Injectable, } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/operator/map';

@Injectable()
export class AracCekisTipleriListeleService {

  protected _url = "/app/Shared/Service/AracCekisTipleriListele/cekis_tipleri.json";

  constructor(private http :Http) {

  }

  public getAracCekisTipleriListele(){
    return this.http.get(this._url)
      .map((res:Response) => res.json());
  }
}
