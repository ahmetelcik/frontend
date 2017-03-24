import { Component, OnInit, Input, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AracModel } from '../../AracEkle/Model/arac-ekle.model';
@Component({
    selector: 'app_arac_duzenle_form_component',
    template: `
      {{ data.contents | json }}
      <form #aracEkleForm="ngForm"  novalidate>

        <div class="panel panel-light">
          <!-- Panel Heading -->
          <div class="panel-heading">
            <!-- Panel Left Block -->
            <div class="panel-heading-left-block">
              <span> Araç Ekle </span>
            </div>
            <!-- Panel Heading Left Block -->
          </div>
          <!-- Panel Heading -->
          <!-- Panel Body -->
          <div class="panel-body">
            <!-- Araç Plaka -->
            <div class="form-group">
              <label for="aracPlakaLabel" class="control-label form-style-ozel-label">Araç Plaka</label>
              <input
                type="text"
                class="form-control form-style-ozel"
                id="aracPlakaLabel"
                placeholder="Araç Plaka"
                name="arac_plaka"
                #arac_plaka="ngModel"
                [(ngModel)]="arac_model.arac_plaka"
                NotBlankValidate                
              >
            </div>
            <!-- Araç Plaka -->


            <!-- Araç Marka -->
            <div class="form-group">
              <label class="control-label form-style-ozel-label">Araç Marka</label>
              <select class="form-control form-style-ozel" name="arac_marka" #arac_marka="ngModel" [(ngModel)]="arac_model.arac_marka"  notZeroValidate>
                <option value="0">Araç Marka Seçiniz</option>
                <option  *ngFor="let arac_marka of AracMarkalari" [value]="arac_marka.id">{{ arac_marka.marka_adi }}</option>
              </select>
            </div>
            <!-- Araç Marka -->

            <!-- Araç Modeli -->
            <div class="form-group">
              <label class="control-label form-style-ozel-label">Araç Modeli</label>
              <select class="form-control form-style-ozel" name="arac_modeli" #arac_modeli="ngModel" [(ngModel)]="arac_model.arac_modeli" notZeroValidate>
                <option value="0">Araç Modeli Seçiniz</option>
              </select>
              
            </div>
            <!-- Araç Modeli -->

            <!-- Araç Çekiş Tipi -->
            <div class="form-group">
              <label class="control-label form-style-ozel-label">Çekiş Tipi</label>
              <select class="form-control form-style-ozel" name="arac_cekis_tipi" #arac_cekis_tipi="ngModel" [(ngModel)]="arac_model.arac_cekis_tipi" notZeroValidate>
                <option value="0">Çekiş Tipi Seçiniz</option>
                <option  *ngFor="let arac_cekis of AraCekisTipleri" [value]="arac_cekis.id">{{ arac_cekis.cekis_tipi_adi }}</option>
              </select>
              
            </div>
            <!-- Araç Çekiş Tipi -->

            <!-- Araç Kasa Tipi -->
            <div class="form-group">
              <label class="control-label form-style-ozel-label">Kasa Tipi</label>
              <select class="form-control form-style-ozel" name="arac_kasa_tipi" #arac_kasa_tipi="ngModel" [(ngModel)]="arac_model.arac_kasa_tipi" notZeroValidate>
                <option value="0">Kasa Tipi Seçiniz</option>
                <option  *ngFor="let arac_kasa of AracKasaTipleri" [value]="arac_kasa.id">{{ arac_kasa.kasa_tipi_adi }}</option>                
              </select>
              
            </div>
            <!-- Araç Kasa Tipi -->

            <!-- Araç Motor Hacmi -->
            <div class="form-group">
              <label class="control-label form-style-ozel-label">Motor Hacmi</label>
              <select class="form-control form-style-ozel" name="arac_motor_hacmi" #arac_motor_hacmi="ngModel" [(ngModel)]="arac_model.arac_motor_hacmi" notZeroValidate>
                <option value="0">Motor Hacmi Seçiniz</option>
                <option  *ngFor="let arac_motor_hacim of AracMotorHacimleri" [value]="arac_motor_hacim.id">{{ arac_motor_hacim.motor_hacim_adi }}</option>
              </select>
              
            </div>
            <!-- Araç Motor Hacmi -->

            <!-- Araç Vites Tipi -->
            <div class="form-group">
              <label class="control-label form-style-ozel-label">Vites Tipi</label>
              <select class="form-control form-style-ozel" name="arac_vites_tipi" #arac_vites_tipi="ngModel" [(ngModel)]="arac_model.arac_vites_tipi" notZeroValidate>
                <option value="0">Vites Tipi Seçiniz</option>
                <option  *ngFor="let arac_vites of AracVitesTipleri" [value]="arac_vites.id">{{ arac_vites.vites_tipi_adi }}</option>
              </select>
             
            </div>
            <!-- Araç Vites Tipi -->

            <!-- Araç Yakıt Tipi -->
            <div class="form-group">
              <label class="control-label form-style-ozel-label">Yakıt Tipi</label>
              <select class="form-control form-style-ozel" name="arac_yakit_tipi" #arac_yakit_tipi="ngModel" [(ngModel)]="arac_model.arac_yakit_tipi" notZeroValidate>
                <option value="0">Yakit Tipi Seçiniz</option>
                <option  *ngFor="let arac_yakit of AracYakitTipleri" [value]="arac_yakit.id">{{ arac_yakit.yakit_tipi_adi }}</option>
              </select>
              
            </div>
            <!-- Araç Yakıt Tipi -->
            <pre>
              {{ arac_model | json }}
            </pre>
          </div>
          <!-- Panel Body -->
          <!-- Panel Footer -->
          <div class="panel-footer">
            <div class="panel-footer-right-block">
              <button class="btn btn-success-ozel btn-lg" [class.disabled]="aracEkleForm.invalid" (click)="submitAracEkleForm(aracEkleForm)"><i class="fa fa-cloud-upload"></i> Kaydet</button>
            </div>
            <div class="clearfix"></div>
          </div>
          <!-- Panel Footer -->
        </div>
        <!-- Panel -->
      </form>
    `
})
export class AracDuzenleFormComponent implements OnInit {

  @Input('AracDetay') AracDetay;
  @Input('AracMarkalari') AracMarkalari;
  @Input('AraCekisTipleri') AraCekisTipleri;
  @Input('AracKasaTipleri') AracKasaTipleri;
  @Input('AracMotorHacimleri') AracMotorHacimleri;
  @Input('AracVitesTipleri') AracVitesTipleri;
  @Input('AracYakitTipleri') AracYakitTipleri;
  @Input('FirmaSubeleri') FirmaSubeleri;

  data;

  public arac_model: AracModel = new AracModel();
  constructor(private route:ActivatedRoute) {

  }

  ngOnInit(){

    this.data = this.route.snapshot.data['data'];
    console.log(this.data);
  }




}
