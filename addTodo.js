const todoInputDiv = document.querySelector(".todo-input");
const todoInput = todoInputDiv.querySelector("input");
const proceedDiv = document.querySelector(".todo-proceed-box");
const proceedUl = proceedDiv.querySelector("ul");
let todoList = [];

function todoCreate(element) {
  const li = document.createElement("li");
  const ul = proceedDiv.querySelector("ul");
  li.innerText = element["value"];
  ul.appendChild(li);
  proceedDiv.appendChild(ul);
}

function todoShow() {
  let ls = localStorage.getItem("todoList");
  ls = JSON.parse(ls);
  ls.forEach((element) => {
    todoCreate(element);
  });
}

function todoStore(l) {
  todoList.push(l);
  localStorage.setItem("todoList", JSON.stringify(todoList));
  todoShow();
}

function init() {
  todoShow();
  todoInputDiv.addEventListener("submit", (e) => {
    e.preventDefault();
    let todoObject = {};
    todoObject["value"] = todoInput.value;
    todoInput.value = "";
    todoStore(todoObject);
  });
}

init();
