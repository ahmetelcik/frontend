import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app_hesap_detay_component',
    templateUrl: './hesap_detay.component.html'
})

export class HesapDetayComponent implements OnInit {
    
    // Resolve Data
    private data: any;

    // Hesap Detayı
    private hesap_detay: any;
    
    constructor(private route: ActivatedRoute) { 

        // Resolve Data
        this.data = this.route.snapshot.data['data'];
        
        // Hesap Detayı 
        this.hesap_detay = this.data.contents.hesap_detay;
    }

    ngOnInit() { }
}