import {Condition} from "./Condition";
/**
 * Created by Ravanys on 25/03/2017.
 */


export class RoundEntity{

  public totalInitiative:number;

  constructor(
    public name:string,
    public initiativeRoll:number,
    public initiativeModifier:number,
    public health:number,
    public conditions:Array<Condition>
  ){
    this.totalInitiative = this.initiativeModifier + this.initiativeRoll;
  }


}
