import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app_arac_gider_duzenle_component',
    templateUrl: './arac_gider_duzenle.component.html'
})

export class AracGiderDuzenleComponent implements OnInit {

    public odeme_durumu = 'Odenecek';
    
    constructor() { }

    ngOnInit() { }

    OdemeDurumuChange(odeme_durumu: string) {
        this.odeme_durumu = odeme_durumu;
    }
}