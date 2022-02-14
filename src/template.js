export default class Template {
  todoList(todos) {
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
  }
}
