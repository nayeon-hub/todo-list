const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelectorAll("input");
const profileName = profileBtn.querySelector("span");

//localStorage에 저장
function localStore(value) {
  localStorage.setItem("UserName", value);
}

//login했을때
function logIn(event) {
  event.preventDefault();

  let v = loginInput[0].value;
  v = v.split("@");
  loginInput[0].value = "";
  loginInput[1].value = "";
  profileName.innerText = v[0];

  localStore(v[0]);

  loginModal.classList.add("hiding");
  profileBtn.classList.remove("hiding");
  loginBtn.classList.add("hiding");
}

//localStorage 체크
function profileShow() {
  const l = localStorage.getItem("UserName");
  if (l === "" || localStorage.key("UserName") === null) {
    profileBtn.classList.add("hiding");
    loginBtn.classList.remove("hiding");
  } else {
    profileBtn.classList.remove("hiding");
    loginBtn.classList.add("hiding");
    profileName.innerText = l;
  }
}

function init() {
  profileShow();
  loginForm.addEventListener("submit", logIn);
}

init();
