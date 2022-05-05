import { Component, OnInit } from '@angular/core';
import { ISingleTodo } from 'src/app/interfaces/single-todo.interface';
import { LoadTodoService } from 'src/app/services/load-todo.service';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  todos: ISingleTodo[] = [];
  
  getTodos(): void {
    this.userService.getAllTodos().subscribe(returnedTodos => this.todos = returnedTodos);
  }
  // public todos$?: Observable<ISingleTodo[]>;
  // currentTodos$?: Observable<ISingleTodo[]>;
  constructor(
    private userService: LoadTodoService
  ) { }

  // deleteTodo(currentTodo: ISingleTodo): void{
  //   this.todos = this.todos.filter(todo => todo.id !== currentTodo.id);
  // }

  // getTodos$: Observable<ISingleTodo[]> = of(this.todos);
  
  ngOnInit(): void {
    this.getTodos();
  }

}
