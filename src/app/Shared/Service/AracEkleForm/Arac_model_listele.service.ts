import { Injectable } from '@angular/core';
import { Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class AracModelListeleService {


  private arac_modelleri;

  public constructor(private http: Http){

  }


  getAracModelListele(marka_id:number): Observable<any> {

    this.arac_modelleri = this.http.get("/app/Shared/Service/AracEkleForm/arac_model_listele.json")
      .map(res =>  res.json());


    return this.arac_modelleri;
  }

}
