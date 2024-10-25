import { makeAutoObservable } from "mobx";

type Todo = {
  id: number;
  text: string;
  done: boolean;
};

class Todos {
  public todos: Todo[] = [];
  public todoText: string = "";

  constructor() {
    makeAutoObservable(this);
    this.loadTodos();
    return this;
  }

  setTodoText = (text: string) => {
    this.todoText = text;
  };

  addTodo = () => {
    if (!this.todoText) {
      return;
    }
    const newTodo: Todo = {
      id: Date.now(),
      text: this.todoText,
      done: false,
    };
    this.todos.push(newTodo);
    this.todoText = "";
  };

  toggleTodo = (id: number) => {
    const todo = this.todos.find((t) => t.id === id);
    if (!todo) {
      return;
    }
    todo.done = !todo.done;
  };

  editTodo = (id: number, text: string) => {
    const todo = this.todos.find((t) => t.id === id);
    if (!todo) {
      return;
    }
    todo.text = text;
  };

  removeTodo = (id: number) => {
    this.todos = this.todos.filter((todo) => todo.id !== id);
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
