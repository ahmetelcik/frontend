import { Injectable, } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/operator/map';

@Injectable()
export class CalisanListeleService {

  protected _url = "/app/Shared/Service/CalisanListele/calisan_listele.json";

  public constructor(private http: Http){

  }

  getCalisanListele(){
    return this.http.get(this._url)
      .map((res:Response) => res.json());
  }

}
