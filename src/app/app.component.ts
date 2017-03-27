import { Component } from '@angular/core';
import {RoundEntity} from "../domain/RoundEntity";
import {ConnectionService} from "../providers/ConnectionService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  roundEntities:Array<RoundEntity> = []

  inputHealth:number;
  inputname:string;
  inputInitRoll:number;
  inputInitMod:number;

  title = 'app works!';


  constructor(public connectionService:ConnectionService) {

  }

  ngOnInit():void{
    this.connectionService.openWebsocket().then(() => {
      this.connectionService.setMessageHandler((message) => this.messageHandler(message));
    });

/*
   this.connectionService.openWebsocket().subscribe(() => {
      this.connectionService.setMessageHandler((message) => this.messageHandler(message));
    });*/
  }



  sendRoundEntity(){
    this.connectionService.addRoundEntity(new RoundEntity(this.inputname,this.inputInitRoll,this.inputInitMod,this.inputHealth));
  }

  messageHandler(stringMessage){
    console.log(stringMessage);
    let wrapper = JSON.parse(stringMessage.data);
    console.log(wrapper);
    let message = JSON.parse(wrapper.message);
    console.log(message);
    switch (wrapper.messageType){
      case "ROUND_LIST":
        console.log("round list received");
        this.roundEntities = message;
        break;
    }
  }



}
