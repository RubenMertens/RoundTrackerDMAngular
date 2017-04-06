import {Component, OnInit, Input} from '@angular/core';
import {RoundEntity} from "../../domain/RoundEntity";
import {ConnectionService} from "../../providers/ConnectionService";
import {ConditionWrapper} from "../../domain/ConditionWrapper";
import {Condition} from "../../domain/Condition";

@Component({
  selector: 'app-round-entity',
  templateUrl: './round-entity.component.html',
  styleUrls: ['./round-entity.component.css']
})
export class RoundEntityComponent implements OnInit {

  @Input() roundEntity:RoundEntity;

  private description ="";
  private numberOfTurns = 0;


  constructor(public connectionService:ConnectionService) { }

  ngOnInit() {
  }

  handleAddCondition(){
    console.log("handling adding condition")
    this.connectionService.addCondition(new ConditionWrapper(this.roundEntity.name,new Condition(this.numberOfTurns,this.description)));
  }

}
