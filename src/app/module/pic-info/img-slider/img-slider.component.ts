import { Component, Input, OnInit } from '@angular/core';
import { PicDes } from 'src/app/interface/PicDes';

@Component({
  selector: 'app-img-slider',
  templateUrl: './img-slider.component.html',
  styleUrls: ['./img-slider.component.css']
})
export class ImgSliderComponent implements OnInit {
  @Input() picData?: PicDes;
  imgObj: any = [];
  imageObject: any = [];
  

  constructor() { }

  ngOnInit(): void {
    this.picData?.picPath.forEach(e => {
      this.imgObj.push(
        {
          image: e,
          thumbImage: e,
        }
        )
        console.log(e);
    });
  }
}
