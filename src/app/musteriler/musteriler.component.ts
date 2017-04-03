import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-musteriler',
  templateUrl: './musteriler.component.html',
  styleUrls: ['./musteriler.component.scss']
})
export class MusterilerComponent implements OnInit {
  
 
  /** Data **/ 
  public data: any;
  
  // Araçlar
  public musteriler: any;

  constructor(private route: ActivatedRoute) {

    // Data Resolve
    this.data = this.route.snapshot.data['data'];  
    
    // Müşteriler 
    this.musteriler = this.data.contents.musteriler;
   

  }

  ngOnInit() {

  }

}
