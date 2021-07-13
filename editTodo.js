const proceedUl = proceedDiv.querySelector("ul");
const proceedLi = proceedUl.querySelectorAll("li");
const completeDiv = document.querySelector(".todo-complete");
let proceedList = [];

function completeStore(str) {
  const ul = completeDiv.querySelector("ul");
  proceedList = JSON.parse(localStorage.getItem("proceedTodo"));
  const proceedObj = {};
  proceedObj["value"] = str;
  console.log(proceedObj);
  proceedList.push(proceedObj);
  localStorage.setItem("proceedTodo", proceedList);
  todoCreate(proceedObj["value"], ul);
}

function init() {
  proceedLi.forEach((element) => {
    const btns = element.querySelectorAll("button");
    const span = element.querySelector("span");
    btns[0].addEventListener("click", () => {
      completeStore(span.innerText);
    });
    btns[1].addEventListener("click", () => {
      console.log(e.target);
    });
  });
}

init();
