import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../interface/Todo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  private apiUrl = 'http://localhost:5000/todos';

  constructor(private http: HttpClient) { }

  getTodoList(): Observable<Todo[]>{
    return this.http.get<Todo[]>(this.apiUrl);
  }

  addTodoList(todo: Todo): Observable<Todo>{
    return this.http.post<Todo>(this.apiUrl, todo, httpOptions);
  }

  deleteTodo(todo: Todo){
    const url = `${this.apiUrl}/${todo.id}`;
    return this.http.delete<Task>(url);
  }

}
