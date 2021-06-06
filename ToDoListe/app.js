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

  // liElem.textContent = inputField.value;

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.addEventListener("click", deleteListItem);

  let container = document.createElement("div");
  container.classList.add("itemContainer");

  let checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.addEventListener("change", checkListItem);

  container.appendChild(checkBox);
  container.appendChild(p5);
  container.appendChild(deleteBtn);

  liElem.appendChild(container);
  // liElem.appendChild(checkBox);
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
    textItem.classList.add("textItem");
  } else {
    console.log("entered else");
    listItem.classList.remove("checkBox");
    textItem.classList.remove("textItem");
  }
};

inputBtn.addEventListener("click", addTodoItem);
