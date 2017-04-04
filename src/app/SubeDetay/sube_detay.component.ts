import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'sube_detay_component',
    templateUrl: './sube_detay.component.html'
})

export class SubeDetayComponent implements OnInit {

    // Resolve Data
    private data: any;
    // Şube Detay 
    private sube_detay: any;

    constructor(private route: ActivatedRoute) {

        // Resolve Data
        this.data = this.route.snapshot.data['data'];

        // Şube Detay
        this.sube_detay = this.data.contents.sube_detay;
    }

    ngOnInit() { }
}