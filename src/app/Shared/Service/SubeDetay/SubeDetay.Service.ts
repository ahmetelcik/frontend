import { Injectable, } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/operator/map';

@Injectable()
export class SubeDetayService {

  protected _url = "/app/Shared/Service/SubeDetay/sube_detay.json";

  public constructor(private http: Http){

  }

  getSubeDetay(){
    return this.http.get(this._url)
      .map((res:Response) => res.json());
  }

}
