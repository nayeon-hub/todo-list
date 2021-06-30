const body = document.querySelector("body");
const loginMenu = document.querySelector(".login-menu");
const modal = document.querySelector(".modal-container");
const closebtn = modal.querySelector(".close");
const userMenu = document.querySelector(".profile-menu");
const dropMenu = document.querySelector(".drop-menu");

loginMenu.addEventListener("click", () => {
  modal.classList.remove("hiding");
});

closebtn.addEventListener("click", () => {
  modal.classList.add("hiding");
});

userMenu.addEventListener("click", () => {
  const c = dropMenu.classList[1];
  if (c == "hiding") {
    dropMenu.classList.remove("hiding");
  } else {
    dropMenu.classList.add("hiding");
  }
});
