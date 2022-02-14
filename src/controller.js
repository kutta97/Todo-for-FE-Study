import View from "./view.js";
import Model from "./model.js";

export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    view.bindAddItem(this.addTodo.bind(this));
    view.bindRemoveItem(this.removeTodo.bind(this));
    view.bindCompleteItem(this.completeTodo.bind(this));
  }

  addTodo(title) {
    this.model.insert(title, () => {
      this.view.clearInput();
      this.view.showTodos(this.model.todos);
    });
  }

  removeTodo(event) {
    const id = parseInt(event.target.parentNode.dataset.id);
    if (event.target.className === "delete") {
      this.model.remove(id, () => {
        this.view.removeTodo(id);
      });
    }
  }

  completeTodo(event) {
    const id = parseInt(event.target.parentNode.dataset.id);
    if (event.target.className === "complete") {
      if (event.target.checked) {
        this.model.update(id, true, () => {
          this.view.setTodoComplete(id, true);
        });
      } else {
        this.model.update(id, false, () => {
          this.view.setTodoComplete(id, false);
        });
      }
      return;
    }
  }
}
