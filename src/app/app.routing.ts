import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule,Resolve } from '@angular/router';

import { AppComponent } from './app.component';
import { SolmenuComponent } from './solmenu/solmenu.component';
import { HeaderComponent } from './header/header.component';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';
import { AraclarComponent } from './Araclar/araclar.component';
import { MusterilerComponent } from './musteriler/musteriler.component';
import { MusteriDetayComponent } from './musteri-detay/musteri-detay.component';
import { PanelComponent } from './Ui/Panel/panel.component';
import { ButtonComponent } from './Ui/Button/button.component';
import { ListComponent } from './Ui/List/list.component';
import { FormComponent } from './Ui/Form/form.component';
import { TabComponent } from './Ui/Tab/tab.component';
import { AracDetayComponent } from './AracDetay/arac-detay.component';
import { ModalComponent } from './Ui/Modal/modal.component';
import { AracGiderEkleComponent } from './AracGiderEkle/arac-gider-ekle.component';
import { AracDuzenleComponent } from './AracDuzenle/arac-duzenle.component';
import { MusteriDuzenleComponent } from './MusteriDuzenle/musteri-duzenle.component';
import { MusteriMaasPrimEkleComponent } from './MusteriMaasPrimEkle/musteri-maas-prim-ekle.component';
import { KiralamaDetayComponent } from './KiralamaDetay/kiralama-detay.component';
import { GiderListeleComponent } from './Giderler/gider-listele.component';
import { GiderDetayComponent } from './GiderDetay/gider-detay.component';
import { AracEkleComponent } from './AracEkle/arac-ekle.component';
import { CalisanlarComponent } from './Calisanlar/calisanlar.component';
import { AracDetayResolver } from './Shared/Service/AracDetay/AracDetay.Resolver';
import { CalisanDetayComponent } from './CalisanDetay/calisan_detay.component';
import { CalisanDuzenleComponent } from './CalisanDuzenle/calisan_duzenle.component';
import { CalisanMaasPrimEkleComponent } from './CalisanMaasPrimEkle/calisan_maas_prim_ekle.component';
import { SubelerComponent } from './Subeler/subeler.component';
import { CalisanEkleComponent } from './CalisanEkle/calisan_ekle.component';
import { SubeDetayComponent } from './SubeDetay/sube_detay.component';
import { SubeEkleComponent } from './SubeEkle/sube_ekle.component';
import { KategorilerComponent } from './Kategoriler/kategoriler.component';
import { HizmetKategoriEkleComponent } from './HizmetKategoriEkle/hizmet_kategori_ekle.component';
import { AracGiderKategoriEkleComponent } from './AracGiderKategoriEkle/arac_gider_kategori_ekle.component';
import { GiderKategoriEkleComponent } from './GiderKategoriEkle/gider_kategori_ekle.component';
import { HizmetlerComponent } from './Hizmetler/hizmetler.component';
import { HizmetDetayComponent } from './HizmetDetay/hizmet_detay.component';
import { HizmetEkleComponent } from './HizmetEkle/hizmet_ekle.component';
import { HesaplarComponent } from './Hesaplar/hesaplar.component';
import { HesapDetayComponent } from './HesapDetay/hesap_detay.component';
import { HesaplarBankaEkleComponent } from './HesaplarBankaEkle/hesaplar_banka_ekle.component';

const appRoutes: Routes = [
  {
    path: 'anasayfa',
    component: AnasayfaComponent
  },
  {
    path: 'araclar',
    component: AraclarComponent
  },
  {
    path: 'musteriler',
    component: MusterilerComponent
  },
  {
    path: "musteri/:id/detay",
    component: MusteriDetayComponent
  },
  {
    path: "calisanlar",
    component:  CalisanlarComponent 
  },
  {
    path: "calisanlar/:id/detay",
    component:  CalisanDetayComponent
  },
  {
    path: "calisanlar/:id/duzenle",
    component: CalisanDuzenleComponent
  },
  {
    path: "calisanlar/:id/maaslar/yeni",
    component: CalisanMaasPrimEkleComponent
  },
  {
    path: "calisanlar/yeni",
    component: CalisanEkleComponent
  },
  {
    path : "araclar/:id/detay",
    component : AracDetayComponent,
  },
  {
    path : "araclar/:id/gider/yeni",
    component : AracGiderEkleComponent
  },
  {
    path : "araclar/:id/duzenle",
    component : AracDuzenleComponent,
    resolve : {
      data : AracDetayResolver
    }

  },
  {
    path : "musteriler/:id/duzenle",
    component : MusteriDuzenleComponent,
  },
  {
    path : "musteriler/:id/maas/yeni",
    component : MusteriMaasPrimEkleComponent
  },
  {
    path : "kiralamalar/:id/detay",
    component : KiralamaDetayComponent
  },
  {
    path : "giderler/listele",
    component : GiderListeleComponent
  },
  {
    path : "giderler/:id/detay",
    component : GiderDetayComponent
  },
  {
    path : "araclar/yeni",
    component : AracEkleComponent
  },
  {
    path: "subeler",
    component: SubelerComponent
  },
  {
    path: "subeler/:id/detay",
    component: SubeDetayComponent
  },
  {
    path: "subeler/yeni",
    component: SubeEkleComponent
  },
  {
    path: "kategoriler",
    component: KategorilerComponent
  },
  {
    path: "kategoriler/hizmetler/yeni",
    component: HizmetKategoriEkleComponent
  },
  {
    path: "kategoriler/aracgider/yeni",
    component: AracGiderKategoriEkleComponent
  },
  {
    path: "kategoriler/gider/yeni",
    component: GiderKategoriEkleComponent
  },
  {
    path: "hizmetler",
    component: HizmetlerComponent
  },
  {
    path: "hizmetler/:id/detay",
    component: HizmetDetayComponent
  },
  {
    path: "hizmetler/yeni",
    component: HizmetEkleComponent
  },
  {
    path: "hesaplar",
    component: HesaplarComponent
  },
  {
    path: "hesaplar/:id/detay",
    component: HesapDetayComponent
  },
  {
    path: "hesaplar/banka/yeni",
    component: HesaplarBankaEkleComponent
  },
  {
    path: '',
    component: AnasayfaComponent
  },
  {
    path : "panel",
    component : PanelComponent
  },
  {
    path : "button",
    component : ButtonComponent
  },
  {
    path : "list",
    component : ListComponent
  },
  {
    path : "form",
    component: FormComponent
  },
  {
    path : "tab",
    component: TabComponent
  },
  {
    path : "modals",
    component : ModalComponent
  }
];



export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
