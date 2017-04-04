import { Injectable, } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/operator/map';

@Injectable()
export class HizmetDetayService {

  protected _url = "/app/Shared/Service/HizmetDetay/hizmet_detay.json";

  public constructor(private http: Http){

  }

  getHizmetDetay(){
    return this.http.get(this._url)
      .map((res:Response) => res.json());
  }

}
