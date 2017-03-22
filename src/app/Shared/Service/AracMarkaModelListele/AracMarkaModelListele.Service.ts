import { Injectable, } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/operator/map';

@Injectable()
export class AracMarkaModelListeleService {

  protected _url = "/app/Shared/Service/AracMarkaModelListele/marka_modelleri.json";

  constructor(private http :Http) {

  }

  public getAracMarkaModelListele(){
    return this.http.get(this._url)
      .map((res:Response) => res.json());
  }

  public getAracMarkaModelListeleID(marka_id:number){
    return this.http.get(this._url)
      .map((res: Response) => res.json());
  }
}
