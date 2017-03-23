import { Injectable, } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/operator/map';

@Injectable()
export class AracListeleService {

  protected _url = "/app/Shared/Service/AracListele/araclar.json";

  public constructor(private http: Http){

  }

  getAracListele(){
    return this.http.get(this._url)
      .map((res:Response) => res.json());
  }

}
