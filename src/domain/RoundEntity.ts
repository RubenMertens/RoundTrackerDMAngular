/**
 * Created by Ravanys on 25/03/2017.
 */


export class RoundEntity{

  public totalInitiative:number;

  constructor(
    public name:string,
    public initiativeRoll:number,
    public initiativeModifier:number,
    public health:number
  ){
    this.totalInitiative = this.initiativeModifier + this.initiativeRoll;
  }


}
