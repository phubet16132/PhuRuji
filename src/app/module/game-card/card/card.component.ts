import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Card, cards } from 'src/app/interface/Card';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card! : Card;
  color = '';
  @Output() cardSeleted : EventEmitter<Card> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  selectedCard(){
    this.color = this.card.color
    console.log("selected");
    console.log(this.card.id);
    this.cardSeleted.emit();
  }
  
  reset(){
    this.color = '';
  }
}
