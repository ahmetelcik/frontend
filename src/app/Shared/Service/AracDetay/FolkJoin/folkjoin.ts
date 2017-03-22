import { Injectable, } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/operator/map';

@Injectable()
export class NotListeleService {


  public constructor(private http: Http){

  }

  getBooksAndMovies() {
    return Observable.forkJoin(
      this.http.get('/app/Shared/Service/AracDetay_Service/arac_detay.json').map((res: Response) => res.json()),
      this.http.get('/app/Shared/Service/AracDetay_Service/AracNotlari/notlar.json').map((res: Response) => res.json())
    );
  }




}
