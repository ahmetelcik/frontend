/**
 * Araç Ekleme Formunun Model Dosyasıdır
 */
export class AracGiderEkleModel{

  public aciklama: string;
  public fatura_tarihi: string;
  public fatura_toplam_tutar: string;
  public fatura_kdv: string;
  public gider_sube: number;
  public gider_kategori: number;
  public odeme_tarihi: string;
  public odendigi_hesap: number;
  public odenen_tutar: string;
  public odeme_durumu: string;

  public constructor(
    aciklama:string = "aciklama",
    fatura_tarihi:string = "26/03/2017",
    fatura_toplam_tutar: string = "5,00",
    fatura_kdv: string = "0,00",
    gider_sube: number = 0,
    gider_kategori: number = 0,
    odeme_tarihi: string = "26/03/2016",
    odendigi_hesap: number = 0,
    odenen_tutar: string = "0,00",
    odeme_durumu: string = "Odenecek"
  ){
  this.aciklama = aciklama;
  this.fatura_tarihi = fatura_tarihi;
  this.fatura_toplam_tutar = fatura_toplam_tutar;
  this.fatura_kdv = fatura_kdv;
  this.gider_sube = gider_sube;
  this.gider_kategori = gider_kategori;
  this.odeme_tarihi = odeme_tarihi;
  this.odendigi_hesap = odendigi_hesap;
  this.odenen_tutar = odenen_tutar;
  this.odeme_durumu = odeme_durumu;
  }

}
