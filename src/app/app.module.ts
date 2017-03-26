import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { SolmenuComponent } from './solmenu/solmenu.component';
import { HeaderComponent } from './header/header.component';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';
import { routing } from './app.routing';
import { AraclarComponent } from './Araclar/araclar.component';
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
import { AracDetayGosterComponent } from './AracDetay/Components/arac_detay.component';
import { AracNotlariListeleComponent } from './AracDetay/Components/Arac_notlari_listele.component';
import { AracEkleFormComponent } from './AracEkle/Components/arac_ekle_form.component';
import { AracListeleComponent } from './Araclar/Components/Arac_listele.component';
import { AracDuzenleFormComponent } from './AracDuzenle/Components/arac_duzenle.component';
import { AracGiderEkleFormComponent } from './AracGiderEkle/Components/arac_gider_ekle.component';
import { MusteriMaasPrimEkleFormComponent } from './MusteriMaasPrimEkle/Components/maas_prim_ekle_form.component';
/** Services */
import { AracModelListeleService } from './Shared/Service/AracEkleForm/Arac_model_listele.service';
import { AracMarkalariListeleService } from './Shared/Service/AracMarkalariListele/AracMarkalariListele.Service';
import { AracCekisTipleriListeleService } from './Shared/Service/AracCekisTipleriListele/AracCekisTipleriListele.Service';
import { AracKasaTipleriListeleService } from './Shared/Service/AracKasaTipleriListele/AracKasaTipleriListele.Service';
import { AracMotorHacimleriListeleService } from './Shared/Service/AracMotorHacimleriListele/AracMotorHacimleriListele.Service';
import { AracVitesTipleriListeleService } from './Shared/Service/AracVitesTipleriListele/AracVitesTipleri.Service';
import { AracYakitTipleriListeleService } from './Shared/Service/AracYakitTipleriListele/AracYakitTipleriListele.Service';
import { FirmaSubeleriListeleService } from './Shared/Service/FirmaSubeleriListele/FirmaSubeleriListele.Service';
import { FolkJoins } from './Shared/Service/FolkJoins/FolkJoins';
import { AracMarkaModelListeleService } from './Shared/Service/AracMarkaModelListele/AracMarkaModelListele.Service';
import { AracDetayService } from './Shared/Service/AracDetay/AracDetay.Service';
import { AracNotListeleService } from './Shared/Service/AracNotlari/AracNotlariListele.Service';
import { AracListeleService } from './Shared/Service/AracListele/AracListele.Service';
/** Services **/
import { AracDetayResolver } from './Shared/Service/AracDetay/AracDetay.Resolver';
import { Ng2Validator } from './Shared/ng2_Validator/';
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
    AracEkleFormComponent,
    AracDetayGosterComponent,
    AracNotlariListeleComponent,
    AracListeleComponent,
    AracDuzenleFormComponent,
    AracGiderEkleFormComponent,
    MusteriMaasPrimEkleFormComponent,
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
    DatepickerModule.forRoot(),
    Ng2Validator

  ],
  providers: [
    MusteriNotlariService,
    AracModelListeleService,
    AracMarkalariListeleService,
    AracCekisTipleriListeleService,
    AracKasaTipleriListeleService,
    AracMotorHacimleriListeleService,
    AracVitesTipleriListeleService,
    AracYakitTipleriListeleService,
    FirmaSubeleriListeleService,
    AracMarkaModelListeleService,
    AracDetayService,
    AracNotListeleService,
    AracListeleService,
    AracDetayResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
