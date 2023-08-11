import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  todos: any[] = [];

  editedTodo: any = {};

  constructor(private todoService: TodoService) {
    this.todos = this.todoService.getTodos();
  }
  startEditing(index: number) {
    this.todos[index].editing = true;
  }
  addTodo(todo: string) {
    this.todoService.addTodo({ text: todo, done: false });
  }

  updateTodo(index: number, editedTodo: any) {
    editedTodo.editing = false;
    this.todoService.updateTodo(index, editedTodo);
    this.editedTodo = {};
  }

  deleteTodo(index: number) {
    this.todoService.deleteTodo(index);
  }
  // deleteTodo(index: number) {
  //   this.todoService.deleteTodo(index);
  //   this.todoService.updateLocalStorage(); // Save todos to local storage
  // }
}
