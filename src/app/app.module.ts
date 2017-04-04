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
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { TabsModule } from 'ng2-bootstrap/tabs';
import { AccordionModule,DropdownModule,AlertModule,ModalModule } from 'ng2-bootstrap';
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
import { MusteriDuzenleFormComponent } from './MusteriDuzenle/Components/musteri_duzenle_form.component';
import { CalisanlarComponent } from './Calisanlar/calisanlar.component';
import { CalisanDetayComponent } from './CalisanDetay/calisan_detay.component';
import { CalisanDuzenleComponent } from './CalisanDuzenle/calisan_duzenle.component';
import { CalisanDuzenleFormComponent } from './CalisanDuzenle/Components/calisan_duzenle_form.component';
import { CalisanMaasPrimEkleComponent } from './CalisanMaasPrimEkle/calisan_maas_prim_ekle.component';
import { CalisanMaasPrimEkleFormComponent } from './CalisanMaasPrimEkle/Components/calisan_maas_prim_ekle_form.component';
import { CalisanEkleComponent } from './CalisanEkle/calisan_ekle.component';
import { CalisanEkleFormComponent } from './CalisanEkle/Components/calisan_ekle_form.component';
import { SubelerComponent } from './Subeler/subeler.component';
import { SubeDetayComponent } from './SubeDetay/sube_detay.component';
import { SubeEkleComponent } from './SubeEkle/sube_ekle.component';
import { KategorilerComponent } from './Kategoriler/kategoriler.component';

import { AracGiderKategoriEkleComponent } from './AracGiderKategoriEkle/arac_gider_kategori_ekle.component';
import { GiderKategoriEkleComponent } from './GiderKategoriEkle/gider_kategori_ekle.component';
import { HizmetlerComponent } from './Hizmetler/hizmetler.component';
import { HizmetDetayComponent } from './HizmetDetay/hizmet_detay.component';
import { HizmetEkleComponent } from './HizmetEkle/hizmet_ekle.component';
import { HesaplarComponent } from './Hesaplar/hesaplar.component';
import { HesapDetayComponent } from './HesapDetay/hesap_detay.component';
import { HesaplarBankaEkleComponent } from './HesaplarBankaEkle/hesaplar_banka_ekle.component';
import { HesaplarKasaEkleComponent } from './HesaplarKasaEkle/hesaplar_kasa_ekle.component';
import { HesapParaGirisiEkleComponent } from './HesapParaGirisiEkle/hesap_para_giris_ekle.component';
import { HesapParaCikisiEkleComponent } from './HesapParaCikisiEkle/hesap_para_cikisi_ekle.component';
import { HesapDuzenleComponent } from './HesapDuzenle/hesap_duzenle.component';
import { MusteriEkleComponent } from './MusteriEkle/musteri_ekle.component';
import { GiderDuzenleComponent } from './GiderDuzenle/gider_duzenle.component';
import { GiderOdemeEkleComponent } from './GiderOdemeEkle/gider_odeme_ekle.component';
import { GiderOdemeDetay } from './GiderOdemeDetay/gider_odeme_detay.component';
import { AracGiderDetayComponent } from './AracGiderDetay/arac_gider_detay.component';
import { AracGiderDuzenleComponent } from './AracGiderDuzenle/arac_gider_duzenle.component';
import { AracGiderOdemeEkleComponent } from './AracGiderOdemeEkle/arac_gider_odeme_ekle.component';
import { AracGiderOdemeDetay } from './AracGiderOdemeDetay/arac_gider_odeme_detay.component';
import { MusteriDetayComponent } from './MusteriDetay/musteri_detay.component';
import { MusteriKartEkleComponent } from './MusteriKartEkle/musteri_kart_ekle.component';
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
import { HizmetKategoriEkleComponent } from './HizmetKategoriEkle/hizmet_kategori_ekle.component';
import { AracListeleResolver } from './Shared/Service/AracListele/AracListele.Resolver';
import { AracDetayResolver1 } from './Shared/Service/AracDetay/AracDetay.Resolver1';
import { AracGiderDetayService } from './Shared/Service/AracGiderDetay/AracGiderDetay.Service';
import { AracGiderDetayResolver } from './Shared/Service/AracGiderDetay/AracGiderDetay.Resolver';

import { MusteriListeleService } from './Shared/Service/MusteriListele/MusteriListele.Service';
import { MusteriListeleResolver } from './Shared/Service/MusteriListele/MusteriListele.Resolver';

