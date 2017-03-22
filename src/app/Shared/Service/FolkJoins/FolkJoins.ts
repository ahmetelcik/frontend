// import { Injectable, } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

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
