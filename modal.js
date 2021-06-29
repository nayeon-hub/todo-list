const body = document.querySelector("body");
const modal = document.querySelector(".modal-container");
const loginMenu = document.querySelector(".login-menu");
const closebtn = modal.querySelector(".close");

loginMenu.addEventListener("click", () => {
  modal.classList.remove("non-clicked");
});

closebtn.addEventListener("click", () => {
  modal.classList.add("non-clicked");
});
