const addProject = document.querySelector(".add-item");
const addProjectModal = document.querySelector("#project-add-page");
const addProjectForm = document.querySelector(".add-project-form");
const addProjectInput = addProjectForm.querySelector("input");
const addProjectBtn = document.querySelector(".add-project-modal-btn");
const addProjectCheck = addProjectBtn.querySelectorAll("button");
const navList = document.querySelector(".nav-project");
let projectList = [];

addProjectCheck[0].addEventListener("click", () => {
  addProjectModal.classList.add("hiding");
});

addProject.addEventListener("click", () => {
  addProjectModal.classList.remove("hiding");
});

function itemCreate(content) {
  var l = document.createElement("li");
  var t = document.createTextNode(content);
  l.appendChild(t);
  navList.appendChild(l);
}

function projectShow() {
  const pjList = localStorage.getItem("project");
  if (pjList !== null) {
    projectList = JSON.parse(pjList);
    console.log(projectList);
    projectList.forEach((element) => {
      itemCreate(JSON.parse(element)["value"]);
    });
  }
}

function projectStore(event) {
  event.preventDefault();

  const p = addProjectInput.value;
  const item = {};
  const id = Symbol();
  item["id"] = id;
  item["value"] = p;

  projectList.push(JSON.stringify(item));
  localStorage.setItem("project", JSON.stringify(projectList));
  addProjectInput.value = "";
  addProjectModal.classList.add("hiding");

  itemCreate(item["value"]);
}

function init() {
  projectShow();
  addProjectForm.addEventListener("submit", projectStore);
}

init();
