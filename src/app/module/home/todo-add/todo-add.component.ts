import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Todo } from 'src/app/interface/Todo';
import { TodoService } from 'src/app/service/todo.service';


@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {
  @Output() onAddTodo: EventEmitter<Todo> = new EventEmitter();
  todo!: string;
  dueDate!: string;

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.todo){
      alert("Enter a Todo List")
      return
    }
    else if(!this.dueDate){
      alert("Enter a Due Date")
      return
    }
    else{
      const newTodo = {
        todo: this.todo,
        due: this.dueDate
      }
  
      this.onAddTodo.emit(newTodo);
  
      console.log(this.todo);
    }

    this.todo = ""
    this.dueDate = ""
  }
}
