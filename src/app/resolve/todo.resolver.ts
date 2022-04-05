import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Todo } from '../interface/Todo';
import { TodoService } from '../service/todo.service';

@Injectable({
  providedIn: 'root'
})

export class TodoResolver implements Resolve<any> {

  constructor(private todoService: TodoService) { }

  resolve(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
    ):Observable<Todo[]>{
      console.log("rTodo");
      return this.todoService.getTodoList();
  }
}
