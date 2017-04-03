import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-gider-listele',
  templateUrl: './gider-listele.component.html',
})
export class GiderListeleComponent implements OnInit {
  
  // Resolve Data
  private data: any;
  private giderler: any;
  constructor(private route: ActivatedRoute) {

    // Resolve Data 
    this.data = this.route.snapshot.data['data'];     
    this.giderler = this.data.contents.giderler;
    console.log(this.giderler);
  }

  ngOnInit() {
  }

}
