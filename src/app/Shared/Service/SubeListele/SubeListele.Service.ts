import { Injectable, } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/operator/map';

@Injectable()
export class SubeListeleService {

  protected _url = "/app/Shared/Service/SubeListele/sube_listele.json";

  public constructor(private http: Http){

  }

  getSubeler(){
    return this.http.get(this._url)
      .map((res:Response) => res.json());
  }

}
