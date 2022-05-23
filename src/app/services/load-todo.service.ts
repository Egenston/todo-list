import { Injectable } from '@angular/core';
import { ISingleTodo } from '../interfaces/single-todo.interface';
import { Observable, of } from 'rxjs';
import { UUID } from 'angular2-uuid';
@Injectable({
  providedIn: 'root'
})
export class LoadTodoService {
  
  getAllTodos(): Observable<ISingleTodo[]>{
    return of(this.todos);
  }

  addTodo(){
    this.todos.push({
      id: UUID.UUID(),
      name: "",
      description: "",
      priority: "Normal",
      doneStatus: false
    });
    this.syncDatabase();
  }

  deleteTodo(currentTodo: ISingleTodo){
    this.todos = this.todos.filter(todo => todo.id !== currentTodo.id);
    this.syncDatabase()  
  }

  syncDatabase(){
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  todos: ISingleTodo[] = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")!) : [];

  constructor() { }
}
