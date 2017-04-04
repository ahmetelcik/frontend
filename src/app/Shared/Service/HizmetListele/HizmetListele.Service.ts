import { Injectable, } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/operator/map';

@Injectable()
export class HizmetListeleService {

  protected _url = "/app/Shared/Service/HizmetListele/hizmet_listele.json";

  public constructor(private http: Http){

  }

  getHizmetler(){
    return this.http.get(this._url)
      .map((res:Response) => res.json());
  }

}
