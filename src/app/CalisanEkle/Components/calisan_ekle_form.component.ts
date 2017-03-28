import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app_calisan_ekle_form_component',
    template: `
<!-- Çalışan Ekle -->
<form>
    <div class="panel panel-light">
        <!-- Panel Heading -->
        <div class="panel-heading">
            <!-- Panel Left Block -->
            <div class="panel-heading-left-block">
                <span> Yeni Çalışan </span>
            </div>
            <!-- Panel Heading Left Block -->
        </div>
        <!-- Panel Heading -->
        <!-- Panel Body -->
        <div class="panel-body">
        
        <!-- Adı Soyadı -->
        <div class="form-group">
            <label for="CalisanAdiSoyadi" class="control-label form-style-ozel-label">Adı Soyadı</label>
            <input type="text" class="form-control form-style-ozel" id="CalisanAdiSoyadi" name="adi_soyadi">
        </div>
        <!-- Adı Soyadı -->
        
        <!-- E-Posta Adresi -->
        <div class="form-group">
            <label for="CalisanEpostaAdresi" class="control-label form-style-ozel-label">E-Posta Adresi</label>
            <input type="text" class="form-control form-style-ozel" id="CalisanEpostaAdresi" name="e_posta_adresi">
        </div>
        <!-- E-Posta Adresi -->
        
        <!-- IBAN NUMARASI -->
        <div class="form-group">
            <label for="CalisanIbanNumarasi" class="control-label form-style-ozel-label">IBAN Numarası</label>
            <input type="text" class="form-control form-style-ozel" id="CalisanIbanNumarasi" name="iban_numarasi">
        </div>
        <!-- IBAN NUMARASI -->
    
        </div>
        <!-- Panel Body -->

        <!-- Panel Footer -->
        <div class="panel-footer">
            <div class="panel-footer-right-block">
                <button class="btn btn-success-ozel btn-lg"><i class="fa fa-cloud-upload"></i> Kaydet</button>
            </div>
             <div class="clearfix"></div>
        </div>
    <!-- Panel Footer -->
    </div>
    <!-- Panel -->
</form>
<!-- Form -->
<!-- Çalışan Ekle -->

    `
})

export class CalisanEkleFormComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}