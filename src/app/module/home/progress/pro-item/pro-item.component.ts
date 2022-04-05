import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { PicDes } from 'src/app/interface/PicDes';

@Component({
  selector: 'app-pro-item',
  templateUrl: './pro-item.component.html',
  styleUrls: ['./pro-item.component.css']
})
export class ProItemComponent implements OnInit {
  @Input() progress!: PicDes;
  @Output() onClickProgress:EventEmitter<PicDes> = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClick(progress: PicDes){
    this.router.navigate(['/pic-info'], {state: {data:{progress}}});
  }

}
