import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';
import { SolmenuComponent } from './app/solmenu/solmenu.component';
import { HeaderComponent } from './app/header/header.component';
import { AnasayfaComponent } from './app/anasayfa/anasayfa.component';
import { AraclarComponent } from './app/araclar/araclar.component';
import { MusterilerComponent } from './app/musteriler/musteriler.component';
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
