import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SolmenuComponent } from './solmenu/solmenu.component';
import { HeaderComponent } from './header/header.component';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';
import { AraclarComponent } from './araclar/araclar.component';
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
    path : "araclar/:id/detay",
    component : AracDetayComponent
  },
  {
    path : "araclar/:id/gider/yeni",
    component : AracGiderEkleComponent
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
