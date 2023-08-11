import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: any[] = [];

  constructor() {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      this.todos = JSON.parse(storedTodos);
    }
  }
  getTodos() {
    return this.todos;
  }

  addTodo(todo: any) {
    this.todos.push(todo);
    this.updateAndSave();
  }

  updateTodo(index: number, todo: any) {
    this.todos[index] = todo;
    this.updateAndSave();
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
    this.updateAndSave();
  }

  private updateAndSave() {
    this.updateLocalStorage();
  }

  private updateLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
