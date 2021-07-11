const addProject = document.querySelector(".add-item");
const addProjectModal = document.querySelector("#project-add-page");
const addProjectForm = document.querySelector(".add-project-form");
const addProjectInput = addProjectForm.querySelector("input");
const addProjectBtn = document.querySelector(".add-project-modal-btn");
const addProjectCheck = addProjectBtn.querySelectorAll("button");
const navList = document.querySelector(".nav-project");
const projectDropMenu = document.querySelector(".drop-menu-project");
const pjDropUl = projectDropMenu.querySelector("ul");
const pjDropList = projectDropMenu.querySelectorAll("li");
const colorList = document.querySelectorAll(".color-circle");

let projectList = [];

//2. 저장한 프로젝트 리스트 요소 만들기
function itemCreate(content, color) {
  var l = document.createElement("li");
  var s = document.createElement("span");
  var t = document.createTextNode(content);
  s.style.backgroundColor = color;
  l.appendChild(s);
  l.appendChild(t);
  navList.appendChild(l);
}

//3. 프로젝트 리스트 보여주기
function projectShow() {
  const pjList = localStorage.getItem("project");
  if (pjList !== null) {
    projectList = JSON.parse(pjList);
    // console.log(projectList);
    projectList.forEach((element) => {
      itemCreate(element["value"], element["color"]);
    });
  }
}

//1. project에 값 저장하기
function projectStore(event, c) {
  event.preventDefault();
  const p = addProjectInput.value;
  const item = {};
  const id = Symbol();
  const color = c;
  item["id"] = id;
  item["value"] = p;
  item["color"] = color;

  //localstorage에 값 저장
  projectList.push(item);
  localStorage.setItem("project", JSON.stringify(projectList));

  //확인과 동시에 모달이 사라짐
  addProjectInput.value = "";
  addProjectModal.classList.add("hiding");

  //값을 가지고 리스트 요소 만들어줌
  itemCreate(item["value"], item["color"]);
}

//***project 추가하기***
function addPj() {
  let color = "rgb(160, 206, 98)";
  body.addEventListener("click", (e) => {
    if (e.target.classList[0] === "color-circle") {
      const element = window.getComputedStyle(e.target);
      color = element.getPropertyValue("background-color");
    }
  });
  addProjectForm.addEventListener("submit", function (e) {
    projectStore(e, color);
  });
  //project 추가하려고 modal 클릭 -> 작성 후 확인버튼 누르면 -> localstorage에 저장하고 -> modal창 사라지고 -> 리스트 생성하고 -> 리스트 보여주기
}

function editorPj(ogName, c) {
  addProjectForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const editName = addProjectInput.value;
    let newPjList = localStorage.getItem("project");
    newPjList = JSON.parse(newPjList); //string -> array로 바꿔줌

    newPjList.forEach((element) => {
      if (element.value === ogName) {
        element.value = editName;
      }
    });

    localStorage.setItem("project", JSON.stringify(newPjList));
    addProjectModal.classList.add("hiding");

    navList.innerHTML = "";
    projectShow();
  });
}

// ***project 수정하기 ***
function editPj(e) {
  //수정할래?
  const originName = e.target.innerText;
  pjDropList[0].addEventListener("click", () => {
    projectDropMenu.classList.add("hiding"); //dropMenu 숨기고
    addProjectModal.classList.remove("hiding"); //모달창 보여주고
    addProjectInput.value = originName; //input에 원래 text 보여줌
    addProjectInput.focus();
  });
  //수정하고 확인눌렀을 때
  editorPj(originName);
}

function actPjList() {
  const listItems = navList.querySelectorAll("li");

  //프로젝트 리스트 중 하나를 클릭했을 때! 드롭메뉴를 보여줌
  listItems.forEach((element) => {
    element.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      const text = e.target.innerText;
      const x = e.clientX;
      const y = e.clientY;
      projectDropMenu.style.top = `${y}px`;
      projectDropMenu.style.left = `${x}px`;
      projectDropMenu.classList.remove("hiding");

      //드롭메뉴에서 편집을 눌렀을 때!
      pjDropList[0].addEventListener("click", editPj(e)); //project 수정하기 기능

      //드롭메뉴에서 완료를 눌렀을 때!
      //드롭메뉴에서 삭제를 눌렀을 때! 드롭메뉴 사라짐 삭제 준비!!
      pjDropList[2].addEventListener("click", () => {
        const removeText = text;
        const lgValue = localStorage.getItem("project");
        console.log(
          JSON.stringify(
            JSON.parse(lgValue).filter((item) => item.value != removeText)
          ),
          removeText
        );
        localStorage.setItem(
          "project",
          JSON.stringify(
            JSON.parse(lgValue).filter((item) => item.value != removeText)
          )
        );

        projectDropMenu.classList.add("hiding"); //dropmenu 사라짐
      });
    });
    body.addEventListener("click", () => {
      projectDropMenu.classList.add("hiding"); //dropmenu 사라짐
    });
  });
}

function init() {
  projectShow(); //localStorage에 있는 값 보여주기

  //modal
  //프로젝트 추가를 눌렀을 때! 모달을 보여줌
  addProject.addEventListener("click", () => {
    addProjectModal.classList.remove("hiding");
    addPj(); //project 추가하기 기능 할 수 있다!
  });

  //모달의 취소버튼을 눌렀을 때! modal 사라짐
  addProjectCheck[0].addEventListener("click", () => {
    addProjectInput.value = "";
    addProjectModal.classList.add("hiding");
  });
  console.log("a");
  actPjList();
}

init();
