import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SolmenuComponent } from './solmenu/solmenu.component';
import { HeaderComponent } from './header/header.component';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';
import { AraclarComponent } from './araclar/araclar.component';
import { MusterilerComponent } from './musteriler/musteriler.component';
import { MusteriDetayComponent } from './musteri-detay/musteri-detay.component';
import { PanelComponent } from './Panel/panel.component';
import { ButtonComponent } from './Button/button.component';

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
  }
];



export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
