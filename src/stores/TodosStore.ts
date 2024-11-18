import { makeAutoObservable } from "mobx";

type Todo = {
  id: number;
  text: string;
  done: boolean;
};

class Todos {
  public todos: Todo[] = [];
  public autoSave = true

  constructor(autosave = true) {
    makeAutoObservable(this);
    this.autoSave = autosave;
    this.loadTodos();
    return this;
  }

  addTodo = (todoText: string) => {
    if (!todoText) {
      return;
    }
    const newTodo: Todo = {
      id: Date.now(),
      text: todoText,
      done: false,
    };
    this.todos.push(newTodo);
    if (this.autoSave) this.saveTodos();
  };

  toggleTodo = (id: number) => {
    const todo = this.todos.find((t) => t.id === id);
    if (!todo) {
      return;
    }
    todo.done = !todo.done;
    if (this.autoSave) this.saveTodos();
  };

  editTodo = (id: number, text: string) => {
    const todo = this.todos.find((t) => t.id === id);
    if (!todo) {
      return;
    }
    todo.text = text;
    if (this.autoSave) this.saveTodos();
  };

  removeTodo = (id: number) => {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    if (this.autoSave) this.saveTodos();
  };

  toggleAutoSave = () => {
    this.autoSave = !this.autoSave;
  };

  loadTodos = () => {
    const todos = localStorage.getItem("todos");
    if (todos) {
      this.todos = JSON.parse(todos);
    }
  };

  saveTodos = () => {
    localStorage.setItem("todos", JSON.stringify(this.todos));
  };
}

const store = new Todos();

export default store;
export type { Todo };
