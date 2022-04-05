import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgressResolver } from 'src/app/resolve/progress.resolver';
import { TodoResolver } from 'src/app/resolve/todo.resolver';
import { HomeComponent } from './home.component';
import { PortfoiloComponent } from './portfoilo/portfoilo.component';
import { ProfileComponent } from './profile/profile.component';
import { ProgressComponent } from './progress/progress.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'todo',
        component: TodoComponent,
        resolve: {
          todoRe: TodoResolver
        }
      },
      {
        path: 'portfoilo',
        component: PortfoiloComponent,
      },
      {
        path: 'progress',
        component: ProgressComponent,
        resolve: {
          proRe: ProgressResolver
        }
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: '',
        component: ProfileComponent,
      },
    ]
  },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
