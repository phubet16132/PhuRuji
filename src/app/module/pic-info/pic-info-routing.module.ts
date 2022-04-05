import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PicInfoComponent } from './pic-info.component';

const routes: Routes = [
  {
    path: '',
    component: PicInfoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PicInfoRoutingModule { }
