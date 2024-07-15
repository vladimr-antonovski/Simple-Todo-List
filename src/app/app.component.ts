import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoService } from './Services/todo.service';
import { Todo } from './Models/todo.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None,
  providers: [TodoService]
})
export class AppComponent {
  todo: Todo[];
  newTodoTitle: string = '';

  constructor (
   private todoService: TodoService
   
  ) {
    this.todo= this.todoService.getTodo()
  }

addTodo(): void {
  if(this.newTodoTitle.trim()) {
    this.todoService.addTodo(this.newTodoTitle)
    this.newTodoTitle = ''
  }
}

deleteTodo(id: number) {
 this.todoService.deleteTodo(id)
this.todo = this.todoService.getTodo()
}














}
