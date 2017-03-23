import { Component, OnInit, Input} from '@angular/core';


@Component({
  selector: 'app-arac-listele-component',
  template: `
    <table class="table">
      <thead>
      <th class="arac-listele-table-head-text-first">Araç</th>
      <th class="arac-listele-table-head-text-last" style="text-align: right">Konumu</th>
      </thead>
      <tbody>
      <tr *ngFor="let arac of Araclar">
        <td class="first-table-cell">
          <a routerLink="/araclar/{{ arac.id }}/detay">
            <div class="arac-listele-table-left-block">
              <div class="arac-listele-table-left-icon-block">
                <i class="fa fa-car"></i>
                <i class="fa fa-circle arac-listele-table-left-icon-durumu arac-durumu-succes"></i>
              </div>
              <div class="arac-listele-table-left-arac-marka-full">
                <span class="arac-listele-table-left-arac-marka-adi-span">{{ arac.arac_marka.marka_adi }} {{ arac.arac_modeli.model_adi }}({{ arac.arac_yakit_tipi.yakit_tipi_adi}})</span>
                <span class="arac-listele-table-left-arac-marka-plaka-span">{{ arac.arac_plaka }}</span>
              </div>
            </div>
          </a>
        </td>
        <td style="text-align: right" class="last-table-cell">
          <a routerLink="/araclar/5/detay">
            <div class="arac-listele-table-right-block">
              <div class="arac-listele-table-right-konum-text">
                <span>{{ arac.arac_baslangic_sube.sube_adi }}</span>
              </div>
            </div>
          </a>
        </td>
      </tr>
      
      </tbody>
    </table>
  `
})
export class AracListeleComponent implements OnInit {



  @Input('Araclar') Araclar;
  constructor() { }

  ngOnInit() {
  }

}
