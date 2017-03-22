// import { Injectable, } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
//
//
// export class FolkJoins {
//
//   private AllServices = [];
//
//   public constructor(services){
//     this.AllServices = services;
//   }
//
//   getAll() {
//
//     if(this.AllServices){
//       console.log(this.AllServices);
//     }
//     // return Observable.forkJoin(
//     //   this._arac_detay_service.getAracDetay(),
//     //   this._arac_notlari_listele_service.getNotListele()
//     // );
//   }
//
//
//
//
// }


export class FolkJoins {

  private allServices;

  constructor(services){
    this.allServices = services;

  }

  getAll() {
    return Observable.forkJoin(
      this.allServices
    );
  }



}
