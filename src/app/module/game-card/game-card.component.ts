import { Component, OnInit, Output, QueryList, ViewChildren, EventEmitter } from '@angular/core';
import { Card, cards } from 'src/app/interface/Card';
import { CardComponent } from './card/card.component';
import { concatMap, delay, map,  tap } from "rxjs/operators";
import { of } from 'rxjs';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {
  cards: Card[] = []; 
  cardinit: Card[] = cards;
  check: Card[] = [];
  time: number = 0 ;
  limit: number = 8;
  @ViewChildren('card')  cardComponent!: QueryList<CardComponent> ;


  constructor() { }

  ngOnInit(): void {
    const randLen: number = cards.length;
    for(let i=0; i < randLen; i++){
      let randIndex = Math.floor(Math.random()*this.cardinit.length)
      this.cards.push(this.cardinit[randIndex]);
      this.cardinit.splice(randIndex, 1);
    }
  }

  cardCome(card: Card){
    this.check.push(card);
    delay(1000)
    if(this.check.length == 2){
      this.time++;
      this.isParied(this.check)
      this.check = []
      this.cardComponent.forEach( e => {
        delay(1000)
        e.reset();
      })
    }
    console.log(this.check);
    if(this.time == this.limit){
      alert('Game Over\n timeout')
      window.location.reload();
    }
  }


  isParied(cards: Card[]){
    if(cards[0].id != cards[1].id && cards[0].color == cards[1].color){
      this.cardComponent.forEach( e => {
        if(e.card.id == cards[0].id || e.card.id == cards[1].id){
          cards[0].paired = true;
          cards[1].paired = true;
          if(this.isWin()){
            window.location.reload();
            alert('You Win!!!')
          }
        }
      })
    }
    else if (cards[0].id == cards[1].id){
      alert('Duplicate Card');
    }
    else{
      alert('Wrong');
    }
  }


  isWin(){
    let acc = true;
    this.cardComponent.forEach( e => {
      acc = acc && e.card.paired;
    })
    return acc
  }

}
