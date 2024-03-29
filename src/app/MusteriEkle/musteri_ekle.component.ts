import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app_musteri_ekle_component',
    templateUrl: './musteri_ekle.component.html'
})

export class MusteriEkleComponent implements OnInit {

    private musteri_tipi: string = "Bireysel";
    constructor() { }

    ngOnInit() { }

    MusteriTipiChange(musteri_tipi: string) {
        this.musteri_tipi = musteri_tipi;
    }
}