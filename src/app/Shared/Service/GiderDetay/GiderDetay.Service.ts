import { Injectable, } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/operator/map';

@Injectable()
export class GiderDetayService {

  protected _url = "/app/Shared/Service/GiderDetay/gider_detay.json";

  public constructor(private http: Http){

  }

  getGiderDetay(){
    return this.http.get(this._url)
      .map((res:Response) => res.json());
  }

}
