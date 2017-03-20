export class NotZeroValidatorClass {

  private strValue: string;

  private inValid: boolean = true;

  public constructor(strValue: string){
    this.strValue = strValue;

  }


  private validate(): void {
    /**
     * Eğer strValue 0 (sıfır) değilse inValid'i false döndürcez
     */
    if(this.strValue !== "0"){
      this.inValid = false;
    }

  }
  public invalidNotZero(): boolean{
    this.validate();
    return this.inValid;
  }
}
