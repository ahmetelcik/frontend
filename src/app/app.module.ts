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
import { AccordionModule,DropdownModule,AlertModule,ModalModule } from 'ng2-bootstrap';
import { MusteriNotlariService } from './musteri-detay/Service/musteri-notlari.service';
import { NotlisteleComponent } from './musteri-detay/Components/notlistele/notlistele.component';
import { PanelComponent } from './Panel/panel.component';
import { ButtonComponent } from './Button/button.component';
import { ListComponent } from './List/list.component';
import { FormComponent } from './Form/form.component';
import { TabComponent } from './Tab/tab.component';

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
    ModalModule.forRoot()
  ],
  providers: [MusteriNotlariService],
  bootstrap: [AppComponent]
})
export class AppModule { }
