const logOutBtn = document.querySelector(".logout");

function logOut() {
  const l = localStorage.getItem("UserName");
  localStorage.removeItem("UserName");
  userDropMenu.classList.add("hiding");
  profileShow();
}
function init() {
  profileShow();
  logOutBtn.addEventListener("click", logOut);
}

init();
