const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelectorAll("input");
const loginBtn = document.querySelector(".login");

function localStore(key, value) {
  localStorage.setItem(key, value);
}

function strCheck() {
  let v = loginInput[0].value;
  v = v.split("@");
  localStore("UserName", v[0]);
}

// function showName() {

// }

loginBtn.addEventListener("click", strCheck);

if (UserName !== "") {
}
