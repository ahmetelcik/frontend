/**
 * Araç Ekleme Formunun Model Dosyasıdır
 */
export class AracModel{

  /** @var string Araç Plakası */
  arac_plaka:string;

  /** @var integer|number Araç Markasının ID değeri */
  arac_marka:number;

  /** @var integer|number Araç Modelinin ID değeri */
  arac_modeli:number;

  /**
   * @param string arac_plaka
   * @param number arac_marka
   * @param number arac_modeli
   */
  constructor(arac_plaka:string, arac_marka:number,arac_modeli:number){
    this.arac_plaka = arac_plaka;
    this.arac_marka = arac_marka;
    this.arac_modeli = arac_modeli;
  }

}
