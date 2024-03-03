const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let todos = [];

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos) {
  const parsedTodos = JSON.parse(savedTodos);
  todos = [...parsedTodos];
  parsedTodos.forEach(paintTodo);
  // parsedTodos.forEach((item) => paintTodo(item));
}

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(e) {
  const li = e.target.parentElement;
  li.remove();
  todos = todos.filter((item) => parseInt(li.id) !== item.id);
  saveTodos();
}

function handleToDoSubmit(e) {
  e.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = { id: Date.now(), text: newTodo };
  todos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
}

function paintTodo(newTodoObj) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodoObj.text;
  li.id = newTodoObj.id;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);
  li.appendChild(button);
  li.appendChild(span);
  todoList.appendChild(li);
}

todoForm.addEventListener("submit", handleToDoSubmit);
