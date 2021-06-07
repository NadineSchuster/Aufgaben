"use strict";

const inputField = document.querySelector("input");
const inputBtn = document.querySelector("#input-container button");
let todoList = document.querySelector("#todo-list");

let addTodoItem = function (event) {
  event.preventDefault();

  let liElem = document.createElement("li");
  liElem.classList.add("listItem");

  let p5 = document.createElement("p5");
  p5.textContent = inputField.value;

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.addEventListener("click", deleteListItem);

  let textContainer = document.createElement("div");
  textContainer.classList.add("textContainer");

  let checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.addEventListener("change", checkListItem);

  textContainer.appendChild(p5);

  liElem.appendChild(checkBox);
  liElem.appendChild(textContainer);
  liElem.appendChild(deleteBtn);
  todoList.appendChild(liElem);

  // inputField.value = "";
};

let deleteListItem = function (event) {
  let item = event.target.parentElement;
  item.remove();
};

let checkListItem = function (event) {
  let listItem = event.target.parentElement;
  let textItem = event.target.nextElementSibling;

  if (event.target.checked) {
    console.log("entered if");
    listItem.classList.add("checkBox");
    textItem.firstChild.classList.add("textItem");
  } else {
    console.log("entered else");
    listItem.classList.remove("checkBox");
    textItem.firstChild.classList.remove("textItem");
  }
};

inputBtn.addEventListener("click", addTodoItem);
