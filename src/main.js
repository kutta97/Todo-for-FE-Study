"use strcit";

const ENTER_KEY = 13;
const currentList = document.querySelector(".todo-list");
const input = document.querySelector(".todo-input");

input.addEventListener("keyup", enterkey, false);

function enterkey(event) {
  if (event.keyCode == ENTER_KEY) {
    if (!input.value) return;

    addTodo(input.value);
    input.value = null;
  }
}

function addTodo(value) {
  const newList = document.createElement("li");

  newList.appendChild(document.createTextNode(value));
  currentList.appendChild(newList);
}
