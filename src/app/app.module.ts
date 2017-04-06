import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {ConnectionService} from "../providers/ConnectionService";
import { RoundEntityComponent } from './round-entity/round-entity.component';

@NgModule({
  declarations: [
    AppComponent,
    RoundEntityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ConnectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
