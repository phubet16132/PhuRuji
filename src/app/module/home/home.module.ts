import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeBarComponent } from './home-bar/home-bar.component';
import { TodoComponent } from './todo/todo.component';
import { PortfoiloComponent } from './portfoilo/portfoilo.component';
import { ProgressComponent } from './progress/progress.component';
import { ProfileComponent } from './profile/profile.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoResolver } from 'src/app/resolve/todo.resolver';
import { QRCodeModule } from 'angular2-qrcode';
import { ProItemComponent } from './progress/pro-item/pro-item.component';



@NgModule({
  declarations: [
    HomeComponent,
    HomeBarComponent,
    TodoComponent,
    PortfoiloComponent,
    ProgressComponent,
    ProfileComponent,
    TodoItemComponent,
    TodoAddComponent,
    ProItemComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    QRCodeModule,
  ]
})
export class HomeModule { }
