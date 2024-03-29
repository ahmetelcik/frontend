import { Injectable, } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/operator/map';

@Injectable()
export class AracMotorHacimleriListeleService {

  protected _url = "/app/Shared/Service/AracMotorHacimleriListele/motor_hacimleri.json";

  constructor(private http :Http) {

  }

  public getAracMotorHacimleriListele(){
    return this.http.get(this._url)
      .map((res:Response) => res.json());
  }
}
