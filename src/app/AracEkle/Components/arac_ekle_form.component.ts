import { Component, OnInit,Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AracModel } from '../Model/arac-ekle.model';
import { AracMarkaModelListeleService } from '../../Shared/Service/AracMarkaModelListele/AracMarkaModelListele.Service';
@Component({
    selector: 'app_arac_ekle_form_component',
    template: `
<!-- Panel -->
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
            <div class="form-group" [class.has-error-ozel]="arac_plaka.dirty && arac_plaka.errors">
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
              <div class="errors-div" *ngIf="arac_plaka.errors && arac_plaka.dirty">
                <div class="help-block" *ngIf="arac_plaka.errors.invalidNotBlankValidate">Araç Plakasını Boş Bırakamazsınız</div>
              </div>
            </div>
            <!-- Araç Plaka -->


            <!-- Araç Marka -->
            <div class="form-group" [class.has-error-ozel]="arac_marka.dirty && arac_marka.errors">
              <label class="control-label form-style-ozel-label">Araç Marka</label>
              <select class="form-control form-style-ozel" name="arac_marka" #arac_marka="ngModel" [(ngModel)]="arac_model.arac_marka" (ngModelChange)="aracMarkaChangeEvent($event)" notZeroValidate>
                <option value="0">Araç Marka Seçiniz</option>
                <option  *ngFor="let arac_marka of AracMarkalari" [value]="arac_marka.id">{{ arac_marka.marka_adi }}</option>
              </select>
              <div class="errors-div" *ngIf="arac_marka.errors && arac_marka.dirty">
                <div class="help-block" *ngIf="arac_marka.errors.invalidNotZero">Araç Markası Seçiniz</div>
              </div>
            </div>
            <!-- Araç Marka -->

            <!-- Araç Modeli -->
            <div class="form-group" [class.has-error-ozel]="arac_modeli.dirty && arac_modeli.errors">
              <label class="control-label form-style-ozel-label">Araç Modeli</label>
              <select class="form-control form-style-ozel" name="arac_modeli" #arac_modeli="ngModel" [(ngModel)]="arac_model.arac_modeli" notZeroValidate>
                <option value="0">Araç Modeli Seçiniz</option>
                <option *ngFor="let arac_modeli of arac_modelleri" [value]="arac_modeli.id"> {{ arac_modeli.model_adi }}</option>
              </select>
              <div class="errors-div" *ngIf="arac_modeli.errors && arac_modeli.dirty">
                <div class="help-block" *ngIf="arac_modeli.errors.invalidNotZero">Araç Modeli Seçiniz</div>
              </div>
            </div>
            <!-- Araç Modeli -->

            <!-- Araç Çekiş Tipi -->
            <div class="form-group" [class.has-error-ozel]="arac_cekis_tipi.dirty && arac_cekis_tipi.errors">
              <label class="control-label form-style-ozel-label">Çekiş Tipi</label>
              <select class="form-control form-style-ozel" name="arac_cekis_tipi" #arac_cekis_tipi="ngModel" [(ngModel)]="arac_model.arac_cekis_tipi" notZeroValidate>
                <option value="0">Çekiş Tipi Seçiniz</option>
                <option  *ngFor="let arac_cekis of AraCekisTipleri" [value]="arac_cekis.id">{{ arac_cekis.cekis_tipi_adi }}</option>
              </select>
              <div class="errors-div" *ngIf="arac_cekis_tipi.errors && arac_cekis_tipi.dirty">
                <div class="help-block" *ngIf="arac_cekis_tipi.errors.invalidNotZero">Araç Vites Tipi Seçiniz</div>
              </div>
            </div>
            <!-- Araç Çekiş Tipi -->

            <!-- Araç Kasa Tipi -->
            <div class="form-group" [class.has-error-ozel]="arac_kasa_tipi.dirty && arac_kasa_tipi.errors">
              <label class="control-label form-style-ozel-label">Kasa Tipi</label>
              <select class="form-control form-style-ozel" name="arac_kasa_tipi" #arac_kasa_tipi="ngModel" [(ngModel)]="arac_model.arac_kasa_tipi" notZeroValidate>
                <option value="0">Kasa Tipi Seçiniz</option>
                <option  *ngFor="let arac_kasa of AracKasaTipleri" [value]="arac_kasa.id">{{ arac_kasa.kasa_tipi_adi }}</option>
              </select>
              <div class="errors-div" *ngIf="arac_kasa_tipi.errors && arac_kasa_tipi.dirty">
                <div class="help-block" *ngIf="arac_kasa_tipi.errors.invalidNotZero">Araç Kasa Tipi Seçiniz</div>
              </div>
            </div>
            <!-- Araç Kasa Tipi -->

            <!-- Araç Motor Hacmi -->
            <div class="form-group" [class.has-error-ozel]="arac_motor_hacmi.dirty && arac_motor_hacmi.errors">
              <label class="control-label form-style-ozel-label">Motor Hacmi</label>
              <select class="form-control form-style-ozel" name="arac_motor_hacmi" #arac_motor_hacmi="ngModel" [(ngModel)]="arac_model.arac_motor_hacmi" notZeroValidate>
                <option value="0">Motor Hacmi Seçiniz</option>
                <option  *ngFor="let arac_motor_hacim of AracMotorHacimleri" [value]="arac_motor_hacim.id">{{ arac_motor_hacim.motor_hacim_adi }}</option>
              </select>
              <div class="errors-div" *ngIf="arac_motor_hacmi.errors && arac_motor_hacmi.dirty">
                <div class="help-block" *ngIf="arac_motor_hacmi.errors.invalidNotZero">Araç Motor Hacmi Seçiniz</div>
              </div>
            </div>
            <!-- Araç Motor Hacmi -->

            <!-- Araç Vites Tipi -->
            <div class="form-group" [class.has-error-ozel]="arac_vites_tipi.dirty && arac_vites_tipi.errors">
              <label class="control-label form-style-ozel-label">Vites Tipi</label>
              <select class="form-control form-style-ozel" name="arac_vites_tipi" #arac_vites_tipi="ngModel" [(ngModel)]="arac_model.arac_vites_tipi" notZeroValidate>
                <option value="0">Vites Tipi Seçiniz</option>
                <option  *ngFor="let arac_vites of AracVitesTipleri" [value]="arac_vites.id">{{ arac_vites.vites_tipi_adi }}</option>
              </select>
              <div class="errors-div" *ngIf="arac_vites_tipi.errors && arac_vites_tipi.dirty">
                <div class="help-block" *ngIf="arac_vites_tipi.errors.invalidNotZero">Araç Vites Tipi Seçiniz</div>
              </div>
            </div>
            <!-- Araç Vites Tipi -->

            <!-- Araç Yakıt Tipi -->
            <div class="form-group" [class.has-error-ozel]="arac_yakit_tipi.dirty && arac_yakit_tipi.errors">
              <label class="control-label form-style-ozel-label">Yakıt Tipi</label>
              <select class="form-control form-style-ozel" name="arac_yakit_tipi" #arac_yakit_tipi="ngModel" [(ngModel)]="arac_model.arac_yakit_tipi" notZeroValidate>
                <option value="0">Yakit Tipi Seçiniz</option>
                <option  *ngFor="let arac_yakit of AracYakitTipleri" [value]="arac_yakit.id">{{ arac_yakit.yakit_tipi_adi }}</option>
              </select>
              <div class="errors-div" *ngIf="arac_yakit_tipi.errors && arac_yakit_tipi.dirty">
                <div class="help-block" *ngIf="arac_yakit_tipi.errors.invalidNotZero">Araç Yakıt Tipi Seçiniz</div>
              </div>
            </div>
            <!-- Araç Yakıt Tipi -->

            <!-- Araç Başlangıç Şube -->
            <div class="form-group" [class.has-error-ozel]="arac_baslangic_sube.dirty && arac_baslangic_sube.errors">
              <label class="control-label form-style-ozel-label">Başlangıç Şube</label>
              <select class="form-control form-style-ozel" name="arac_baslangic_sube" #arac_baslangic_sube="ngModel" [(ngModel)]="arac_model.arac_baslangic_sube" notZeroValidate>
                <option value="0">Başlangıç Şube Seçiniz</option>
                <option  *ngFor="let sube of FirmaSubeleri" [value]="sube.id">{{ sube.sube_adi }}</option>
              </select>
              <div class="errors-div" *ngIf="arac_baslangic_sube.errors && arac_baslangic_sube.dirty">
                <div class="help-block" *ngIf="arac_baslangic_sube.errors.invalidNotZero">Araç Başlangıç Şubesini Seçiniz</div>
              </div>
            </div>
            <!-- Araç Başlangıç Şube -->

            <!-- Araç Kilometresi -->
            <div class="form-group" [class.has-error-ozel]="arac_kilometre.dirty && arac_kilometre.errors">
              <label for="arac_kilometresiLabel" class="control-label form-style-ozel-label">Kilometre</label>
              <input
                type="text"
                class="form-control form-style-ozel"
                id="arac_kilometresiLabel"
                placeholder="Araç Kilometresi"
                name="arac_kilometresi"
                #arac_kilometre="ngModel"
                [(ngModel)]="arac_model.arac_kilometre"
                NotBlankValidate
                >
              <div class="errors-div" *ngIf="arac_kilometre.errors && arac_kilometre.dirty">
                <div class="help-block" *ngIf="arac_kilometre.errors.invalidNotBlankValidate">Araç Kilometresini Boş Bırakamazsınız</div>
              </div>
            </div>
            <!-- Araç Kilometresi -->  
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
export class AracEkleFormComponent implements OnInit {


  /** Araç Ekle Model */
  public arac_model:AracModel = new AracModel();


  @Input('AracMarkalari') AracMarkalari;
  @Input('AraCekisTipleri') AraCekisTipleri;
  @Input('AracKasaTipleri') AracKasaTipleri;
  @Input('AracMotorHacimleri') AracMotorHacimleri;
  @Input('AracVitesTipleri') AracVitesTipleri;
  @Input('AracYakitTipleri') AracYakitTipleri;
  @Input('FirmaSubeleri') FirmaSubeleri;
  public arac_modelleri;

  constructor(private _arac_marka_model_service: AracMarkaModelListeleService) {

  }


  ngOnInit() {

  }


  /** Araç Markasının ngModeli Değişirse Burası Tetikleniyor **/
  aracMarkaChangeEvent(marka_id:number){

    if(marka_id > 0){

      console.log(marka_id);
      this._arac_marka_model_service.getAracMarkaModelListeleID(marka_id).subscribe(
        data => {
        this.arac_modelleri = data.contents.arac_marka_modelleri;
        // Araç modelinin içinden arac_modeli'ni değiştiriyoruz
        this.arac_model.arac_modeli = this.arac_modelleri[0].id;
      });

    }else{
      this.arac_model.arac_modeli = 0;
    }

  }



  /** Araç Ekleme **/
  submitAracEkleForm(aracEkleForm:NgForm){
      if(aracEkleForm.valid == true){
        console.log(this.arac_model);
      }else{
        /** Form Valid Değil Hata **/
      }
  }
}
