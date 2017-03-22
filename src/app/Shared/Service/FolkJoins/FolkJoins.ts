import { Injectable, } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/operator/map';

export class FolkJoins {

  private AllServices = [];

  public constructor(services){
    this.AllServices = services;
    console.log(this.AllServices);
    console.log("ahmet");
  }

  // getAll() {
  //   return Observable.forkJoin(
  //     this._arac_detay_service.getAracDetay(),
  //     this._arac_notlari_listele_service.getNotListele()
  //   );
  // }




}
