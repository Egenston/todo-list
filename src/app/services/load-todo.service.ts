import { Injectable } from '@angular/core';
import { ISingleTodo } from '../interfaces/single-todo.interface';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoadTodoService {
  
  getAllTodos(): Observable<ISingleTodo[]>{
    const todos = of(this.todos);
    return todos;
  }

  getTodo(id: number){
    return this.todos.filter(todo => todo.id == id);
  }

  addTodo(todo: ISingleTodo){
    this.todos.push(todo);
  }

  deleteTodo(currentTodo: ISingleTodo){
    this.todos = this.todos.filter(todo => todo.id !== currentTodo.id);
  }
  
  todos: ISingleTodo[] = [
    { 
      id: 0,
      name: "go to school",
      description: "learn",
      priority: "important"
    },
    { 
      id: 1,
      name: "training",
      description: "hit the gym",
      priority: "optional"
    }
  ]
  
  constructor() { }
}
