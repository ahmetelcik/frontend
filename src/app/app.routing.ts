import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule,Resolve } from '@angular/router';

import { AppComponent } from './app.component';
import { SolmenuComponent } from './solmenu/solmenu.component';
import { HeaderComponent } from './header/header.component';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';
import { AraclarComponent } from './Araclar/araclar.component';
import { MusterilerComponent } from './musteriler/musteriler.component';
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
import { AracListeleResolver } from './Shared/Service/AracListele/AracListele.Resolver';
import { AracDetayResolver1 } from './Shared/Service/AracDetay/AracDetay.Resolver1';
import { AracGiderDetayResolver } from './Shared/Service/AracGiderDetay/AracGiderDetay.Resolver';
import { MusteriListeleResolver } from './Shared/Service/MusteriListele/MusteriListele.Resolver';
import { MusteriDetayResolver } from './Shared/Service/MusteriDetay/MusteriDetay.Resolver';
import { MusteriKartEkleComponent } from './MusteriKartEkle/musteri_kart_ekle.component';
import { CalisanListeleResolver } from './Shared/Service/CalisanListele/CalisanListele.Resolver';
import { CalisanDetayResolver } from './Shared/Service/CalisanDetay/CalisanDetay.Resolver';
import { GiderListeleResolver } from './Shared/Service/GiderListele/GiderListele.Resolver';
import { GiderDetayResolver } from './Shared/Service/GiderDetay/GiderDetay.Resolver';
import { GiderOdemeDetayResolver } from './Shared/Service/GiderOdemeDetay/GiderOdemeDetay.Resolver';
import { HesapListeleResolver } from './Shared/Service/KasaveBankalar/HesapListele.Resolver';
import { HesapDetayResolver } from './Shared/Service/KasaveBankaDetay/HesapDetay.Resolver';

import { SubeListeleResolver } from './Shared/Service/SubeListele/SubeListele.Resolver';

import { SubeDetayResolver } from './Shared/Service/SubeDetay/SubeDetay.Resolver';

import { HizmetListeleResolver } from './Shared/Service/HizmetListele/HizmetListele.Resolver';

import { HizmetDetayResolver } from './Shared/Service/HizmetDetay/HizmetDetay.Resolver';

import { KategorileriListeleResolveServiceAll } from './Kategoriler/Service/KategorileriListele.Service';

const appRoutes: Routes = [
  {
    path: 'anasayfa',
    component: AnasayfaComponent
  },
  {
    path: 'araclar',
    component: AraclarComponent,
    resolve: {
      data : AracListeleResolver
    }
  },
  {
    path: 'musteriler',
    component: MusterilerComponent,
    resolve: {
      data : MusteriListeleResolver
    }
  },
  {
    path: "musteriler/:id/detay",
    component: MusteriDetayComponent,
    resolve: {
      data : MusteriDetayResolver
    }
  },
  {
    path : "musteriler/:id/kartlar/yeni",
    component : MusteriKartEkleComponent
  },
  {
    path: "calisanlar",
    component: CalisanlarComponent,
    resolve: {
      data : CalisanListeleResolver
    }
  },
  {
    path: "calisanlar/:id/detay",
    component: CalisanDetayComponent,
    resolve: {
      data : CalisanDetayResolver
    }
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
    component: AracDetayComponent,
    resolve: {
      data : AracDetayResolver1
    }
  },
  {
    path : "araclar/:id/gider/yeni",
    component : AracGiderEkleComponent
  },
  {
    path: "araclar/giderler/:id/detay",
    component: AracGiderDetayComponent,
    resolve: {
      data : AracGiderDetayResolver
    }
  },
  {
    path: "araclar/giderler/:id/odeme/yeni",
    component: AracGiderOdemeEkleComponent
  },
  {
    path: "araclar/giderler/odeme/:odeme_id/detay",
    component: AracGiderOdemeDetay
  },
  {
    path: "araclar/giderler/:id/duzenle",
    component: AracGiderDuzenleComponent
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
    path: "musteriler/yeni",
    component: MusteriEkleComponent
  },
  {
    path : "kiralamalar/:id/detay",
    component : KiralamaDetayComponent
  },
  {
    path : "giderler/listele",
    component: GiderListeleComponent,
    resolve: {
      data : GiderListeleResolver
    }
  },
  {
    path : "giderler/:id/detay",
    component: GiderDetayComponent,
    resolve: {
      data : GiderDetayResolver
    }
  },
  {
    path: "giderler/:id/duzenle",
    component: GiderDuzenleComponent,
  },
  {
    path: "giderler/:id/odeme/yeni",
    component: GiderOdemeEkleComponent
  },
  {
    path: "giderler/:id/odeme/:odeme_id/detay",
    component: GiderOdemeDetay,
    resolve: {
      data : GiderOdemeDetayResolver
    }
  },
  {
    path : "araclar/yeni",
    component : AracEkleComponent
  },
  {
    path: "subeler",
    component: SubelerComponent,
    resolve : {
      data : SubeListeleResolver
    }
  },
  {
    path: "subeler/:id/detay",
    component: SubeDetayComponent,
    resolve: {
      data : SubeDetayResolver
    }
  },
  {
    path: "subeler/yeni",
    component: SubeEkleComponent
  },
  {
    path: "kategoriler",
    component: KategorilerComponent,
    resolve: {
      data : KategorileriListeleResolveServiceAll
    }
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
    component: HizmetlerComponent,
    resolve: {
      data : HizmetListeleResolver
    }
  },
  {
    path: "hizmetler/:id/detay",
    component: HizmetDetayComponent,
    resolve: {
      data : HizmetDetayResolver
    }
  },
  {
    path: "hizmetler/yeni",
    component: HizmetEkleComponent
  },
  {
    path: "hesaplar",
    component: HesaplarComponent,
    resolve: {
      data : HesapListeleResolver
    }
  },
  {
    path: "hesaplar/:id/detay",
    component: HesapDetayComponent,
    resolve: {
      data : HesapDetayResolver
    }
  },
  {
    path: "hesaplar/:id/duzenle",
    component: HesapDuzenleComponent
  },
  {
    path: "hesaplar/banka/yeni",
    component: HesaplarBankaEkleComponent
  },
  {
    path: "hesaplar/kasa/yeni",
    component: HesaplarKasaEkleComponent
  },
  {
    path: "hesaplar/:id/paragirisi/yeni",
    component: HesapParaGirisiEkleComponent
  },
  {
    path: "hesaplar/:id/paracikisi/yeni",
    component: HesapParaCikisiEkleComponent
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
