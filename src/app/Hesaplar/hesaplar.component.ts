import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app_hesaplar_component',
    templateUrl: './hesaplar.component.html'
})

export class HesaplarComponent implements OnInit {
    
    // Resolve Data
    private data: any;
    
    // Hesaplar 
    private hesaplar: any;

    constructor(private route: ActivatedRoute) {

        // Resolve Data
        this.data = this.route.snapshot.data['data'];
        
        // Hesaplar 
        this.hesaplar = this.data.contents.hesaplar;

        
        console.log(this.data);
    
    }
    
    ngOnInit() { }
}