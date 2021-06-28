body = document.querySelector("body");
modal = document.querySelector(".modal-container");
loginbtn = document.querySelector(".login-btn");
closebtn = modal.querySelector(".close");
console.log(modal);

loginbtn.addEventListener("click", () => {
  modal.classList.remove("non-clicked");
});

closebtn.addEventListener("click", () => {
  modal.classList.add("non-clicked");
});
