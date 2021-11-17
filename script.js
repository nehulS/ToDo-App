const todoBtn = document.querySelector(".todoBtn");
const todoInput = document.querySelector(".todoInput");
const todoList = document.querySelector(".todoList");
const deleteBtn = document.querySelector(".deleteBtn");

const addTodo = (e) => {
  e.preventDefault();

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todoItem");
  todoDiv.appendChild(newTodo);

  const trash = document.createElement("button");
  trash.innerText = "Delete";
  trash.classList.add("deleteBtn");
  todoDiv.appendChild(trash);

  todoList.appendChild(todoDiv);

  todoInput.value = "";
};

const deleteTodo = (e) => {
  const item = e.target;
  if (item.classList[0] === "deleteBtn") {
    const todo = item.parentElement;
    todo.remove();
  }
};

todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo);
