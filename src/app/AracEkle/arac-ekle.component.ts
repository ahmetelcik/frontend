import { Component, OnInit } from '@angular/core';
import { AracModel } from './Model/arac-ekle.model';

@Component({
  selector: 'app-arac-ekle',
  templateUrl: './arac-ekle.component.html',
})
export class AracEkleComponent implements OnInit {


  arac_markalari;
  arac_modelleri;

  arac_model = new AracModel("",null,null);
  constructor() {

    this.arac_markalari = [
      {
        'id' : 1,
        'marka_adi' : 'Audi'
      },
      {
        'id' : 2,
        'marka_adi' : 'Bmw'
      },
      {
        'id' : 3,
        'marka_adi' : 'Mercedes'
      },
      {
        'id' : 4,
        'marka_adi' : 'Volkswagen'
      },
    ];

    this.arac_modelleri = [
      {
        'id' : 10,
        'model_adi' : '3 Serisi'
      },
      {
        'id' : 11,
        'model_adi' : '4 Serisi'
      },
      {
        'id' : 12,
        'model_adi' : '5 Serisi'
      },
      {
        'id' : 13,
        'model_adi' : '7 Serisi'
      },
    ];

  }

  ngOnInit() {
  }

}
