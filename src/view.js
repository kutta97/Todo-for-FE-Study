import Template from "./template.js";
const ENTER_KEY = 13;

export default class View {
  constructor(template) {
    this.template = template;
    this.todoList = document.querySelector(".todo-list");
    this.input = document.querySelector(".todo-input");
  }

  showTodos(todos) {
    this.todoList.innerHTML = this.template.todoList(todos);
  }

  removeTodo(id) {
    const todo = document.querySelector(`[data-id="${id}"]`);
    if (todo) {
      this.todoList.removeChild(todo);
    }
  }

  setTodoComplete(id, completed) {
    const todo = document.querySelector(`[data-id="${id}"]`);
    if (completed) {
      todo.style.textDecorationLine = "line-through";
    } else {
      todo.style.textDecorationLine = "";
    }
  }

  clearInput() {
    this.input.value = "";
  }

  bindAddItem(handler) {
    this.input.addEventListener("keyup", function (event) {
      if (event.keyCode == ENTER_KEY) {
        const title = event.target.value.trim();
        if (title) {
          handler(title);
        }
      }
    });
  }

  bindRemoveItem(handler) {
    this.todoList.addEventListener("click", handler);
  }

  bindCompleteItem(handler) {
    this.todoList.addEventListener("click", handler);
  }
}
