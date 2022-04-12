import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameCardRoutingModule } from './game-card-routing.module';
import { GameCardComponent } from './game-card.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    GameCardComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    GameCardRoutingModule
  ]
})
export class GameCardModule { }
