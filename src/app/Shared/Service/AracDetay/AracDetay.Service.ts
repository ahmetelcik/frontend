import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AracDetayService {

  private arac_detay;

  private _url = "/app/Shared/Service/AracDetay_Service/arac_detay.json";

  public constructor(private http: Http){

  }


  getAracDetay(): Promise<any> {
    return this.http.get(this._url)
      .map(res => res.json())
      .toPromise();
  }

}
