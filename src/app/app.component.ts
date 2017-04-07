import { Component } from '@angular/core';
import {RoundEntity} from "../domain/RoundEntity";
import {ConnectionService} from "../providers/ConnectionService";
import {Round} from "../domain/Round";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  round:Round = new Round(new Array(),0,null,new Array());

  inputHealth:number;
  inputname:string;
  inputInitRoll:number;
  inputInitMod:number;


  constructor(public connectionService:ConnectionService) {

  }

  ngOnInit():void{
    this.connectionService.openWebsocket().then(() => {
      this.connectionService.registerToBackend();
      this.connectionService.setMessageHandler((message) => this.messageHandler(message));
    });

/*
   this.connectionService.openWebsocket().subscribe(() => {
      this.connectionService.setMessageHandler((message) => this.messageHandler(message));
    });*/
  }

  sortByInit(){
    this.connectionService.sortRoundByInitiative();
  }

  nextTurn(){
    this.connectionService.nextTurn();
  }


  sendRoundEntity(){
    this.connectionService.addRoundEntity(new RoundEntity(this.inputname,this.inputInitRoll,this.inputInitMod,this.inputHealth,new Array<any>()));
  }


  reset(){
    this.connectionService.resetRound();
  }

  messageHandler(stringMessage){
    console.log(stringMessage);
    let wrapper = JSON.parse(stringMessage.data);
    console.log(wrapper);
    let message = JSON.parse(wrapper.message);
    console.log(message);
    switch (wrapper.messageType){
      case "ROUND_OUT":
        console.log("round list received");
        this.round = message;
        break;
    }
  }



}
