import { Component, OnInit } from '@angular/core';
import { AracDetayService } from '../Shared/Service/AracDetay/AracDetay.Service';
import { AracNotListeleService } from '../Shared/Service/AracNotlari/AracNotlariListele.Service';
import { FolkJoins } from '../Shared/Service/FolkJoins/FolkJoins';
@Component({
  selector: 'app-arac-detays',
  templateUrl: './arac-detay.component.html',
})
export class AracDetayComponent implements OnInit {

  public arac_detay: any;
  public arac_notlari: any;
  public fullData: any;

  constructor(private _arac_detay_service: AracDetayService, private _arac_notlari_service: AracNotListeleService) {

  }



  ngOnInit() {
    let arrayServices = [
      this._arac_detay_service.getAracDetay(),
      this._arac_notlari_service.getAracNotlariListele(),
    ];

    var arrayFolksJoins = new FolkJoins(arrayServices);

    arrayFolksJoins.getAll().subscribe(
      data => {
        this.fullData = data;
        this.arac_detay = data["0"].contents;
        this.arac_notlari = data["1"].contents;
      },
      err => {
        console.error(err)
      },
          // the third argument is a function which runs on completion
      () => {
        console.log(this.arac_detay);
        console.log(this.arac_notlari);
        console.log(this.fullData);
      }

    );



  }


}
