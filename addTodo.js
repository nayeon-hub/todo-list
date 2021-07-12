const todoInputDiv = document.querySelector(".todo-input");
const todoInput = todoInputDiv.querySelector("input");
const proceedDiv = document.querySelector(".todo-proceed-box");
let todoList = [];

function todoCreate(str, space) {
  const li = document.createElement("li");
  const btn1 = document.createElement("button");
  const btn2 = document.createElement("button");
  const span = document.createElement("span");
  btn1.innerText = "✅";
  btn2.innerText = "❌";
  span.innerText = str;
  li.appendChild(btn1);
  li.appendChild(btn2);
  li.appendChild(span);
  space.appendChild(li);
  proceedDiv.appendChild(space);
}

function todoShow() {
  let ls = JSON.parse(localStorage.getItem("todoList"));
  if (ls !== null) {
    ls.forEach((element) => {
      const ul = proceedDiv.querySelector("ul");
      todoCreate(element["value"], ul);
    });
  }
}

function proceedStore(l) {
  const ul = proceedDiv.querySelector("ul");
  todoList = JSON.parse(localStorage.getItem("todoList"));
  if (todoList === null) {
    todoList = [];
  }
  todoList.push(l);
  localStorage.setItem("todoList", JSON.stringify(todoList));
  todoCreate(l["value"], ul);
}

function init() {
  todoShow();
  todoInputDiv.addEventListener("submit", (e) => {
    e.preventDefault();
    const todoObject = {};
    todoObject["value"] = todoInput.value;
    todoInput.value = "";
    proceedStore(todoObject);
  });
}

init();
