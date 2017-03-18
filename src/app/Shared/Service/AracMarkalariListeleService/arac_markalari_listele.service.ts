import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AracMarkalariListeleService {


  private _AracMarkalari = [];

  public constructor(private http: Http){

  }



  getPosts() {
    return this.http.get("/app/Shared/Service/AracMarkalariListeleService/arac_markalari.json")
      .map(res =>  res.json());
  }





}
