import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'app_arac_gider_detay_component',
    templateUrl: './arac_gider_detay.component.html'
})

export class AracGiderDetayComponent implements OnInit {

   
    public data: any;
    public fatura_detay: any;
    public gider_odemeleri: any;
    public gider_notlari: any;

    constructor(private route: ActivatedRoute) {
        this.data = this.route.snapshot.data['data'];
        this.fatura_detay = this.data.contents.gider_fatura_detay;
        this.gider_odemeleri = this.data.contents.arac_gider_fatura_odemeleri;
        this.gider_notlari = this.data.contents.gider_notlari;

        console.log(this.data.contents.gider_fatura_detay);
     }

    ngOnInit() { 
        // this.data = this.route.snapshot.data['data'];

        // console.log(this.data);
    }
}