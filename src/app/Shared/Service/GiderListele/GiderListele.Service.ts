import { Injectable, } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/operator/map';

@Injectable()
export class GiderListeleService {

  protected _url = "/app/Shared/Service/GiderListele/gider_listele.json";

  public constructor(private http: Http){

  }

  getGiderListele(){
    return this.http.get(this._url)
      .map((res:Response) => res.json());
  }

}
