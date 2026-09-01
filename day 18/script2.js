let input = document.getElementById("todo-input");
let addButton = document.getElementById("add-button");
let todoList = document.getElementById("todo-list");

addButton.addEventListener("click", addTodo);

function addTodo() {

  let task = input.value;

  if (task === "") {
    return;
  }

  let li = document.createElement("li");

  li.innerText = task;

  let deleteButton = document.createElement("button");

  deleteButton.innerText = "Delete";

  deleteButton.classList.add("delete-button");

  deleteButton.addEventListener("click", function () {
    li.remove();
  });

  li.append(deleteButton);

  todoList.append(li);

  input.value = "";
}