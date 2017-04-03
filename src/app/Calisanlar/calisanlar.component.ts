import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-calisanlar',
  templateUrl: './calisanlar.component.html'
})
export class CalisanlarComponent implements OnInit {

  // Resolve Data
  private data: any;  

  private calisanlar: any;
  constructor(private route: ActivatedRoute) {
    
    // Resolve Data
    this.data = this.route.snapshot.data['data'];
    this.calisanlar = this.data.contents.calisanlar;
    console.log(this.data);
  }

  ngOnInit() {

  }

}
