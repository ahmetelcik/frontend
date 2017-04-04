import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import {Observable} from "rxjs";
@Component({
    moduleId: module.id,
    selector: 'app_kategoriler',
    templateUrl: './kategoriler.component.html'
})

export class KategorilerComponent implements OnInit {
    
    // Resolve Data
    private data: any;
    
    // Gider Kategorileri
    private gider_kategorileri: any;

    // Araç Gider Kategorileri
    private arac_gider_kategorileri: any;

    // Hizmet Kategorileri
    private hizmet_kategorileri: any;
    
    constructor(private route: ActivatedRoute) {
        // Resolve Data
        this.data = this.route.snapshot.data['data'];
        
        var data = route.data;
        
        data.subscribe(
            (data) => console.log(data),
            (error) => console.log(error),
            () => console.log("comp")
         );
        
        
        
        // // Gider Kategorileri
        // this.gider_kategorileri = this.data.contents.gider_kategorileri;

        // // Araç Gider Kategorileri
        // this.arac_gider_kategorileri = this.data.contents.arac_gider_kategorileri;

        // // Hizmet Kategorileri
        // this.hizmet_kategorileri = this.data.contents.hizmet_kategorileri;



    }

    ngOnInit() { }
}