import {Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import { AracDetayService } from './AracDetay.Service';
import {Observable} from "rxjs";

@Injectable()
export class AracDetayResolver implements Resolve<any> {
  constructor(private service: AracDetayService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return this.service.getAracDetay();
  }
}
