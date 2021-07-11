const body = document.querySelector("body");
const loginBtn = document.querySelector(".login-button");
const loginModal = document.querySelector("#login-page");
const loginClose = loginModal.querySelector(".close");
const profileBtn = document.querySelector(".profile-button");
const userDropMenu = document.querySelector(".drop-menu-user");
const header = document.querySelector("header");
const leftBox = document.querySelector(".container-left");

function showItem(element) {
  element.classList.remove("hiding");
}

function hideItem(element) {
  element.classList.add("hiding");
}

// 로그인 안됬을 때 로그인 button => modal 보여줌
loginBtn.addEventListener("click", () => {
  showItem(loginModal);
});

loginClose.addEventListener("click", () => {
  hideItem(loginModal);
});

//로그인 됬을 때 로그인 button => dropbtn 보여줌
profileBtn.addEventListener("click", () => {
  const c = userDropMenu.classList[1];
  if (c == "hiding") {
    showItem(userDropMenu);
  } else {
    hideItem(userDropMenu);
  }
});

header.addEventListener("contextmenu", (e) => e.preventDefault());
leftBox.addEventListener("contextmenu", (e) => e.preventDefault());
