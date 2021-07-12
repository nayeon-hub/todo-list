const navProjectUl = document.querySelector(".nav-project");
const navProjectLi = navProjectUl.querySelectorAll("li");
const containerR = document.querySelector(".container-right");
const hTwo = containerR.querySelector("h2");

navProjectLi.forEach((element) => {
  element.addEventListener("click", (e) => {
    hTwo.innerText = e.target.innerText;
  });
});
