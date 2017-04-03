import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
    moduleId: module.id,
    selector: 'app_musteri_detay_component',
    templateUrl: './musteri_detay.component.html'
})

export class MusteriDetayComponent implements OnInit {
    // Resolve Data 
    private data: any;

    // Müşteri Detay Data
    private musteri_detay: any;

    // Müşteri Notları
    private musteri_notlari: any;

    constructor(private route: ActivatedRoute) {

        // Resolve Data
        this.data = this.route.snapshot.data['data'];
        
        // Müşteri Detay 
        this.musteri_detay = this.data.contents.musteri_detay;

        // Müşteri Notlari 
        this.musteri_notlari = this.data.contents.musteri_notlari;
    

    }

    ngOnInit() { }
}