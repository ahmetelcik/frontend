import { Injectable } from '@angular/core';
import { Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class AracDetayService {

  private arac_detay;

  public constructor(private http: Http){

  }


  getAracDetay(arac_id:number): Observable<any> {

    this.arac_detay = this.http.get("/app/Shared/Service/AracDetay_Service/arac_detay.json")
      .map(res =>  res.json());


    return this.arac_detay;
  }

}
