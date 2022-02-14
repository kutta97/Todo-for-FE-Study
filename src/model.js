import Todo from "./todo.js";

export default class Model {
  constructor() {
    this.todos = [];
    this.id = 0;
  }

  update(id, check, callback) {
    this.todos.forEach((todo) => {
      if (todo.id === id) {
        todo.completed = check;
      }
    });

    if (callback) {
      callback();
    }
  }

  insert(title, callback) {
    const newTodo = new Todo(this.id, title);
    this.todos.push(newTodo);
    this.id++;

    if (callback) {
      callback();
    }
  }

  remove(id, callback) {
    this.todos = this.todos.filter((todo) => todo.id !== id);

    if (callback) {
      callback();
    }
  }
}
