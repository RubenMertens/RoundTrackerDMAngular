import {Observable} from "rxjs";
import {RoundEntity} from "../domain/RoundEntity";
import {MessageWrapper} from "../domain/MessageWrapper";
/**
 * Created by Ravanys on 25/03/2017.
 */


export class ConnectionService{

  private websocketAdres = "ws://192.168.0.248:8080/game";


  private ws:any;

  constructor(){}

  public openWebsocket() :Promise<any>{
    this.ws = new WebSocket(this.websocketAdres);

    this.ws.onclose = function () {
      console.error("websocket closed");
    }

    this.ws.onmessage = function (message) {
      console.log(message.data);
    }
    return new Promise((resolve)=> {
      this.ws.onopen = function () {

        console.log("websocket opened");
        resolve(true);
      }
    })
  }
  /*  public openWebsocket() :Observable<any>{
    this.ws = new WebSocket(this.websocketAdres);

    this.ws.onclose = function () {
      console.error("websocket closed");
    }

    this.ws.onmessage = function (message) {
      console.log(message.data);
    }
    return Observable.create(observer => {
      this.ws.onopen = function () {

        console.log("websocket opened");
        observer.next();
        observer.complete();
      }
    })

  }*/

  public setMessageHandler(handler){
    console.log("handler changed");
    this.ws.onmessage = handler;
  }

  public addRoundEntity(roundEntity:RoundEntity){
    console.log(roundEntity);
    this.sendMessage("REGISTER_ROUNDENTITY",JSON.stringify(roundEntity));
  }

  public sendMessage(type:string, message:string){
    if(this.ws != null && this.ws.readyState === 1){
      let wrapper:MessageWrapper = new MessageWrapper(type,message);
      this.ws.send(JSON.stringify(wrapper));
    }else{
      console.error("Cant send message, websocket not open")
    }
  }



}
