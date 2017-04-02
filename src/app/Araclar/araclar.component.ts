import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-araclar',
  templateUrl: './araclar.component.html',
})
export class AraclarComponent implements OnInit {

  public araclar: any;
  public data: any;

  constructor(private route: ActivatedRoute) {
    this.data = this.route.snapshot.data['data'];
    this.araclar = this.data.contents.araclar;

  }
  ngOnInit() {
    

    

  }

}
