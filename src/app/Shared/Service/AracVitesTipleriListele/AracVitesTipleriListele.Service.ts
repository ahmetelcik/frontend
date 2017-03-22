import { Injectable, } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/operator/map';

@Injectable()
export class AracVitesTipleriListeleService {

  protected _url = "/app/Shared/Service/AracVitesTipleriListele/vites_tipleri.json";

  constructor(private http :Http) {

  }

  public getAracVitesTipleri(){
    return this.http.get(this._url)
      .map((res:Response) => res.json());
  }
}
