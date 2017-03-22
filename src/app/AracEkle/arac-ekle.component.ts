import { Component, OnInit } from '@angular/core';

import { AracEkleFormComponent } from './Components/arac_ekle_form.component';

import { AracMarkalariListeleService } from '../Shared/Service/AracMarkalariListele/AracMarkalariListele.Service';
import { AracCekisTipleriListeleService } from '../Shared/Service/AracCekisTipleriListele/AracCekisTipleriListele.Service';
import { AracKasaTipleriListeleService } from '../Shared/Service/AracKasaTipleriListele/AracKasaTipleriListele.Service';
import { AracMotorHacimleriListeleService } from '../Shared/Service/AracMotorHacimleriListele/AracMotorHacimleriListele.Service';
import { AracVitesTipleriListeleService } from '../Shared/Service/AracVitesTipleriListele/AracVitesTipleriListele.Service';
import { AracYakitTipleriListeleService } from '../Shared/Service/AracYakitTipleriListele/AracYakitTipleriListele.Service';

@Component({
  selector: 'app-arac-ekle',
  templateUrl: './arac-ekle.component.html',
})
export class AracEkleComponent implements OnInit {

  constructor(){
  }

  ngOnInit() {


  }
}
