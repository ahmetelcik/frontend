import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app_hizmetler_component',
    templateUrl: 'hizmetler.component.html'
})

export class HizmetlerComponent implements OnInit {

    // Resolve Data 
    private data: any;

    // Hizmetler
    private hizmetler: any;

    constructor(private route: ActivatedRoute) {

        // Resolve Data
        this.data = this.route.snapshot.data['data'];

        // Hizmetler
        this.hizmetler = this.data.contents.hizmetler;
    
    }

    ngOnInit() { }
}