import { Injectable, } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/operator/map';
import 'rxjs/operator/delay';

@Injectable()
export class AracDetayService {


  protected _url = "/app/Shared/Service/AracDetay/arac_detay.json";

  public constructor(private http: Http){

  }


  getAracDetay(){
    return this.http.get(this._url)
      .map((res:Response) => res.json());
  }

}
