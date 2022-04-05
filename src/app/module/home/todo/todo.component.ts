import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from 'src/app/interface/Todo';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  
  constructor(private todoService:TodoService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.todoService.getTodoList().subscribe(todos => this.todos = todos)
    this.todos = this.activatedRoute.snapshot.data['todoRe']
  }

  addTodo(todo: Todo){
    this.todoService.addTodoList(todo).subscribe(todo => this.todos.push(todo))
  }

  deleteTodo(todo: Todo){
    this.todoService.deleteTodo(todo).subscribe(
      () => (this.todos = this.todos.filter((t) => t.id !== todo.id))
    )
  }

}
