import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app_musteri_duzenle_form_component',
    template: `
       <!-- Form -->
    <form>
      <div class="panel panel-light">
        <!-- Panel Heading -->
        <div class="panel-heading">
          <!-- Panel Left Block -->
          <div class="panel-heading-left-block">
            <span> Müşteri Düzenle </span>
          </div>
          <!-- Panel Heading Left Block -->
        </div>
        <!-- Panel Heading -->
        <!-- Panel Body -->
        <div class="panel-body">
        
          <!-- Adı -->
          <div class="form-group">
            <label class="control-label form-style-ozel-label">Adı</label>
            <input type="text" class="form-control form-style-ozel" placeholder="Adı">
          </div>
          <!-- Adı -->  

          <!-- Soyadı -->
          <div class="form-group">
              <label class="control-label form-style-ozel-label">Soyadı</label>       
              <input type="text"  class="form-control form-style-ozel" placeholder="Soyadı">
          </div>
          <!-- Soyadı -->       

          <!-- TC NO -->
          <div class="form-group">
              <label class="control-label form-style-ozel-label">T.C No</label>       
              <input type="text"  class="form-control form-style-ozel" placeholder="T.C No">
          </div>
          <!-- TC NO -->

          <!-- Doğum Tarihi -->
          <div class="form-group">
              <label class="control-label form-style-ozel-label">Doğum Tarihi</label>       
              <input type="text"  class="form-control form-style-ozel" placeholder="Doğum Tarihi">
          </div>
          <!-- Doğum Tarihi -->

          <!-- E-Posta Adresi -->
          <div class="form-group">
              <label class="control-label form-style-ozel-label">E-Posta Adresi</label>       
              <input type="text"  class="form-control form-style-ozel" placeholder="E-Posta Adresi">
          </div>
          <!-- E-Posta Adresi -->

          <!-- Telefon Numarası --->
          <div class="form-group">
              <label class="control-label form-style-ozel-label">Telefon Numarası</label>       
              <input type="text"  class="form-control form-style-ozel" placeholder="Telefon Numarası">
          </div>
          <!-- Telefon Numarası --->

          <!-- IBAN Numarası -->
          <div class="form-group">
              <label class="control-label form-style-ozel-label">IBAN Numarası</label>       
              <input type="text"  class="form-control form-style-ozel" placeholder="IBAN Numarası">
          </div>
          <!-- IBAN Numarası -->

          <!-- Açık Adres -->
          <div class="form-group">
              <label for="" class="control-label form-style-ozel-label">Açık Adres</label>
              <textarea class="form-control form-style-ozel" placeholder="Açık Adres"></textarea>
          </div>
          <!-- Açık Adres -->
           
          
        </div>
        <!-- Panel Body -->
        <!-- Panel Footer -->
        <div class="panel-footer">
          <div class="panel-footer-right-block">
            <button class="btn btn-success-ozel btn-lg"><i class="fa fa-cloud-upload"></i> Kaydet </button>
          </div>
          <div class="clearfix"></div>
        </div>
        <!-- Panel Footer -->
      </div>
      <!-- Panel -->
    </form>
    <!-- Form --> 
    `
})
export class MusteriDuzenleFormComponent implements OnInit {
    
    constructor() { }

    
    ngOnInit() { }

    
}
