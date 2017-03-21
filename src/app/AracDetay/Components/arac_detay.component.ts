import { Component, OnInit, Input } from '@angular/core';
import 'rxjs/add/operator/map';
/** Service **/
import { AracDetayService } from '../../Shared/Service/AracDetay_Service/AracDetay.Service';
@Component({
    selector: 'app-arac-detay-goster-component',
    template: `
<div class="panel panel-light">
        <!-- Panel Heading -->
        <div class="panel-heading">
          <!-- Panel Left Block -->
          <div class="panel-heading-left-block">
            <span> Araç Detays </span>
          </div>
          <!-- Panel Heading Left Block -->
        </div>
        <!-- Panel Heading -->
        <div class="panel-body">
          <div class="row musteri-detay-list-row-block">
          
            <div class="col-md-3">
              <span>Plaka</span>
            </div>
            <div class="col-md-1">
              <span>:</span>
            </div>
            <div class="col-md-8">
              <span> 2 </span>
            </div>
          </div>

          <div class="row musteri-detay-list-row-block">
            <div class="col-md-3">
              <span>Marka</span>
            </div>
            <div class="col-md-1">
              <span>:</span>
            </div>
            <div class="col-md-8">
              <span> 1 </span>
            </div>
          </div>
          <div class="row musteri-detay-list-row-block">
            <div class="col-md-3">
              <span>Model</span>
            </div>
            <div class="col-md-1">
              <span>:</span>
            </div>
            <div class="col-md-8">
              <span> 2 </span>
            </div>
          </div>
          <div class="row musteri-detay-list-row-block">
            <div class="col-md-3">
              <span>Yakıt</span>
            </div>
            <div class="col-md-1">
              <span>:</span>
            </div>
            <div class="col-md-8">
              <span>asd </span>
            </div>
          </div>
          <div class="row musteri-detay-list-row-block">
            <div class="col-md-3">
              <span>Çekiş Türü</span>
            </div>
            <div class="col-md-1">
              <span>:</span>
            </div>
            <div class="col-md-8">
              <span> sds </span>
            </div>
          </div>
          <div class="row musteri-detay-list-row-block">
            <div class="col-md-3">
              <span>Kasa</span>
            </div>
            <div class="col-md-1">
              <span>:</span>
            </div>
            <div class="col-md-8">
              <span> asdasd </span>
            </div>
          </div>
          <div class="row musteri-detay-list-row-block">
            <div class="col-md-3">
              <span>Motor Hacmi</span>
            </div>
            <div class="col-md-1">
              <span>:</span>
            </div>
            <div class="col-md-8">
              <span>21313</span>
            </div>
          </div>
          <div class="row musteri-detay-list-row-block">
            <div class="col-md-3">
              <span>Vites</span>
            </div>
            <div class="col-md-1">
              <span>:</span>
            </div>
            <div class="col-md-8">
              <span>44</span>
            </div>
          </div>

          <div class="row musteri-detay-list-row-block">
            <div class="col-md-3">
              <span>Kilometresi</span>
            </div>
            <div class="col-md-1">
              <span>:</span>
            </div>
            <div class="col-md-8">
              <span>asdad</span>
            </div>
          </div>

        </div>
        <div class="panel-footer">
          <!-- Panel Footer Left Block -->
          <div class="panel-footer-left-block">
            <div class="panel-footer-ekleyen-kullanici-block">
              <span>Ekleyen Kullanıcı : <a href="#" class="link-blue-hover">xxx</a></span>
            </div>
          </div>
          <!-- Panel Footer Left Block -->
          <!-- Panel Footer Right Block -->
          <div class="panel-footer-right-block">
            <div class="panel-footer-olusturulma-tarihi-block">
              <span>Oluşturulma Tarihi : xx</span>
            </div>
          </div>
          <!-- Panel Footer Right Block -->
          <div class="clearfix"></div>
        </div>
</div>
`,
})
export class AracDetayGosterComponent implements OnInit {


  @Input('AracDetayInput') AracDetayInput;


  constructor() {

  }

  ngOnInit() {





  }

}
