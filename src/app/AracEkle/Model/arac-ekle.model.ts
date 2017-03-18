/**
 * Araç Ekleme Formunun Model Dosyasıdır
 */
export class AracModel{

  /** @var string Araç Plakası */
  public arac_plaka           : string;

  /** @var number Araç Markası */
  public arac_marka           : number;

  /** @var number Araç Modeli */
  public arac_modeli          : number;

  /** @var number Araç Çekiş Tipi */
  public arac_cekis_tipi      : number;

  /** @var number Araç Kasa Tipi */
  public arac_kasa_tipi       : number;

  /** @var number Araç Motor Hacmi */
  public arac_motor_hacmi     : number;

  /** @var number Araç Vites Tipi */
  public arac_vites_tipi      : number;

  /** @var number Araç Yakıt Tipi */
  public arac_yakit_tipi      : number;

  /** @var number Araç Başlangıç Şubesi */

  public arac_baslangic_sube  : number;

  /** @var string Araç Başlangıç Kilometresi */
  public arac_kilometre       : string;


  /**
   *
   * @param string arac_plaka
   * @param number arac_marka
   * @param number arac_modeli
   * @param number arac_cekis_tipi
   * @param number arac_kasa_tipi
   * @param number arac_motor_hacmi
   * @param number arac_vites_tipi
   * @param number arac_baslangic_sube
   * @param number arac_kilometre
   */
  public constructor(
    arac_plaka          : string = "35 D 8897",
    arac_marka          : number = 0,
    arac_modeli         : number = 0,
    arac_cekis_tipi     : number = 0,
    arac_kasa_tipi      : number = 0,
    arac_motor_hacmi    : number = 0,
    arac_vites_tipi     : number = 0,
    arac_yakit_tipi     : number = 0,
    arac_baslangic_sube : number = 0,
    arac_kilometre      : string = ""
  ){

    this.arac_plaka = arac_plaka;
    this.arac_marka = arac_marka;
    this.arac_modeli = arac_modeli;
    this.arac_cekis_tipi = arac_cekis_tipi;
    this.arac_kasa_tipi = arac_kasa_tipi;
    this.arac_motor_hacmi = arac_motor_hacmi;
    this.arac_vites_tipi = arac_vites_tipi;
    this.arac_yakit_tipi = arac_yakit_tipi;
    this.arac_baslangic_sube = arac_baslangic_sube;
    this.arac_kilometre = arac_kilometre;
  }

}
