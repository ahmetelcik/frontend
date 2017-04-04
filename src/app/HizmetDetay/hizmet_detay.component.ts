import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
    selector: 'app_hizmet_detay_component',
    templateUrl: './hizmet_detay.component.html'
})

export class HizmetDetayComponent implements OnInit {

    // Resolve Data 
    private data: any;

    // Hizmet Detay 
    private hizmet_detay: any;

    constructor(private route: ActivatedRoute) { 

        // Resolve Data
        this.data = this.route.snapshot.data['data'];   
        this.hizmet_detay = this.data.contents.hizmet_detay;

    }

    ngOnInit() {
        
    }
}