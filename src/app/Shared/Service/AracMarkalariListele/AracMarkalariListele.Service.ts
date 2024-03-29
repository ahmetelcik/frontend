import { Injectable, } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/operator/map';

@Injectable()
export class AracMarkalariListeleService {

  protected _url = "/app/Shared/Service/AracMarkalariListele/markalar.json";

  constructor(private http :Http) {

  }

  public getAracMarkalariListele(){
    return this.http.get(this._url)
      .map((res:Response) => res.json());
  }
}
