import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'app_subeler_component',
    templateUrl: './subeler.component.html'
})

export class SubelerComponent implements OnInit {

    // Resolve Data
    private data: any;
    
    // Şubeler
    private subeler: any;
    constructor(private route: ActivatedRoute) {
        
        // Resolve Data
        this.data = this.route.snapshot.data['data'];

        this.subeler = this.data.contents.subeler

    }
    
    ngOnInit() { }
}