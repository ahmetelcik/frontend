import { Injectable, } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/operator/map';

@Injectable()
export class MusteriListeleService {

  protected _url = "/app/Shared/Service/MusteriListele/musteriler.json";

  public constructor(private http: Http){

  }

  getMusteriListele(){
    return this.http.get(this._url)
      .map((res:Response) => res.json());
  }

}
