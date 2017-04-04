import { Injectable, } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/operator/map';

@Injectable()
export class HizmetKategoriListeleService {

  protected _url = "/app/Shared/Service/HizmetKategoriListele/hizmet_kategorileri.json";

  public constructor(private http: Http){

  }

  getHizmetKategoriListele(){
    return this.http.get(this._url)
      .map((res:Response) => res.json());
  }

}
