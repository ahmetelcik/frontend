import { Injectable } from '@angular/core';
import { Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class AracEkleFormGetBilgilerService {


  private arac_markalari;

  public constructor(private http: Http){

  }


  getAracEklegetBilgiler(): Observable<any> {

    this.arac_markalari = this.http.get("/app/Shared/Service/AracEkleForm/Arac_ekle_form.json")
      .map(res =>  res.json());


    return this.arac_markalari;
  }

}
