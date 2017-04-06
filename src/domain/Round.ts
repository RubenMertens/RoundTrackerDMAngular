import {RoundEntity} from "./RoundEntity";
/**
 * Created by RubenMertens on 06/04/2017.
 */

export class Round{

  constructor(
    public roundList :Array<RoundEntity>,
    public roundCounter:number,
    public roundFirstEntity:RoundEntity,
    public buffer:Array<RoundEntity>
  ){

}
}
