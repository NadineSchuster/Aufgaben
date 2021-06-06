"use strict";

const inputField = document.querySelector("input");
const inputBtn = document.querySelector("#input-container button");
let todoList = document.querySelector("#todo-list");

let addTodoItem = function (event) {
  event.preventDefault();

  let liElem = document.createElement("li");
  liElem.classList.add("listItem");
  liElem.textContent = inputField.value;

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.addEventListener("click", deleteListItem);

  let checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.addEventListener("change", checkListItem);

  liElem.appendChild(checkBox);
  liElem.appendChild(deleteBtn);
  todoList.appendChild(liElem);

  inputField.value = "";
};

let deleteListItem = function (event) {
  let item = event.target.parentElement;
  item.remove();
};

let checkListItem = function (event) {
  let listItem = event.target.parentElement;

  if (event.target.checked) {
    console.log("entered if");
    listItem.classList.add("checkBox");
  } else {
    console.log("entered else");
    listItem.classList.remove("checkBox");
  }
};

inputBtn.addEventListener("click", addTodoItem);
