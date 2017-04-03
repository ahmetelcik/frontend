import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app_gider_odeme_detay_component',
    templateUrl: 'gider_odeme_detay.component.html'
})

export class GiderOdemeDetay implements OnInit {
    
    // Resolve Data
    private data: any;
    
    // Gider Ödeme Detay
    private odeme_detay: any;

    constructor(private route: ActivatedRoute) {

        // Resolve Data
        this.data = this.route.snapshot.data['data'];
        this.odeme_detay = this.data.contents.odeme_detay;
        console.log(this.data);
        
    }

    ngOnInit() { }
}