const body = document.querySelector("body");
const loginMenu = document.querySelector(".login-menu");
const loginModal = document.querySelector("#login-page");
const loginClose = loginModal.querySelector(".close");
const userMenu = document.querySelector(".profile-menu");
const dropMenu = document.querySelector(".drop-menu");

loginMenu.addEventListener("click", () => {
  loginModal.classList.remove("hiding");
});

loginClose.addEventListener("click", () => {
  loginModal.classList.add("hiding");
});

userMenu.addEventListener("click", () => {
  const c = dropMenu.classList[1];
  if (c == "hiding") {
    dropMenu.classList.remove("hiding");
  } else {
    dropMenu.classList.add("hiding");
  }
});
