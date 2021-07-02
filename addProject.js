const addProject = document.querySelector(".add-item");
const addProjectModal = document.querySelector("#project-add-page");
const addProjectForm = document.querySelector(".add-project-form");
const addProjectInput = addProjectForm.querySelector("input");
const addProjectBtn = document.querySelector(".add-project-modal-btn");
const addProjectCheck = addProjectBtn.querySelectorAll("button");

addProjectCheck[0].addEventListener("click", () => {
  addProjectModal.classList.add("hiding");
});

addProject.addEventListener("click", () => {
  addProjectModal.classList.remove("hiding");
});

function projectStore() {
  addProjectForm.preventDefault();
  // const i = symbol();
  // // const cotent =
  // localStorage.getItem("Project", []);
  console.log("Hello");
}

function init() {
  addProjectForm.addEventListener("submit", projectStore);
}

init();
