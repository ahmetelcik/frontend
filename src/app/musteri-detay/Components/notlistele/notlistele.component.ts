import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-notlistele',
  template: `
<li style="position:relative;">
  <a href="javascript:void(0);" (click)="siktirClick($event)" >
    <div class="tab-ozel-icon-box">
      <i class="fa fa-commenting"></i>
    </div>
    <div class="tab-ozel-box-icerik">
      <span class="tab-ozel-box-icerik-not-yazi">{{ notData.notum}}</span>
      <span class="tab-ozel-box-icerik-alt-bilgi"> {{ notData.eklenme_tarihi_tr }} {{ notData.eklenme_saati }} / <a href="javascript:void(0);">{{ notData.ekleyen_kullanici_adi_soyadi }} </a> <a href="javascript:void(0);" class="pull-right f-t-14" style="color:#D52B2B"><i class="fa fa-trash-o musterinotsilbtntrash"></i></a> </span>
    </div>
  </a>

</li>
    
`,
  styleUrls: ['./notlistele.component.scss']
})
export class NotlisteleComponent implements OnInit {

  @Input('notData') notData;

  @Output('showData') showData = new EventEmitter();
  constructor() { }

  public siktirClick($event){
    this.showData.next(this.notData);
  }
  ngOnInit() {


  }

}
