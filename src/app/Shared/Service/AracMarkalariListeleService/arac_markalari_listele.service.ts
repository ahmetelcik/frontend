import { Injectable } from '@angular/core';
import { Http,Response,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
@Injectable()
export class AracMarkalariListeleService {


  private arac_markalari;

  public constructor(private http: Http){

  }



  getPosts(): Observable<any> {

    this.arac_markalari = this.http.get("/app/Shared/Service/AracMarkalariListeleService/arac_markalari.json")
      .delay(300)
      .map(res =>  res.json());


    return this.arac_markalari;
  }





}
