import { Component, OnInit } from '@angular/core';
import { AracListeleService } from '../Shared/Service/AracListele/AracListele.Service';
import { FolkJoins } from '../Shared/Service/FolkJoins/FolkJoins';
@Component({
  selector: 'app-araclar',
  templateUrl: './araclar.component.html',
})
export class AraclarComponent implements OnInit {

  public araclar:any;
  constructor(private _araclar_service: AracListeleService) { }

  ngOnInit() {
    let arrayServices = [
      this._araclar_service.getAracListele()
    ];

    var arrayFolksJoins = new FolkJoins(arrayServices);

    arrayFolksJoins.getAll().subscribe(
      data => {
        this.araclar = data["0"].contents.araclar
      },
      err => {
        console.error(err)
      },
      // the third argument is a function which runs on completion
      () => {
        console.log("veriler çekildi");
      }

    );
  }

}
