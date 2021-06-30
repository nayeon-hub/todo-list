const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelectorAll("input");
const profileMenu = document.querySelector(".profile-menu");
const profileName = profileMenu.querySelector("span");

//localStorage에 저장
function localStore(key, value) {
  localStorage.setItem(key, value);
}

//login했을때
function loginClick(event) {
  event.preventDefault();

  let v = loginInput[0].value;
  v = v.split("@");
  loginInput[0].value = "";
  loginInput[1].value = "";
  profileName.innerText = v[0];

  localStore("UserName", v[0]);

  modal.classList.add("hiding");
  profileMenu.classList.remove("hiding");
  loginMenu.classList.add("hiding");
}

//localStorage 체크
function profileShow() {
  const l = localStorage.getItem("UserName");
  if (l === "" || localStorage.key("UserName") === null) {
    profileMenu.classList.add("hiding");
    loginMenu.classList.remove("hiding");
  } else {
    profileMenu.classList.remove("hiding");
    loginMenu.classList.add("hiding");
    profileName.innerText = l;
  }
}

function init() {
  profileShow();
  loginForm.addEventListener("submit", loginClick);
}

init();
