import { Injectable, } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/operator/map';

@Injectable()
export class AracNotListeleService {

  private arac_detay = [];

  private _url = "/app/Shared/Service//AracNotlari/notlar.json";

  public constructor(private http: Http){
  }

  public getAracNotlariListele(){
    return this.http.get(this._url)
      .map((res:Response) => res.json());
  }




}
