import { Component } from '@angular/core';
import { LoadTodoService } from 'src/app/services/load-todo.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent{

  get todos() {
    return this.loadTodoService.getAllTodos();
  }

  addTodo(): void{
    this.loadTodoService.addTodo();
  }

  constructor(
    private loadTodoService: LoadTodoService
  ) { }

}
