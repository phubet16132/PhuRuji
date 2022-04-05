import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PicDes } from 'src/app/interface/PicDes';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {
  progresses: PicDes[] = [];
  
  constructor(private activatedRound: ActivatedRoute) { }

  ngOnInit(): void {
    this.progresses = this.activatedRound.snapshot.data['proRe']
  }

}