import { MusteriDetayService } from './Shared/Service/MusteriDetay/MusteriDetay.Service';
import { MusteriDetayResolver } from './Shared/Service/MusteriDetay/MusteriDetay.Resolver';
import { CalisanListeleService } from './Shared/Service/CalisanListele/CalisanListele.Service';
import { CalisanListeleResolver } from './Shared/Service/CalisanListele/CalisanListele.Resolver';

import { CalisanDetayService } from './Shared/Service/CalisanDetay/CalisanDetay.Service'
import { CalisanDetayResolver } from './Shared/Service/CalisanDetay/CalisanDetay.Resolver';

import { GiderListeleService } from './Shared/Service/GiderListele/GiderListele.Service';
import { GiderListeleResolver } from './Shared/Service/GiderListele/GiderListele.Resolver';

import { GiderDetayService } from './Shared/Service/GiderDetay/GiderDetay.Service';
import { GiderDetayResolver } from './Shared/Service/GiderDetay/GiderDetay.Resolver';

import { GiderOdemeDetayService } from './Shared/Service/GiderOdemeDetay/GiderOdemeDetay.Service';
import { GiderOdemeDetayResolver } from './Shared/Service/GiderOdemeDetay/GiderOdemeDetay.Resolver';

import { HesapListeleService } from './Shared/Service/KasaveBankalar/HesapListele.Service';
import { HesapListeleResolver } from './Shared/Service/KasaveBankalar/HesapListele.Resolver';

import { HesapDetayService } from './Shared/Service/KasaveBankaDetay/HesapDetay.Service';
import { HesapDetayResolver } from './Shared/Service/KasaveBankaDetay/HesapDetay.Resolver';

import { SubeListeleService } from './Shared/Service/SubeListele/SubeListele.Service';
import { SubeListeleResolver } from './Shared/Service/SubeListele/SubeListele.Resolver';

import { SubeDetayService } from './Shared/Service/SubeDetay/SubeDetay.Service';
import { SubeDetayResolver } from './Shared/Service/SubeDetay/SubeDetay.Resolver';

import { HizmetListeleService } from './Shared/Service/HizmetListele/HizmetListele.Service';
import { HizmetListeleResolver } from './Shared/Service/HizmetListele/HizmetListele.Resolver';

import { HizmetDetayService } from './Shared/Service/HizmetDetay/HizmetDetay.Service';
import { HizmetDetayResolver } from './Shared/Service/HizmetDetay/HizmetDetay.Resolver';

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
    MusteriDuzenleFormComponent,
    CalisanlarComponent,
    CalisanDetayComponent,
    CalisanDuzenleComponent,
    CalisanDuzenleFormComponent,
    CalisanMaasPrimEkleComponent,
    CalisanMaasPrimEkleFormComponent,
    CalisanEkleComponent,
    CalisanEkleFormComponent,
    SubelerComponent,
    SubeDetayComponent,
    SubeEkleComponent,
    KategorilerComponent,
    HizmetKategoriEkleComponent,
    AracGiderKategoriEkleComponent,
    GiderKategoriEkleComponent,
    HizmetlerComponent,
    HizmetDetayComponent,
    HizmetEkleComponent,
    HesaplarComponent,
    HesapDetayComponent,
    HesaplarBankaEkleComponent,
    HesaplarKasaEkleComponent,
    HesapParaGirisiEkleComponent,
    HesapParaCikisiEkleComponent,
    HesapDuzenleComponent,
    MusteriEkleComponent,
    GiderDuzenleComponent,
    GiderOdemeEkleComponent,
    GiderOdemeDetay,
    AracGiderDetayComponent,
    AracGiderDuzenleComponent,
    AracGiderOdemeEkleComponent,
    AracGiderOdemeDetay,
    MusteriDetayComponent,
    MusteriKartEkleComponent,
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
    AracDetayResolver,
    AracListeleResolver,
    AracDetayResolver1,
    AracGiderDetayService,
    AracGiderDetayResolver,
    MusteriListeleService,
    MusteriListeleResolver,
    MusteriDetayService,
    MusteriDetayResolver,
    CalisanListeleService,
    CalisanListeleResolver,
    CalisanDetayService,
    CalisanDetayResolver,
    GiderListeleService,
    GiderListeleResolver,
    GiderDetayService,
    GiderDetayResolver,
    GiderOdemeDetayService,
    GiderOdemeDetayResolver,
    HesapListeleService,
    HesapListeleResolver,
    HesapDetayService,
    HesapDetayResolver,
    SubeListeleService,
    SubeListeleResolver,
    SubeDetayService,
    SubeDetayResolver,
    HizmetListeleService,
    HizmetListeleResolver,
    HizmetDetayService,
    HizmetDetayResolver,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
