import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PicDes } from 'src/app/interface/PicDes';

@Component({
  selector: 'app-pic-info',
  templateUrl: './pic-info.component.html',
  styleUrls: ['./pic-info.component.css']
})
export class PicInfoComponent implements OnInit {

  constructor(private router: Router) { 
  }

  pro: PicDes = history.state.data.progress;

  ngOnInit(): void {
    console.log(this.pro.id);
  }

}
