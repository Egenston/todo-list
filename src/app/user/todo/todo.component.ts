import { Component, Input} from '@angular/core';
import { ISingleTodo } from 'src/app/interfaces/single-todo.interface';
import { LoadTodoService } from 'src/app/services/load-todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent{
   
  @Input()
  todo!: ISingleTodo;
  inputIsDisabled: boolean = true;
  menuOpened: boolean = false;
  priorityValues: string[] = ["Low", "Normal", "Important", "Critical"];

  constructor(
    private loadTodoService: LoadTodoService
  ) {}

  toggleEdit(): void{
    this.inputIsDisabled = !this.inputIsDisabled;
  }

  toggleMenuState(): void{
    this.menuOpened = !this.menuOpened;
    this.inputIsDisabled = true;
  }

  deleteTodo(): void{
    this.loadTodoService.deleteTodo(this.todo);
  }

  toggleDoneStatus(): void{
    this.todo.doneStatus = !this.todo.doneStatus;
    this.menuOpened = false;
    this.inputIsDisabled = true;
    this.updateDatabase();
  }

  updateDatabase(): void{
    this.loadTodoService.syncDatabase();
  }
}
