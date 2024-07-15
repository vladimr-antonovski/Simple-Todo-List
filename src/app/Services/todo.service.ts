import { Injectable } from "@angular/core";
import { Todo } from "../Models/todo.model";

@Injectable ({
    providedIn: 'root'
})

export class TodoService {

    private todo: Todo[] = [];
    private nextId: number = 1;
 

getTodo(): Todo[] {
    return this.todo
}

addTodo(title: string, ): void {
const newTodo: Todo = {
    id: this.nextId++, title, completed: false
}
this.todo.push(newTodo)
}

deleteTodo(id: number): void {
    console.log(`Deleting todo with id ${id} `)
    this.todo = this.todo.filter( todo  => todo.id !== id)
    console.log(this.todo)
}



    
}