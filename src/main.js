import Todo from "./todo.js";

const ENTER_KEY = 13;
const currentList = document.querySelector(".todo-list");
const input = document.querySelector(".todo-input");

let todos = [];
let id = 0;

input.addEventListener("keyup", enterkey, false);

function enterkey(event) {
  if (event.keyCode == ENTER_KEY) {
    const title = input.value.trim();
    if (!title) return;

    addTodo(title);
    input.value = null;
  }
}

const toDoItem = function (todos) {
  return `
		${todos
      .map(function (todo) {
        return `
          <li data-id="${todo.id}" class="todo-item">
            <input class="complete" type="checkbox" false />
            <label>${todo.title}</label>
            <button class="delete">X</button>
          </li>`;
      })
      .join("")}
  `;
};

function addTodo(value) {
  const newTodo = new Todo(id, value);
  todos.push(newTodo);
  currentList.innerHTML = toDoItem(todos);

  id++;
}
