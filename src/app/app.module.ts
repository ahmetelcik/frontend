import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { SolmenuComponent } from './solmenu/solmenu.component';
import { HeaderComponent } from './header/header.component';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';
import { routing } from './app.routing';
import { AraclarComponent } from './araclar/araclar.component';
import { MusterilerComponent } from './musteriler/musteriler.component';
import { MusteriDetayComponent } from './musteri-detay/musteri-detay.component';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { TabsModule } from 'ng2-bootstrap/tabs';
import { AccordionModule,DropdownModule,AlertModule,ModalModule } from 'ng2-bootstrap';
import { MusteriNotlariService } from './musteri-detay/Service/musteri-notlari.service';
import { NotlisteleComponent } from './musteri-detay/Components/notlistele/notlistele.component';
import { PanelComponent } from './Ui/Panel/panel.component';
import { ButtonComponent } from './Ui/Button/button.component';
import { ListComponent } from './Ui/List/list.component';
import { FormComponent } from './Ui/Form/form.component';
import { TabComponent } from './Ui/Tab/tab.component';
import { ModalComponent } from './Ui/Modal/modal.component';
import { DatepickerModule } from 'ng2-bootstrap/datepicker';
import { AracDetayComponent } from './AracDetay/arac-detay.component';
import { AracGiderEkleComponent } from './AracGiderEkle/arac-gider-ekle.component';
import { AracDuzenleComponent } from './AracDuzenle/arac-duzenle.component';
import { MusteriDuzenleComponent } from './MusteriDuzenle/musteri-duzenle.component';
import { MusteriMaasPrimEkleComponent } from './MusteriMaasPrimEkle/musteri-maas-prim-ekle.component';
import { KiralamaDetayComponent } from './KiralamaDetay/kiralama-detay.component';
import { GiderListeleComponent } from './Giderler/gider-listele.component';
import { GiderDetayComponent } from './GiderDetay/gider-detay.component';
import { AracEkleComponent } from './AracEkle/arac-ekle.component';

/** SERVICES **/
/** Araç Markaları Listele Service */
import { AracMarkalariListeleService } from './Shared/Service/AracMarkalariListeleService/arac_markalari_listele.service';

/** Araç Çekiş Tipleri Listele Service */
import { AracCekisTipleriListeleService } from './Shared/Service/AracCekisTipleri/arac_cekis_tipleri.service';

/** Araç Kasa Tipleri Listele Service */
import { AracKasaTipleriListeleService } from './Shared/Service/AracKasaTipleriService/arac_kasa_tipleri.service';

/** Araç Motor Hacimleri Listele Service */
import { AracMotorHacimleriListeleService } from './Shared/Service/AracMotorHacimleriService/arac_motor_hacimleri.service';

/** Araç Vites Tipleri Listele Service */
import { AracVitesTipleriListeleService } from './Shared/Service/AracVitesTipleriService/arac_vites_tipleri.service';

/** Araç Yakit Tipleri Listele Service */
import { AracYakitTipleriListeleService } from './Shared/Service/AracYakitTipleriService/arac_yakit_tipleri.service';

/** Firma Şubeleri Listele Service */
import { FirmaSubeleriListeleService } from './Shared/Service/SubeListeleService/sube_listele.service';



/** SERVICES **/
@NgModule({
  declarations: [
    AppComponent,
    SolmenuComponent,
    HeaderComponent,
    AnasayfaComponent,
    AraclarComponent,
    MusterilerComponent,
    MusteriDetayComponent,
    NotlisteleComponent,
    PanelComponent,
    ButtonComponent,
    ListComponent,
    FormComponent,
    TabComponent,
    ModalComponent,
    AracDetayComponent,
    AracGiderEkleComponent,
    AracDuzenleComponent,
    MusteriDuzenleComponent,
    MusteriMaasPrimEkleComponent,
    KiralamaDetayComponent,
    GiderListeleComponent,
    GiderDetayComponent,
    AracEkleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    Ng2Bs3ModalModule,
    AccordionModule.forRoot(),
    DropdownModule.forRoot(),
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    DatepickerModule.forRoot()

  ],
  providers: [
    MusteriNotlariService,
    AracMarkalariListeleService,
    AracCekisTipleriListeleService,
    AracKasaTipleriListeleService,
    AracMotorHacimleriListeleService,
    AracVitesTipleriListeleService,
    AracYakitTipleriListeleService,
    FirmaSubeleriListeleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
