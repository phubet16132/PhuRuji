import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PicInfoRoutingModule } from './pic-info-routing.module';
import { PicInfoComponent } from './pic-info.component';
import { ImgSliderComponent } from './img-slider/img-slider.component';
import { NgImageSliderModule } from 'ng-image-slider';




@NgModule({
  declarations: [
    PicInfoComponent,
    ImgSliderComponent
  ],
  imports: [
    CommonModule,
    PicInfoRoutingModule,
    NgImageSliderModule
  ]
})
export class PicInfoModule { }
