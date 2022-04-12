import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoResolver } from './resolve/todo.resolver';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: ()=>
      import('./module/home/home.module').then((m) => m.HomeModule),
  },

  {
    path: 'login',
    loadChildren: () =>
      import('./module/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'pic-info',
    loadChildren: ()=>
      import('./module/pic-info/pic-info.module').then((m) => m.PicInfoModule)
  },
  {
    path: 'game-card',
    loadChildren: ()=>
      import('./module/game-card/game-card.module').then((m) => m.GameCardModule)
  },
  {
    path: '',
    loadChildren: () =>
      import('./module/login/login.module').then((m) => m.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
